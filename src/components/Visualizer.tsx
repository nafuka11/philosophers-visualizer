import { ChangeEvent, useState } from "react";
import { PhiloAction } from "../types/PhiloAction";
import { TimeRange } from "../types/PhiloLogProcessingResult";
import { processPhiloLogs } from "../utils/processPhiloLogs";
import { ErrorMessages } from "./ErrorMessages";
import { Timeline } from "./Timeline";
import "./Visualizer.css";

export const Visualizer = () => {
  const [philoLog, setPhiloLog] = useState("");
  const [philoActions, setPhiloActions] = useState<PhiloAction[]>([]);
  const [timeRange, setTimeRange] = useState<TimeRange>();
  const [errorMessages, setErrorMessages] = useState<string[]>([]);

  const setPhiloLogFromTextArea = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setPhiloLog(e.target.value);
  };

  const showTimeline = () => {
    const { actions, range, errors } = processPhiloLogs(philoLog.split("\n"));
    setPhiloActions(actions);
    setTimeRange(range);
    setErrorMessages(errors);
  };

  return (
    <>
      <textarea
        name="philo-log"
        value={philoLog}
        onChange={setPhiloLogFromTextArea}
        placeholder="timestamp_in_ms X status"
      ></textarea>
      <button className="visualize-button" onClick={showTimeline}>
        generate
      </button>
      {errorMessages.length > 0 && <ErrorMessages errors={errorMessages} />}
      {philoActions.length > 0 && timeRange && (
        <Timeline actions={philoActions} timeRange={timeRange} />
      )}
    </>
  );
};
