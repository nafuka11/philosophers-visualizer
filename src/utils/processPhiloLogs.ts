import { PhiloLogProcessingResult } from "../types/PhiloLogProcessingResult";
import { ActionType, PhiloAction } from "../types/PhiloAction";

const generalRegex = /^(\d+)\s+(\d+)\s+(is (eat|sleep|think)ing|died)$/;
const forkRegex = /^\d+\s+\d+\s+has taken a fork$/;

type PrevActionState = {
  [philoNum: number]: { type: ActionType | undefined; ms: number };
};

export const processPhiloLogs = (logs: string[]): PhiloLogProcessingResult => {
  const prevActions: PrevActionState = {};
  const rangeMs = { min: Infinity, max: 0 };

  const philoActions: PhiloAction[] = [];
  const errorMessages: string[] = [];

  logs.forEach((log) => {
    const match = log.match(generalRegex);
    if (!match) {
      const forkMatch = log.match(forkRegex);
      if (log && !forkMatch) {
        errorMessages.push(`Invalid log format: "${log}"`);
      }
      return;
    }

    const ms = parseInt(match[1], 10);
    const actionType = match[4] as ActionType | undefined;
    const philoNum: keyof PrevActionState = parseInt(match[2], 10);

    rangeMs.min = Math.min(rangeMs.min, ms);
    rangeMs.max = Math.max(rangeMs.max, ms);

    if (!prevActions[philoNum]) {
      updatePrevAction(prevActions, philoNum, ms, actionType);
      return;
    }
    if (!addActionToPhiloActions(prevActions, philoNum, ms, philoActions)) {
      errorMessages.push(
        `Philosopher ${philoNum} is already dead (time: ${prevActions[philoNum].ms})`
      );
    }
    updatePrevAction(prevActions, philoNum, ms, actionType);
  });

  Object.entries(prevActions).forEach(([philoNum, action]) => {
    if (action.ms < rangeMs.max && action.type) {
      philoActions.push({
        philoNum: parseInt(philoNum, 10),
        type: action.type,
        startTime: action.ms,
        endTime: rangeMs.max,
      });
    }
  });
  return {
    actions: philoActions.sort((a, b) => a.philoNum - b.philoNum),
    range: rangeMs,
    errors: errorMessages,
  };
};

const updatePrevAction = (
  prevActions: PrevActionState,
  philoNum: number,
  ms: number,
  actionType: ActionType | undefined
) => {
  prevActions[philoNum] = {
    type: actionType,
    ms: ms,
  };
};

const addActionToPhiloActions = (
  prevActions: PrevActionState,
  philoNum: number,
  ms: number,
  philoActions: PhiloAction[]
): boolean => {
  if (prevActions[philoNum].type) {
    philoActions.push({
      philoNum,
      type: prevActions[philoNum].type as ActionType,
      startTime: prevActions[philoNum].ms,
      endTime: ms,
    });
    return true;
  }
  return false;
};
