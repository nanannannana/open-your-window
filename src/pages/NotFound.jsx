import { Row } from 'antd';
import React from 'react';
import styled from 'styled-components';

const ErrorAlert = styled(Row)`
  height: 100vh;
  font-size: 100px;
  font-weight: bolder;
  color: white;
  background-color: palevioletred;
`;

export default function NotFound() {
  return (
    <ErrorAlert align="middle" justify="center">
      NotFound
    </ErrorAlert>
  );
}
