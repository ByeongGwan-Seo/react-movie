import { useRecoilValue } from "recoil";
import * as ProfileStyle from "../styled-components/home/StyledProfile";
import * as HomeStyle from "../styled-components/home/StyledHome";
import { userState } from "../atoms/userAtom";
import { useQuery } from "@tanstack/react-query";
import {
  getDislikedMovies,
  getLikedMovies,
  getWantToSeeMovies,
} from "../apis/profiles";
import ProfileSlider from "../components/profiles/ProfileSlider";

function Profile() {
  const user = useRecoilValue(userState);
  const userId = user?.uid;

  const { data: liked = [], isLoading: loadingLike } = useQuery({
    queryKey: ["liked", userId],
    queryFn: () => getLikedMovies(userId!),
    enabled: !!userId,
  });

  const { data: disliked = [], isLoading: loadingDislike } = useQuery({
    queryKey: ["disliked", userId],
    queryFn: () => getDislikedMovies(userId!),
    enabled: !!userId,
  });

  const { data: wantToSee = [], isLoading: loadingWant } = useQuery({
    queryKey: ["want_to_see", userId],
    queryFn: () => getWantToSeeMovies(userId!),
    enabled: !!userId,
  });

  const isLoadingUser = !user;
  const isLoadingData = loadingLike || loadingDislike || loadingWant;

  if (isLoadingUser || isLoadingData) {
    return <HomeStyle.Loader>読み込み中...</HomeStyle.Loader>;
  }

  return (
    <>
      <ProfileStyle.Wrapper>
        <ProfileStyle.Title>{`${user?.displayName}さんが評価した映画です`}</ProfileStyle.Title>
        <ProfileSlider data={liked} title="面白かった" evalType="liked" />
        <ProfileSlider
          data={disliked}
          title="面白くなかった"
          evalType="disliked"
        />
        <ProfileSlider
          data={wantToSee}
          title="見てみたい"
          evalType="want_to_see"
        />
      </ProfileStyle.Wrapper>
    </>
  );
}

export default Profile;
