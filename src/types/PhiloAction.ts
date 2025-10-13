export type ActionType = "eat" | "sleep" | "think";

export type PhiloAction = {
  philoNum: number;
  type: ActionType;
  startTime: number;
  endTime: number;
};
