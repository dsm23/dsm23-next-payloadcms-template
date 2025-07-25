import { fn } from "storybook/test";
import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Button } from ".";

const meta = {
  title: "Components/Shadcn/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  args: {
    variant: "default",
    children: "Button",
    size: "lg",
    onClick: fn(),
  },
  argTypes: {
    variant: {
      options: [
        "default",
        "secondary",
        "destructive",
        "outline",
        "ghost",
        "link",
      ],
      control: { type: "select" },
    },
    size: {
      options: ["default", "sm", "lg", "icon"],
      control: { type: "select" },
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Button>;

type Story = StoryObj<typeof Button>;

export const Default: Story = {
  render: (args) => <Button {...args} />,
};

export const Secondary: Story = {
  args: {
    variant: "secondary",
  },
  render: (args) => <Button {...args} />,
};

export const Destructive: Story = {
  args: {
    variant: "destructive",
  },
  render: (args) => <Button {...args} />,
};

export const Outline: Story = {
  args: {
    variant: "outline",
  },
  render: (args) => <Button {...args} />,
};

export const Ghost: Story = {
  args: {
    variant: "ghost",
  },
  render: (args) => <Button {...args} />,
};

export const Link: Story = {
  args: {
    variant: "link",
  },
  render: (args) => <Button {...args} />,
};

export default meta;
