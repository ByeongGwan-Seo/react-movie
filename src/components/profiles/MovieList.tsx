import { useRecoilValue } from "recoil";
import { userState } from "../../atoms/userAtom";
import { useQuery } from "@tanstack/react-query";
import { getLikedMovies } from "../../apis/profiles";
import * as HomeStyle from "../../styled-components/home/StyledHome";
import { useEffect } from "react";

function MovieList() {
  const user = useRecoilValue(userState);
  const userId = user?.uid;

  const { data: liked = [], isLoading: loadingLike } = useQuery({
    queryKey: ["liked", userId],
    queryFn: () => getLikedMovies(userId!),
    enabled: !!userId,
  });

  useEffect(() => {
    console.log("🔥 Liked movies:", liked);
  }, [liked]);

  if (!userId) return null;
  if (loadingLike) return <HomeStyle.Loader>Loading...</HomeStyle.Loader>;

  return (
    <>
      <h2>面白かった</h2>
      {liked.length ? (
        liked.map((m) => <div key={m.movieId}>{m.title}</div>)
      ) : (
        <div>なし</div>
      )}
    </>
  );
}

export default MovieList;
