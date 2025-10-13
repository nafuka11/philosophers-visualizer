import type { Meta, StoryObj } from "@storybook/react-vite";
import { Timeline } from "../components/Timeline";
import {
  manyPhilosopherActions,
  manyPhilosopherTimeRange,
  standardCaseActions,
  standardCaseTimeRange,
  zeroDurationActions,
  zeroDurationTimeRange,
} from "./__fixtures__/timelineData";

const meta: Meta<typeof Timeline> = {
  title: "Components/Timeline",
  component: Timeline,
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;

type Story = StoryObj<typeof Timeline>;

export const StandardCase: Story = {
  args: {
    actions: standardCaseActions,
    timeRange: standardCaseTimeRange,
  },
};

export const TwoHundredPhilosophers: Story = {
  args: {
    actions: manyPhilosopherActions,
    timeRange: manyPhilosopherTimeRange,
  },
};

export const ZeroDurationAction: Story = {
  args: {
    actions: zeroDurationActions,
    timeRange: zeroDurationTimeRange,
  },
};
