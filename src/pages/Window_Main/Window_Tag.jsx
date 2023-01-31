import React, { useEffect, useState } from 'react';
import queryString from 'query-string';
import { Col, Row } from 'antd';
import WindowBtn from '../../components/window/WindowBtn';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function Window_Tag() {
  // console.log(queryString.parse(location.search).country);
  const [imgArr, setImgArr] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    async function fetchData() {
      try {
        await axios
          .get('http://localhost:4000/window/imgfind', {
            params: { country: queryString.parse(location.search).country },
          })
          .then((res) => setImgArr(res.data.result));
      } catch (err) {
        console.log(err);
      }
    }
    fetchData();
  }, []);
  // console.log('이미지 배열', imgArr);
  return (
    <div className="TagFullBox">
      <Row gutter={[15, 15]}>
        {imgArr.map((v) => (
          <Col key={v[1]} span={v[0]}>
            <img src={v[1]} className="TagImg" />
          </Col>
        ))}
      </Row>
      <div className="TagPageWindowBtn">
        <WindowBtn
          clickEvent={() => navigate('/window/upload')}
          borderColor="#C2CCA8"
          color="#C2CCA8"
          hoverBackgroundColor="#C2CCA8"
          hoverBorderColor="#ffffff"
          hoverColor="#ffffff"
          text="share your WINDOW"
        />
      </div>
    </div>
  );
}
