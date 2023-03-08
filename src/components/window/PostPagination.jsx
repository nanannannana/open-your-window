import React from 'react';
import { Pagination } from 'antd';
import styled from 'styled-components';
import { pageChange } from '../../store/modules/window';
import { useDispatch, useSelector } from 'react-redux';

const PaginationCss = styled.div`
  margin: 0 auto;
  /* padding: 0 0 15px 0; */
  padding-bottom: 1.5%;
  text-align: center;
`;

export default function PostPagination({ totalNum }) {
  const dispatch = useDispatch();
  const page = useSelector((state) => state.window.page);

  return (
    <PaginationCss>
      <Pagination
        current={page + 1}
        defaultPageSize={8}
        total={totalNum}
        hideOnSinglePage={true}
        onChange={(e) => dispatch(pageChange(e))}
      />
    </PaginationCss>
  );
}
