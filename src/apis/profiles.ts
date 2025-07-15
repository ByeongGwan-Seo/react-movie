import {
  collection,
  getDocs,
  getFirestore,
  query,
  type FirestoreDataConverter,
} from "firebase/firestore";
import { app } from "../firebase";
import type { EvaluationType } from "../utils/evaluationUtil";

const db = getFirestore(app);

export type MovieMeta = {
  title: string;
  poster_path: string;
  backdrop_path?: string;
  comment?: string;
  rating?: number;
  updatedAt?: string;
  movieId: number;
};

const movieConverter: FirestoreDataConverter<MovieMeta> = {
  toFirestore(data) {
    return data;
  },
  fromFirestore(snapshot) {
    const data = snapshot.data();
    return {
      title: data.title,
      poster_path: data.poster_path,
      backdrop_path: data.backdrop_path,
      comment: data.comment,
      rating: data.rating,
      updatedAt: data.updatedAt,
      movieId: data.movieId,
    };
  },
};

async function fetchMoviesByEvaluation(
  userId: string,
  evalType: EvaluationType
): Promise<MovieMeta[]> {
  const col = collection(
    db,
    "users",
    userId,
    `movieInfo_${evalType}`
  ).withConverter(movieConverter);
  const q = query(col);
  const snapshot = await getDocs(q);

  return snapshot.docs.map((doc) => {
    const data = doc.data();
    return {
      ...data,
      movieId: Number(doc.id),
    };
  });
}

export function getLikedMovies(uid: string) {
  return fetchMoviesByEvaluation(uid, "like");
}

export function getDislikedMovies(uid: string) {
  return fetchMoviesByEvaluation(uid, "dislike");
}

export function getWantToSeeMovies(uid: string) {
  return fetchMoviesByEvaluation(uid, "want_to_see");
}
