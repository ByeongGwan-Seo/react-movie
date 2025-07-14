// utils/firestoreEvaluation.ts
import {
  doc,
  setDoc,
  deleteDoc,
  getDoc,
  getFirestore,
} from "firebase/firestore";
import { app } from "../firebase";
import { firebaseAuth } from "./firebaseAuth";

const db = getFirestore(app);

export type EvaluationType = "like" | "dislike" | "want_to_see" | null;

type MovieMeta = {
  title: string;
  poster_path: string;
  backdrop_path?: string;
  comment?: string;
  rating?: number;
  updatedAt?: string;
};

export const fetchEvaluationForMovie = async (
  movieId: number
): Promise<EvaluationType> => {
  const user = firebaseAuth.currentUser;
  if (!user) return null;

  const types: EvaluationType[] = ["like", "dislike", "want_to_see"];
  for (const type of types) {
    const ref = doc(
      db,
      "users",
      user.uid,
      `movieInfo_${type}`,
      String(movieId)
    );
    const snap = await getDoc(ref);
    if (snap.exists()) return type;
  }

  return null;
};

export const persistEvaluation = async (
  movieId: number,
  newType: EvaluationType,
  previousType: EvaluationType,
  data: MovieMeta
) => {
  const user = firebaseAuth.currentUser;
  if (!user || !newType) return;

  const newRef = doc(
    db,
    "users",
    user.uid,
    `movieInfo_${newType}`,
    String(movieId)
  );

  if (previousType && previousType !== newType) {
    const oldRef = doc(
      db,
      "users",
      user.uid,
      `movieInfo_${previousType}`,
      String(movieId)
    );
    await deleteDoc(oldRef);
  }

  await setDoc(newRef, {
    ...data,
    updatedAt: new Date().toISOString(),
  });
};
