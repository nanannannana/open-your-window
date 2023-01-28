import React from 'react';
import {
  ComposableMap,
  Geographies,
  Geography,
  ZoomableGroup,
} from 'react-simple-maps';
import styled from 'styled-components';
import { Marker } from 'react-simple-maps';

const StyledGeography = styled(Geography)`
  fill: #0000009b;
  stroke: #0000003b;
  stroke-width: 0.5;
  &:hover {
    fill: #834ffa;
  }
`;
const Canada = styled.text`
  text-anchor: middle;
  fill: #0077ff;
  font-size: 10px;
`;

export default function Window_Main() {
  return (
    <>
      <ComposableMap>
        <Geographies geography="/world-countries.json">
          {({ geographies }) =>
            geographies.map((geo) => (
              <StyledGeography key={geo.rsmKey} geography={geo} />
            ))
          }
        </Geographies>
        <Marker coordinates={[-101, 53]} fill="#777">
          <Canada>Canada</Canada>
        </Marker>
      </ComposableMap>
    </>
    // <>
    //   <ComposableMap>
    //     <ZoomableGroup
    //       zoom={position.zoom}
    //       center={position.coordinates}
    //       onMoveEnd={handleMoveEnd}
    //     >
    //       <Geographies geography="/world-countries.json">
    //         {({ geographies }) =>
    //           geographies.map((geo) => (
    //             <StyledGeography key={geo.rsmKey} geography={geo} />
    //           ))
    //         }
    //       </Geographies>
    //     </ZoomableGroup>
    //   </ComposableMap>
    // </>
  );
}
