import React, { useEffect, useState } from 'react';
import queryString from 'query-string';
import { Col, Row } from 'antd';
import WindowBtn from '../../components/window/WindowBtn';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { numchange, reverse } from '../../store/modules/window';

export default function Window_Tag({ imgArr }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  return (
    <div className="TagFullBox">
      <Row gutter={[15, 15]}>
        {imgArr.map((v, i) => (
          <Col key={v[1]} span={v[0]}>
            <img
              src={v[1]}
              className="TagImg"
              onClick={() => {
                dispatch(reverse());
                dispatch(numchange(i));
              }}
            />
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
