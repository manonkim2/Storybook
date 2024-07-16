import React from "react";
import "@manon/react-components-select/style.css";
import "@manon/react-components-layout/style.css";
import { Select } from "@manon/react-components-select";

export default {
  title: "React Components/Select",
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export const SelectStory = {
  render: () => (
    <Select>
      <option value="1">1</option>
      <option value="2">2</option>
    </Select>
  ),
};
