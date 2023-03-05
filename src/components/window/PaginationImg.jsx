import React from 'react';
import { Col } from 'antd';
import { useDispatch } from 'react-redux';
import { go, numchange } from '../../store/modules/window';
import styled from 'styled-components';

const TagImg = styled.img`
  object-fit: cover;
  width: 100%;
  height: 24vh;
  &:hover {
    opacity: 0.8;
  }
`;
const DefaultBox = styled.div`
  width: 100%;
  height: 24vh;
  background-color: lavender;
`;

export default function PaginationImg({ data, i }) {
  const dispatch = useDispatch();
  const arr = [10, 14, 9, 7, 8, 5, 12, 7];

  return (
    <Col span={arr[i]}>
      {data !== '' ? (
        <TagImg
          src={data.img}
          onClick={() => {
            dispatch(go());
            dispatch(numchange(i));
          }}
        />
      ) : (
        <DefaultBox />
      )}
    </Col>
  );
}
