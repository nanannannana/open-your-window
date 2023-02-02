import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { back } from '../../store/modules/window';
import Carousel from 'react-material-ui-carousel';
import './Window.css';
import { BsFillPencilFill, BsFillTrashFill, BsX } from 'react-icons/bs';
import GlobalStyle from '../../components/common/GlobalStyle';
import CarouselChange from '../../components/window/CarouselChange';

export default function Window_Carousel({ country, basicTag, searchTag }) {
  const dispatch = useDispatch();
  const num = useSelector((state) => state.window.carouselNum);

  return (
    <div>
      <GlobalStyle />
      <div className="iconBox">
        <div onClick={() => dispatch(back())} className="backBtn">
          <BsX className="icon" color="#fff" size="30" />
        </div>

        {/* 
        user_id 있을 때 나타나기!!!
        <div className="iconBoxChild">
          <BsFillPencilFill className="icon" color="#fff" size="20" />
          <div className="trashIcon">
            <BsFillTrashFill className="icon" color="#fff" size="20" />
          </div>
        </div> */}
      </div>

      <Carousel
        showArrows={false}
        indicators={false}
        autoPlay={false}
        navButtonsAlwaysVisible={true}
        index={num}
      >
        {country.length !== 0
          ? country.map((v) => <CarouselChange data={v} />)
          : searchTag.length !== 0
          ? searchTag.map((v) => <CarouselChange data={v} />)
          : basicTag.map((v) => <CarouselChange data={v} />)}
      </Carousel>
    </div>
  );
}
