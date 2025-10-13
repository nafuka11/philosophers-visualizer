import { PhiloAction } from "./PhiloAction";

export type TimeRange = {
  min: number;
  max: number;
};

export type PhiloLogProcessingResult = {
  actions: PhiloAction[];
  range: TimeRange;
  errors: string[];
};
