import { ACCURACY } from "@/constants/calculator";

export default function toAccuracy(value: number, accuracy: number = ACCURACY) {
  return +value.toFixed(accuracy);
}
