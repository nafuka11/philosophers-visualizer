import type { Meta, StoryObj } from "@storybook/react-vite";
import { Timeline } from "../components/Timeline";
import { processPhiloLogs } from "../utils/processPhiloLogs";
import manyPhilosophersLog from "./__fixtures__/manyPhilosophers.log?raw";
import standardCaseLog from "./__fixtures__/standardCase.log?raw";
import zeroDurationLog from "./__fixtures__/zeroDuration.log?raw";

const meta: Meta<typeof Timeline> = {
  title: "Components/Timeline",
  component: Timeline,
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;

const createArgsFromLog = (rawLog: string) => {
  const logs = rawLog
    .split("\n")
    .map((line) => line.trim())
    .filter(Boolean);
  const { actions, range, errors } = processPhiloLogs(logs);

  if (errors.length > 0) {
    // Surface issues with the fixture data without breaking the story render.
    console.warn("Timeline story log parsing errors:", errors);
  }

  return {
    actions,
    timeRange: range,
  };
};

const standardCase = createArgsFromLog(standardCaseLog);
const manyPhilosophers = createArgsFromLog(manyPhilosophersLog);
const zeroDuration = createArgsFromLog(zeroDurationLog);

type Story = StoryObj<typeof Timeline>;

export const StandardCase: Story = {
  args: {
    actions: standardCase.actions,
    timeRange: standardCase.timeRange,
  },
};

export const TwoHundredPhilosophers: Story = {
  args: {
    actions: manyPhilosophers.actions,
    timeRange: manyPhilosophers.timeRange,
  },
};

export const ZeroDurationAction: Story = {
  args: {
    actions: zeroDuration.actions,
    timeRange: zeroDuration.timeRange,
  },
};
