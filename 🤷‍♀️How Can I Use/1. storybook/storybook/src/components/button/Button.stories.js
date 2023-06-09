import { Button } from "./Button.jsx";

export default {
  title: "components/Button",
  component: Button,
  tags: ["autodocs"],
  argTypes: {
    radius: { control: "radio", options: ["primary", "oval", "square"] },
    color: {
      control: "select",
      options: ["primary", "secondary", "simple", "gray", "dark"],
    },
    size: { control: "radio", options: ["small", "medium", "large"] },
  },
  parameters: {
    backgrounds: {
      values: [
        { name: "paleWhite", value: "#F5F5F5" },
        { name: "lightBeige", value: "#F9F5E7" },
        { name: "beige", value: "#EDDBC7" },
      ],
    },
  },
};

export const Primary = {
  args: {
    label: "PRIMARY",
    size: "medium",
    color: "primary",
  },
};
export const PrimaryWithLightBorder = {
  args: {
    ...Primary.args,
    isBorder: true,
    borderWeight: 2,
  },
};
export const PrimaryWithHeavyBorder = {
  args: {
    ...Primary.args,
    isBorder: true,
    borderWeight: 4,
  },
};

export const Small = {
  args: {
    size: "small",
    label: "SMALL",
  },
};
