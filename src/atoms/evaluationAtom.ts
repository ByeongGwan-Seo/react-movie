import { atomFamily } from "recoil";
import type { EvaluationType } from "../utils/evaluationUtil";

export const evaluationFamily = atomFamily<EvaluationType, number>({
  key: "evaluationFamily",
  default: null,
});
