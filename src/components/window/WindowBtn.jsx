import React from 'react';
import { Button, Space } from 'antd';
import styled from 'styled-components';
import GlobalStyle from '../common/GlobalStyle';

const MyButton = styled(Button)`
  border-color: ${(props) => props.border_color} !important;
  color: ${(props) => props.color} !important;
  background-color: ${(props) => props.background_color} !important;
  font-family: 'YUniverse-B';
  font-size: ${(props) => props.font_size} !important;
  height: ${(props) => props.height} !important;
  padding: ${(props) => props.padding} !important;
  border: ${(props) => props.border} !important;
  text-shadow: ${(props) => props.text_shadow} !important;
  &:hover {
    background-color: ${(props) => props.hover_background_color} !important;
    border-color: ${(props) => props.hover_border_color} !important;
    color: ${(props) => props.hover_color} !important;
  }
  @media (max-width: 1439px) {
    font-size: 1em !important;
  }
`;

export default function WindowBtn({
  clickEvent,
  borderColor,
  color,
  hoverBackgroundColor,
  hoverBorderColor,
  hoverColor,
  fontSize,
  text,
  height,
  padding,
  border,
  textShadow,
  backgroundColor,
}) {
  return (
    <>
      <GlobalStyle />
      <Space className="site-button-ghost-wrapper" wrap>
        <MyButton
          ghost
          onClick={clickEvent}
          border_color={borderColor}
          color={color}
          hover_background_color={hoverBackgroundColor}
          hover_border_color={hoverBorderColor}
          hover_color={hoverColor}
          font_size={fontSize}
          height={height}
          padding={padding}
          border={border}
          text_shadow={textShadow}
          background_color={backgroundColor}
          htmlType="submit"
        >
          {text}
        </MyButton>
      </Space>
    </>
  );
}
