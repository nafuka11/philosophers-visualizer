import { useEffect, useState } from "react";
import Chart from "react-google-charts";
import { PhiloAction } from "../types/PhiloAction";
import { TimeRange } from "../types/PhiloLogProcessingResult";
import "./Timeline.css";

const header = [
  { type: "string", id: "Index" },
  { type: "string", id: "Action" },
  { type: "string", role: "style" },
  { type: "date", id: "Start" },
  { type: "date", id: "End" },
  { type: "number", id: "Scatter" },
];

const style = "stroke-width: 0.5; stroke-color: #000000; stroke-opacity: 0.55";

const convertData = (actions: PhiloAction[]) => {
  const data = [
    header,
    ...actions.map((action) => [
      action.philoNum.toString(),
      action.type,
      style,
      new Date(action.startTime),
      new Date(action.endTime),
      action.philoNum * -1,
    ]),
  ];
  return data;
};

const countPhilos = (actions: PhiloAction[]): number => {
  const uniquePhilos = actions.reduce((acc, curr): number[] => {
    if (!acc.includes(curr.philoNum)) {
      return [...acc, curr.philoNum];
    }
    return acc;
  }, [] as number[]);
  return uniquePhilos.length;
};

type Props = {
  actions: PhiloAction[];
  timeRange: TimeRange;
};

export const Timeline = ({ actions, timeRange }: Props) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [data, setData] = useState<any[]>([]);
  const [philoNum, setPhiloNum] = useState(0);

  useEffect(() => {
    setData(convertData(actions));
    setPhiloNum(countPhilos(actions));
  }, [actions]);

  return (
    <div id="graph">
      <Chart
        key={`${timeRange.min}-${timeRange.max}-${philoNum}`}
        chartType="Timeline"
        width={Math.max((timeRange.max - timeRange.min) * 0.6, 180)}
        height={philoNum * 40 + 240}
        data={data}
        options={{
          colors: ["#fbb4ae", "#b3cde3", "#ccebc5"],
          avoidOverlappingGridLines: false,
        }}
        chartWrapperParams={{
          view: {
            columns: [0, 1, 2, 3, 4],
          },
        }}
      />
    </div>
  );
};
