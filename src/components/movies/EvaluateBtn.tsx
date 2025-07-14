import { useState, useRef, useEffect } from "react";
import {
  persistEvaluation,
  fetchEvaluationForMovie,
  type EvaluationType,
} from "../../utils/evaluationUtil";
import styled from "styled-components";
import likeIcon from "../../assets/like.svg";
import dislikeIcon from "../../assets/dislike.svg";
import tvIcon from "../../assets/tv.svg";
import likeFill from "../../assets/like-fill.svg";
import dislikeFill from "../../assets/dislike-fill.svg";
import tvFill from "../../assets/tv-fill.svg";
import { useRecoilState, useRecoilValue } from "recoil";
import { evaluationFamily } from "../../atoms/evaluationAtom";
import React from "react";
import { userState } from "../../atoms/userAtom";

const Wrapper = styled.div`
  position: relative;
  display: inline-block;
  width: 180px;
`;

const DropdownButton = styled.button`
  background-color: #1f1f1f;
  color: white;
  padding: 8px 12px;
  border: 1px solid #444;
  border-radius: 4px;
  cursor: pointer;
  width: 100%;
  display: flex;
  align-items: center;
  gap: 8px;

  img {
    width: 20px;
    height: 20px;
    object-fit: contain;
  }
`;

const DropdownList = styled.ul`
  position: absolute;
  top: 100%;
  left: 0;
  background: #333;
  padding: 8px 0;
  margin: 4px 0 0;
  border-radius: 4px;
  border: 1px solid #444;
  z-index: 10;
`;

const DropdownItem = styled.li`
  display: flex;
  align-items: flex-end;
  gap: 12px;
  padding: 8px 12px;
  cursor: pointer;
  color: white;
  transition: background 0.2s;

  &:hover {
    background: #555;
  }

  img {
    width: 20px;
    height: 20px;
    object-fit: contain;
  }
`;

const options: {
  key: EvaluationType;
  label: string;
  icon: string;
  iconFill: string;
}[] = [
  { key: "like", label: "面白かった", icon: likeIcon, iconFill: likeFill },
  {
    key: "dislike",
    label: "面白くなかった",
    icon: dislikeIcon,
    iconFill: dislikeFill,
  },
  { key: "want_to_see", label: "見てみたい", icon: tvIcon, iconFill: tvFill },
];

type EvaluateBtnProps = {
  movieId: number;
  original_title: string;
  backdrop_path: string;
  poster_path: string;
};

function EvaluateBtn({
  movieId,
  original_title,
  backdrop_path,
  poster_path,
}: EvaluateBtnProps) {
  const user = useRecoilValue(userState);
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useRecoilState(evaluationFamily(movieId));
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = () => setIsOpen((prev) => !prev);

  const current = options.find((o) => o.key === selected);

  const handleSelect = async (key: EvaluationType) => {
    if (!user) return;

    await persistEvaluation(movieId, key, selected, {
      title: original_title,
      poster_path,
      backdrop_path,
      movieId,
    });

    setSelected(key);
    setIsOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        setIsOpen(false);
      }
    };
    window.addEventListener("mousedown", handleClickOutside);
    return () => window.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    if (!selected) {
      fetchEvaluationForMovie(movieId).then((value) => {
        if (value) {
          setSelected(value);
        }
      });
    }
  }, [movieId, selected]);

  if (!user) return null;
  return (
    <Wrapper ref={dropdownRef}>
      <DropdownButton onClick={toggleDropdown}>
        {current ? (
          <>
            <img src={current.iconFill} alt={current.key || ""} />
            {current.label}
          </>
        ) : (
          <>評価 ▼</>
        )}
      </DropdownButton>
      {isOpen && (
        <DropdownList>
          {options.map((opt) => (
            <DropdownItem key={opt.key} onClick={() => handleSelect(opt.key)}>
              <img src={opt.icon} alt={opt.key || ""} />
              {opt.label}
            </DropdownItem>
          ))}
        </DropdownList>
      )}
    </Wrapper>
  );
}

export default React.memo(EvaluateBtn);
