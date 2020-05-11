import React from "react";
import VideosListTemplate from ".";
import { action } from "@storybook/addon-actions";
import styled, { css } from "styled-components";

export default { title: "templates/VideosListTemplate" };

const commonStyle = css`
  background: #f0f0f0;
  text-align: center;
`;

const Header = styled.div`
  width: 100%;
  height: 33px;
  ${commonStyle};
`;

const SearchForm = styled.div`
  width: 100%;
  height: 47px;
  ${commonStyle};
`;

const VideosList = styled.div`
  width: 100%;
  height: 1000px;
  ${commonStyle};
`;

export const Default = () => (
  <VideosListTemplate
    headerContents={<Header>header</Header>}
    searchFormContents={<SearchForm>searchForm</SearchForm>}
    videosListContents={<VideosList>videosList</VideosList>}
    onScrollEnd={action("onScrollEnd")}
  />
);