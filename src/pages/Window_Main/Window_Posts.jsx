import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import queryString from 'query-string';
import axios from 'axios';
import Window_Tag from './Window_Tag';
import Window_Carousel from './Window_Carousel';
import GlobalStyle from '../../components/common/GlobalStyle';
import { Switch, Space } from 'antd';
import { pagereset, searchreset, unswitch } from '../../store/modules/window';
import PostPagination from '../../components/window/PostPagination';
import BarLoader from 'react-spinners/BarLoader';
import styled from 'styled-components';

const LoaderCss = styled.div`
  height: 100vh;
  width: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default function Window_Posts() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  // searchBar 관련 state
  const searchNum = useSelector((state) => state.window.searchTotalNum);
  const [searchTotalNum, setSearchTotalNum] = useState(0);

  // 게시글 & 캐러셀 컴포넌트 조건부 렌더링 관련 state
  const change = useSelector((state) => state.window.change);

  // 페이지네이션 관련 state
  const page = useSelector((state) => state.window.page);
  const [posts, setPosts] = useState([]);
  const [totalNum, setTotalNum] = useState(0);

  useEffect(() => {
    try {
      setLoading(true);
      async function fetchData() {
        return await axios
          .get(`http://${process.env.REACT_APP_HOST}/window/postsShow`, {
            params: {
              country: queryString.parse(location.search).country,
              page: page,
            },
          })
          .then((res) => {
            setPosts(res.data.posts);
            setTotalNum(res.data.totalNum);
          })
          .catch((err) => console.log(err));
      }
      fetchData();
      if (queryString.parse(location.search).search)
        setSearchTotalNum(searchNum);
    } catch (err) {
      console.log(err);
    }
    setLoading(false);
  }, [page, queryString.parse(location.search).search]);

  if (loading) {
    return (
      <LoaderCss>
        <BarLoader color="#C2CCA8" loading speedMultiplier={1} />
      </LoaderCss>
    );
  } else {
    return (
      <div>
        <GlobalStyle />
        {/* header */}
        {change === 1 ? (
          <div className="switchCss">
            <Space direction="vertical">
              <Switch
                checkedChildren="Map"
                unCheckedChildren="Tag"
                color="red"
                onClick={() => {
                  navigate('/window');
                  dispatch(unswitch());
                  dispatch(pagereset());
                  dispatch(searchreset());
                }}
              />
            </Space>
          </div>
        ) : (
          true
        )}

        {/* main */}
        {change === 1 ? (
          <Window_Tag posts={posts} />
        ) : (
          <Window_Carousel posts={posts} />
        )}

        {/* footer */}
        {change === 1 && (
          <PostPagination totalNum={searchTotalNum || totalNum} />
        )}
      </div>
    );
  }
}
