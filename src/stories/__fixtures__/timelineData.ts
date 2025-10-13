import { PhiloAction } from "../../types/PhiloAction";
import { TimeRange } from "../../types/PhiloLogProcessingResult";

const baseTime = Date.UTC(2024, 0, 1, 12, 0, 0);

export const standardCaseActions: PhiloAction[] = [
  {
    philoNum: 1,
    type: "eat",
    startTime: baseTime,
    endTime: baseTime + 200,
  },
  {
    philoNum: 1,
    type: "sleep",
    startTime: baseTime + 200,
    endTime: baseTime + 400,
  },
  {
    philoNum: 1,
    type: "think",
    startTime: baseTime + 400,
    endTime: baseTime + 600,
  },
  {
    philoNum: 1,
    type: "eat",
    startTime: baseTime + 600,
    endTime: baseTime + 800,
  },
  {
    philoNum: 1,
    type: "sleep",
    startTime: baseTime + 800,
    endTime: baseTime + 1000,
  },
  {
    philoNum: 1,
    type: "think",
    startTime: baseTime + 1000,
    endTime: baseTime + 1000,
  },
  {
    philoNum: 1,
    type: "eat",
    startTime: baseTime + 1000,
    endTime: baseTime + 1200,
  },
  {
    philoNum: 1,
    type: "sleep",
    startTime: baseTime + 1200,
    endTime: baseTime + 1400,
  },
  {
    philoNum: 1,
    type: "think",
    startTime: baseTime + 1400,
    endTime: baseTime + 1400,
  },
  {
    philoNum: 1,
    type: "eat",
    startTime: baseTime + 1400,
    endTime: baseTime + 1600,
  },
  {
    philoNum: 1,
    type: "sleep",
    startTime: baseTime + 1600,
    endTime: baseTime + 1800,
  },
  {
    philoNum: 1,
    type: "think",
    startTime: baseTime + 1800,
    endTime: baseTime + 1800,
  },
  {
    philoNum: 1,
    type: "eat",
    startTime: baseTime + 1800,
    endTime: baseTime + 2000,
  },
  {
    philoNum: 1,
    type: "sleep",
    startTime: baseTime + 2000,
    endTime: baseTime + 2200,
  },
  {
    philoNum: 1,
    type: "think",
    startTime: baseTime + 2200,
    endTime: baseTime + 2200,
  },
  {
    philoNum: 2,
    type: "eat",
    startTime: baseTime,
    endTime: baseTime + 200,
  },
  {
    philoNum: 2,
    type: "sleep",
    startTime: baseTime + 200,
    endTime: baseTime + 400,
  },
  {
    philoNum: 2,
    type: "think",
    startTime: baseTime + 400,
    endTime: baseTime + 400,
  },
  {
    philoNum: 2,
    type: "eat",
    startTime: baseTime + 400,
    endTime: baseTime + 600,
  },
  {
    philoNum: 2,
    type: "sleep",
    startTime: baseTime + 600,
    endTime: baseTime + 800,
  },
  {
    philoNum: 2,
    type: "think",
    startTime: baseTime + 800,
    endTime: baseTime + 800,
  },
  {
    philoNum: 2,
    type: "eat",
    startTime: baseTime + 800,
    endTime: baseTime + 1000,
  },
  {
    philoNum: 2,
    type: "sleep",
    startTime: baseTime + 1000,
    endTime: baseTime + 1200,
  },
  {
    philoNum: 2,
    type: "think",
    startTime: baseTime + 1200,
    endTime: baseTime + 1400,
  },
  {
    philoNum: 2,
    type: "eat",
    startTime: baseTime + 1400,
    endTime: baseTime + 1600,
  },
  {
    philoNum: 2,
    type: "sleep",
    startTime: baseTime + 1600,
    endTime: baseTime + 1800,
  },
  {
    philoNum: 2,
    type: "think",
    startTime: baseTime + 1800,
    endTime: baseTime + 2000,
  },
  {
    philoNum: 2,
    type: "eat",
    startTime: baseTime + 2000,
    endTime: baseTime + 2200,
  },
  {
    philoNum: 3,
    type: "eat",
    startTime: baseTime + 200,
    endTime: baseTime + 400,
  },
  {
    philoNum: 3,
    type: "sleep",
    startTime: baseTime + 400,
    endTime: baseTime + 600,
  },
  {
    philoNum: 3,
    type: "think",
    startTime: baseTime + 600,
    endTime: baseTime + 800,
  },
  {
    philoNum: 3,
    type: "eat",
    startTime: baseTime + 800,
    endTime: baseTime + 1000,
  },
  {
    philoNum: 3,
    type: "sleep",
    startTime: baseTime + 1000,
    endTime: baseTime + 1200,
  },
  {
    philoNum: 3,
    type: "think",
    startTime: baseTime + 1200,
    endTime: baseTime + 1200,
  },
  {
    philoNum: 3,
    type: "eat",
    startTime: baseTime + 1200,
    endTime: baseTime + 1400,
  },
  {
    philoNum: 3,
    type: "sleep",
    startTime: baseTime + 1400,
    endTime: baseTime + 1600,
  },
  {
    philoNum: 3,
    type: "think",
    startTime: baseTime + 1600,
    endTime: baseTime + 1800,
  },
  {
    philoNum: 3,
    type: "eat",
    startTime: baseTime + 1800,
    endTime: baseTime + 2000,
  },
  {
    philoNum: 3,
    type: "sleep",
    startTime: baseTime + 2000,
    endTime: baseTime + 2200,
  },
  {
    philoNum: 4,
    type: "eat",
    startTime: baseTime + 200,
    endTime: baseTime + 400,
  },
  {
    philoNum: 4,
    type: "sleep",
    startTime: baseTime + 400,
    endTime: baseTime + 600,
  },
  {
    philoNum: 4,
    type: "think",
    startTime: baseTime + 600,
    endTime: baseTime + 600,
  },
  {
    philoNum: 4,
    type: "eat",
    startTime: baseTime + 600,
    endTime: baseTime + 800,
  },
  {
    philoNum: 4,
    type: "sleep",
    startTime: baseTime + 800,
    endTime: baseTime + 1000,
  },
  {
    philoNum: 4,
    type: "think",
    startTime: baseTime + 1000,
    endTime: baseTime + 1200,
  },
  {
    philoNum: 4,
    type: "eat",
    startTime: baseTime + 1200,
    endTime: baseTime + 1400,
  },
  {
    philoNum: 4,
    type: "sleep",
    startTime: baseTime + 1400,
    endTime: baseTime + 1600,
  },
  {
    philoNum: 4,
    type: "think",
    startTime: baseTime + 1600,
    endTime: baseTime + 1600,
  },
  {
    philoNum: 4,
    type: "eat",
    startTime: baseTime + 1600,
    endTime: baseTime + 1800,
  },
  {
    philoNum: 4,
    type: "sleep",
    startTime: baseTime + 1800,
    endTime: baseTime + 2000,
  },
  {
    philoNum: 4,
    type: "think",
    startTime: baseTime + 2000,
    endTime: baseTime + 2000,
  },
  {
    philoNum: 4,
    type: "eat",
    startTime: baseTime + 2000,
    endTime: baseTime + 2200,
  },
  {
    philoNum: 5,
    type: "eat",
    startTime: baseTime + 400,
    endTime: baseTime + 600,
  },
  {
    philoNum: 5,
    type: "sleep",
    startTime: baseTime + 600,
    endTime: baseTime + 800,
  },
  {
    philoNum: 5,
    type: "think",
    startTime: baseTime + 800,
    endTime: baseTime + 1000,
  },
  {
    philoNum: 5,
    type: "eat",
    startTime: baseTime + 1000,
    endTime: baseTime + 1200,
  },
  {
    philoNum: 5,
    type: "sleep",
    startTime: baseTime + 1200,
    endTime: baseTime + 1400,
  },
  {
    philoNum: 5,
    type: "think",
    startTime: baseTime + 1400,
    endTime: baseTime + 1600,
  },
  {
    philoNum: 5,
    type: "eat",
    startTime: baseTime + 1600,
    endTime: baseTime + 1800,
  },
  {
    philoNum: 5,
    type: "sleep",
    startTime: baseTime + 1800,
    endTime: baseTime + 2000,
  },
  {
    philoNum: 5,
    type: "think",
    startTime: baseTime + 2000,
    endTime: baseTime + 2200,
  },
];

