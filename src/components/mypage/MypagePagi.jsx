import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { pageChange } from '../../store/modules/window';
import { Pagination } from 'antd';
import styled from 'styled-components';

const PaginationCss = styled.div`
  padding: 40px 0 0 0;
`;

export default function MypagePagi({ arr }) {
  const dispatch = useDispatch();
  const page = useSelector((state) => state.window.page);

  return (
    <PaginationCss>
      <Pagination
        current={page + 1}
        defaultPageSize={5}
        total={arr.length}
        hideOnSinglePage={true}
        onChange={(e) => dispatch(pageChange(e))}
      />
    </PaginationCss>
  );
}
