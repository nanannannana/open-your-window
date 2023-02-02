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
import './Window.css';
import { Switch, Space } from 'antd';
import GlobalStyle from '../../components/common/GlobalStyle';
import { switching } from '../../store/modules/window';
import DrawerToggler from '../../components/common/DrawerToggler';
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
// const MapBox = styled.div`
//   width: 100%;
//   height: 100%;
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;
// `;

export default function Window_Map() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  return (
    <div>
      <GlobalStyle />
      <DrawerToggler />
      <div className="switchCss">
        <Space direction="vertical">
          <Switch
            checkedChildren="Map"
            unCheckedChildren="Tag"
            defaultChecked
            onClick={() => {
              navigate('/window/tag');
              dispatch(switching());
            }}
          />
        </Space>
      </div>
      <div className="mapCss">
        <ComposableMap data-tip="" viewBox="0 0 850 500">
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
      </div>

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
