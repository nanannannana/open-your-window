import React from 'react';
import { Pagination } from 'antd';
import styled from 'styled-components';
import { pageChange } from '../../store/modules/window';
import { useDispatch, useSelector } from 'react-redux';

const PaginationCss = styled.div`
  position: fixed;
  margin: 0 auto;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 0 0 15px 0;
  text-align: center;
`;

export default function PostPagination({ arr }) {
  const dispatch = useDispatch();
  const page = useSelector((state) => state.window.page);

  return (
    <PaginationCss>
      <Pagination
        current={page + 1}
        defaultPageSize={8}
        total={arr.length}
        hideOnSinglePage={true}
        onChange={(e) => dispatch(pageChange(e))}
      />
    </PaginationCss>
  );
}
