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

export default function Window_Posts() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // db에서 가져온 데이터 state
  const [country, setCountry] = useState([]);
  const [basicTag, setBasicTag] = useState([]);

  // searchTag 관련 state
  const searchTag = useSelector((state) => state.window.searchTag);
  console.log('searchTag', searchTag);

  // 게시글 & 캐러셀 컴포넌트 조건부 렌더링 관련 state
  const change = useSelector((state) => state.window.change);

  // 페이지네이션 관련 state
  const page = useSelector((state) => state.window.page);
  const pagiCountry = country.slice(page * 8, page * 8 + 8);
  const pagiBasicTag = basicTag.slice(page * 8, page * 8 + 8);
  const pagiSearchBar = searchTag.slice(page * 8, page * 8 + 8);

  useEffect(() => {
    async function fetchData() {
      if (queryString.parse(location.search).country) {
        return await axios
          .get('http://localhost:4000/window/imgfind', {
            params: {
              country: queryString.parse(location.search).country,
            },
          })
          .then((res) => setCountry(res.data.countryTag))
          .catch((err) => console.log(err));
      } else {
        return await axios
          .get('http://localhost:4000/window/basicTag')
          .then((res) => setBasicTag(res.data.basicTag))
          .catch((err) => console.log(err));
      }
    }
    fetchData();
  }, []);

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
        <Window_Tag
          country={pagiCountry}
          basicTag={pagiBasicTag}
          searchTag={pagiSearchBar}
        />
      ) : (
        <Window_Carousel
          country={pagiCountry}
          basicTag={pagiBasicTag}
          searchTag={pagiSearchBar}
        />
      )}

      {/* footer */}
      {change === 1 ? (
        country.length !== 0 ? (
          <PostPagination arr={country} />
        ) : searchTag.length !== 0 ? (
          <PostPagination arr={searchTag} />
        ) : (
          <PostPagination arr={basicTag} />
        )
      ) : (
        true
      )}
    </div>
  );
}
