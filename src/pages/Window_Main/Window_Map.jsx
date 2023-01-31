import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
  ZoomableGroup,
} from 'react-simple-maps';
import styled from 'styled-components';
import WindowBtn from '../../components/window/WindowBtn';
import './Window_Main.css';
import { Switch, Space } from 'antd';
import GlobalStyle from '../../components/GlobalStyle';
// import { Tooltip as ReactTooltip } from 'react-tooltip';

const getUrl =
  'https://raw.githubusercontent.com/deldersveld/topojson/master/world-countries-sans-antarctica.json';

const StyledGeography = styled(Geography)`
  fill: #797284;
  stroke: #ffffff;
  stroke-width: 0.1;
  &:hover {
    fill: #c2cca8;
    outline: none !important;
  }
`;

export default function Window_Map() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  return (
    <div>
      <GlobalStyle />
      <div className="switchCss">
        <Space direction="vertical">
          <Switch
            checkedChildren="Map"
            unCheckedChildren="Tag"
            defaultChecked
            onClick={() => {
              navigate('/window/tag');
              dispatch(back());
            }}
          />
        </Space>
      </div>

      <ComposableMap data-tip="">
        <Geographies geography={getUrl}>
          {({ geographies }) =>
            geographies.map((geo) => (
              <StyledGeography
                key={geo.rsmKey}
                geography={geo}
                onClick={() =>
                  navigate(`/window/tag?country=${geo.properties.name}`)
                }
              />
            ))
          }
        </Geographies>
      </ComposableMap>
      <div className="shareWindowBtn">
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
