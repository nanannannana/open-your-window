import React from 'react';
import { Button, Space } from 'antd';
import styled from 'styled-components';
import GlobalStyle from '../common/GlobalStyle';

const MyButton = styled(Button)`
  border-color: ${(props) => props.border_color} !important;
  color: ${(props) => props.color} !important;
  font-family: 'SDSwaggerTTF';
  &:hover {
    background-color: ${(props) => props.hover_background_color} !important;
    border-color: ${(props) => props.hover_border_color} !important;
    color: ${(props) => props.hover_color} !important;
  }
`;

export default function WindowBtn({
  clickEvent,
  borderColor,
  color,
  hoverBackgroundColor,
  hoverBorderColor,
  hoverColor,
  text,
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
          htmlType="submit"
        >
          {text}
        </MyButton>
      </Space>
    </>
  );
}
