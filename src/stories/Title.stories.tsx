import type { Meta, StoryObj } from "@storybook/react-vite";
import { Title } from "../components/Title";

const meta: Meta<typeof Title> = {
  title: "Components/Title",
  component: Title,
};

export default meta;

type Story = StoryObj<typeof Title>;

export const Default: Story = {};
