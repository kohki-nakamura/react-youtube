import React from "react";
import Input from ".";
import { actions } from "@storybook/addon-actions";

export default { title: "atoms/Input" };

const props = {
  placeholder: "入力してください",
  ...actions("onChange"),
};

export const input = () => <Input {...props} />;

export const defaultValue = () => <Input {...props} defaultValue="ねこ" />;
defaultValue.story = {
  name: "デフォルト値",
};