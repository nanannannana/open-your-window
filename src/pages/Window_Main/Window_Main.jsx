import React, { useState } from 'react';
import Window_Map from './Window_Map';
import Window_Tag from './Window_Tag';
import { Switch, Space } from 'antd';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { back, reverse } from '../../store/modules/window';

export default function Window_Main() {
  const change = useSelector((state) => state.window.change);
  console.log(change);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const SwitchClick = (e) => {
    // e = true/false;
    if (e) {
      navigate('/window');
      dispatch(reverse());
    } else {
      navigate('/window/tag');
      dispatch(back());
    }
    // map 페이지에서 버튼 클릭(false) -> navigate(tag페이지)
    // tag 페이지에서 버튼 클릭(true) -> navigate(map페이지)
  };
  return (
    <>
      {change === 1 ? (
        <Space direction="vertical">
          <Switch
            checkedChildren="Map"
            unCheckedChildren="Tag"
            defaultChecked
            onClick={SwitchClick}
          />
        </Space>
      ) : (
        <Space direction="vertical">
          <Switch
            checkedChildren="Map"
            unCheckedChildren="Tag"
            onClick={SwitchClick}
          />
        </Space>
      )}
    </>
  );
}