export const standardCaseTimeRange: TimeRange = {
  min: baseTime,
  max: baseTime + 2200,
};

const philoCountForLargeDataset = 200;
export const manyPhilosopherActions: PhiloAction[] = Array.from(
  { length: philoCountForLargeDataset },
  (_, index) => {
    const start = baseTime + index * 10;
    const actionType =
      index % 3 === 0 ? "eat" : index % 3 === 1 ? "think" : "sleep";

    return {
      philoNum: index,
      type: actionType,
      startTime: start,
      endTime: start + 5,
    };
  }
);

export const manyPhilosopherTimeRange: TimeRange = {
  min: baseTime,
  max: baseTime + (philoCountForLargeDataset - 1) * 10 + 5,
};

export const zeroDurationActions: PhiloAction[] = [
  {
    philoNum: 0,
    type: "eat",
    startTime: baseTime,
    endTime: baseTime,
  },
  {
    philoNum: 1,
    type: "eat",
    startTime: baseTime + 50,
    endTime: baseTime + 50,
  },
  {
    philoNum: 1,
    type: "sleep",
    startTime: baseTime + 50,
    endTime: baseTime + 120,
  },
  {
    philoNum: 2,
    type: "eat",
    startTime: baseTime + 120,
    endTime: baseTime + 120,
  },
  {
    philoNum: 2,
    type: "sleep",
    startTime: baseTime + 120,
    endTime: baseTime + 120,
  },
  {
    philoNum: 2,
    type: "think",
    startTime: baseTime + 120,
    endTime: baseTime + 200,
  },
];

export const zeroDurationTimeRange: TimeRange = {
  min: baseTime,
  max: baseTime + 200,
};
