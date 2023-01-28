import React, { useState } from 'react';
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
  ZoomableGroup,
} from 'react-simple-maps';
import styled from 'styled-components';
import ShareWindowBtn from '../components/ShareWindowBtn';
// import { Tooltip as ReactTooltip } from 'react-tooltip';

const getUrl =
  'https://raw.githubusercontent.com/deldersveld/topojson/master/world-countries-sans-antarctica.json';

const StyledGeography = styled(Geography)`
  fill: #cbcbcb;
  stroke: #ffffff;
  stroke-width: 0.5;
  &:hover {
    fill: #ceb9ff;
    outline: none !important;
  }
`;

export default function Window_Main() {
  return (
    <div>
      <ComposableMap data-tip="">
        <Geographies geography={getUrl}>
          {({ geographies }) =>
            geographies.map((geo) => (
              <StyledGeography
                key={geo.rsmKey}
                geography={geo}
                onClick={() => console.log(geo.properties.name)}
              />
            ))
          }
        </Geographies>
      </ComposableMap>
      <ShareWindowBtn />
    </div>
  );
}
