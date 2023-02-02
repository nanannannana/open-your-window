import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { back } from '../../store/modules/window';
import Carousel from 'react-material-ui-carousel';
import './Window_Main.css';
import { BsFillPencilFill, BsFillTrashFill, BsX } from 'react-icons/bs';
import GlobalStyle from '../../components/GlobalStyle';

export default function Window_Carousel({ imgArr, windowInfo }) {
  const dispatch = useDispatch();
  const num = useSelector((state) => state.window.carouselNum);
  // console.log(windowInfo);
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
        {imgArr.map((v, i) => (
          <div key={v[1]}>
            <div className="infoBox">
              <span className="nickName">nickName</span>
              <span>
                {windowInfo[i].country}, {windowInfo[i].city}
              </span>
              <p className="comment">{windowInfo[i].comment}</p>
            </div>
            <img src={v[1]} className="CarouselImg" />
          </div>
        ))}
        {/* <div>
          <img src="/img/1675143132258.jpg" />
        </div>
        <div>
          <img src="/img/1675143490497.jpg" />
          <p className="legend">Legend 2</p>
        </div>
        <div>
          <img src="/img/1675143878886.jpg" />
          <p className="legend">Legend 3</p>
        </div> */}
      </Carousel>
    </div>
  );
}
