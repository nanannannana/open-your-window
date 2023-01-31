import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Window_Carousel from './Window_Carousel';
import Window_Tag from './Window_Tag';
import queryString from 'query-string';
import { useSelector, useDispatch } from 'react-redux';
import Window_Main from './Window_Main';
import { Switch, Space } from 'antd';
import { useNavigate } from 'react-router-dom';
import GlobalStyle from '../../components/GlobalStyle';

export default function Window_TagMain() {
  // console.log(queryString.parse(location.search).country);
  const [imgArr, setImgArr] = useState([]);
  const [windowInfo, setWindowInfo] = useState([]);
  const change = useSelector((state) => state.window.change);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  //   console.log(change);
  useEffect(() => {
    async function fetchData() {
      try {
        await axios
          .get('http://localhost:4000/window/imgfind', {
            params: { country: queryString.parse(location.search).country },
          })
          .then((res) => {
            setImgArr(res.data.result);
            setWindowInfo(res.data.info);
          });
      } catch (err) {
        console.log(err);
      }
    }
    fetchData();
  }, []);

  const view =
    change === 1 ? (
      <Window_Tag imgArr={imgArr} />
    ) : (
      <Window_Carousel imgArr={imgArr} windowInfo={windowInfo} />
    );
  // console.log('이미지 배열', imgArr);
  return (
    <div>
      <GlobalStyle />
      <div className="switchCss">
        <Space direction="vertical">
          <Switch
            checkedChildren="Map"
            unCheckedChildren="Tag"
            color="red"
            onClick={() => {
              navigate('/window');
              dispatch(reverse());
            }}
          />
        </Space>
      </div>

      {view}
    </div>
  );
}
