import React from 'react';
import styled from 'styled-components';

const Img = styled.img`
  width: 100%;
  height: 100vh;
  object-fit: cover;
`;

export default function CarouselChange({ data }) {
  return (
    <div key={data.img}>
      <div className="infoBox">
        <span className="nickName">{data['user.user_name']}</span>
        <span>
          {data.country}, {data.city}
        </span>
        <p className="comment">{data.comment}</p>
      </div>
      <Img src={data.img} />
    </div>
  );
}
