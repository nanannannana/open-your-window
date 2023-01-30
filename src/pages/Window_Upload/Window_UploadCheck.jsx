import axios from 'axios';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import './Window_UploadCheck.css';

const FullImg = styled.div`
  height: 100vh;
  width: 100vw;
  background-image: url(${(props) => props.background_img});
  background-repeat: no-repeat;
  background-size: 100% 100%;
`;
const NickName = styled.span`
  padding-right: 10px;
  font-size: 1.5em;
  font-weight: bold;
`;
const Comment = styled.p`
  padding-top: 10px;
`;

export default function Window_UploadCheck({ setView, num }) {
  const [dataArr, setDataArr] = useState([]);
  useEffect(() => {
    async function fetchData() {
      try {
        await axios
          .get('http://localhost:4000/window/uploadCheck', {
            params: { num: num },
          })
          .then((res) => setDataArr(res.data.result));
        setView({ change: false, num: num });
      } catch (err) {
        console.log(err);
      }
    }
    fetchData();
  }, []);
  // console.log('데이터', dataArr);
  const { country, city, window_date, img, comment, user_id, like_num } =
    dataArr;
  return (
    <FullImg background_img={img}>
      <div className="infoBox">
        <NickName>nickName</NickName>
        <span>
          {country}, {city}
        </span>
        <Comment>{comment}</Comment>
      </div>
    </FullImg>
  );
}
