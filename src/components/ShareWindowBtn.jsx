import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Space } from 'antd';
import styled from 'styled-components';

const ButtonParent = styled.div`
  padding: 0 20px 20px 0;
  text-align: right;
`;
const MyButton = styled(Button)`
  border-color: #737373 !important;
  color: #737373 !important;
  &:hover {
    background-color: #cbcbcb !important;
    border-color: #ffffff !important;
    color: #ffffff !important;
  }
`;

export default function ShareWindowBtn() {
  const navigate = useNavigate();
  return (
    <>
      <ButtonParent>
        <Space className="site-button-ghost-wrapper" wrap>
          <MyButton ghost onClick={() => navigate('/window/upload')}>
            share your WINDOW
          </MyButton>
        </Space>
      </ButtonParent>
    </>
  );
}
