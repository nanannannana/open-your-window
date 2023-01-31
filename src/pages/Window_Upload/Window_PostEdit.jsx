import axios from 'axios';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import './Window_Upload.css';
import { BsFillPencilFill, BsFillTrashFill, BsX } from 'react-icons/bs';
import { useLocation, useNavigate } from 'react-router-dom';

const FullImg = styled.div`
  height: 100vh;
  width: 100vw;
  background-image: url(${(props) => props.background_img});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`;
const NickName = styled.span`
  padding-right: 10px;
  font-size: 1.5em;
  font-weight: bold;
`;
const Comment = styled.p`
  padding-top: 10px;
`;
const TrashIcon = styled.div`
  margin-left: 8px;
  display: inline-block;
`;
const XIcon = styled.div`
  margin-top: -5px;
`;

export default function Window_PostEdit() {
  const { state } = useLocation();
  const [dataArr, setDataArr] = useState([]);
  useEffect(() => {
    async function fetchData() {
      try {
        await axios
          .get('http://localhost:4000/window/postedit', {
            params: { num: state },
          })
          .then((res) => setDataArr(res.data.result));
        console.log('데이터', dataArr);
      } catch (err) {
        console.log(err);
      }
    }
    fetchData();
  }, []);
  const { country, city, img, comment } = dataArr;
  const navigate = useNavigate();

  return (
    <FullImg background_img={img}>
      <div className="iconBox">
        <XIcon onClick={() => navigate('/window')}>
          <BsX className="icon" color="#fff" size="30" />
        </XIcon>

        <div>
          <BsFillPencilFill className="icon" color="#fff" size="20" />
          <TrashIcon>
            <BsFillTrashFill className="icon" color="#fff" size="20" />
          </TrashIcon>
        </div>
      </div>

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
