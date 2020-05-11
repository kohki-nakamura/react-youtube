import React from "react";
import styled from "styled-components";
import { actions } from "@storybook/addon-actions";
import Button, { sizes } from ".";

export default { title: "atoms/Button" };

const props = actions("onClick");

export const size = () =>
  sizes.map((s) => (
    <div key={s} style={{ margin: "20px" }}>
      <Button {...props} size={s}>
        ボタン
      </Button>
    </div>
  ));

export const fullWidth = () =>
  sizes.map((s) => (
    <div key={s} style={{ margin: "20px" }}>
      <Button {...props} size={s} fullWidth>
        ボタン
      </Button>
    </div>
  ));
