import React from 'react';
import { Col } from 'antd';
import { useDispatch } from 'react-redux';
import { go, numchange } from '../../store/modules/window';
import styled from 'styled-components';

const TagImg = styled.img`
  object-fit: cover;
  width: 100%;
  height: 350px;
  &:hover {
    opacity: 0.8;
  }
  @media (max-width: 1440px) {
    height: 140px;
  }
`;

export default function PaginationImg({ data, arr, i }) {
  const dispatch = useDispatch();

  return (
    <Col key={data.num} span={arr[i]}>
      <TagImg
        src={data.img}
        onClick={() => {
          dispatch(go());
          dispatch(numchange(i));
        }}
      />
    </Col>
  );
}
