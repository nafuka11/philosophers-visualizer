import type { Meta, StoryObj } from "@storybook/react-vite";
import { Header } from "../components/Header";

const meta: Meta<typeof Header> = {
  title: "Components/Title",
  component: Header,
};

export default meta;

type Story = StoryObj<typeof Header>;

export const Default: Story = {};
