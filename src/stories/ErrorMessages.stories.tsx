import type { Meta, StoryObj } from "@storybook/react-vite";
import { ErrorMessages } from "../components/ErrorMessages";

const meta: Meta<typeof ErrorMessages> = {
  title: "Components/ErrorMessages",
  component: ErrorMessages,
};

export default meta;

type Story = StoryObj<typeof ErrorMessages>;

export const MultipleErrors: Story = {
  args: {
    errors: ["Line 1: invalid timestamp", 'Line 3: unknown state "waiting"'],
  },
};
