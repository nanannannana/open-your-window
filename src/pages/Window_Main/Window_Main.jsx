import React, { useState } from 'react';
import Window_Map from './Window_Map';
import Window_Tag from './Window_Tag';
import { Switch, Space } from 'antd';

export default function Window_Main() {
  const [change, setChange] = useState(1);
  const view = change === 1 ? <Window_Map /> : <Window_Tag />;
  const SwitchClick = (e) => {
    console.log(e);
    e ? setChange(1) : setChange(2);
  };
  return (
    <>
      <Space direction="vertical">
        <Switch
          checkedChildren="Map"
          unCheckedChildren="Tag"
          defaultChecked
          onClick={SwitchClick}
        />
      </Space>
      {view}
    </>
  );
}
