import React, { useEffect, useState } from 'react';
import './UniverseViewer.css';
import { useDispatch, useSelector } from 'react-redux';
import { asyncUpFetch } from '../../store/modules/apod';
import { ConfigProvider, DatePicker } from 'antd';
import dayjs from 'dayjs';
import locale from 'antd/locale/ko_KR';
import { InfinitySpin } from 'react-loader-spinner';
import DrawerToggler from '../common/DrawerToggler';
import UniverseBtn from './UniverseBtn';
import GlobalStyle from '../common/GlobalStyle';
import styled from 'styled-components';

// 원하는 날짜의 우주 사진 볼 수 있는 PAGE (NASA APOD API)
export default function Viewer() {
  const [isVideo, setIsVideo] = useState(false);

  // 1. api 호출 - default 접속일자의 정보 받음
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(asyncUpFetch());
  }, []);

  // 1-[1] api 정보 중 title, explanation, url 값 할당
  const { title, explanation, url, media_type } = useSelector((state) => {
    return state.asyncThunk.data;
  });
  // 1-[2] api 정보 수신 상태 (loading 여부) 값 할당
  const asyncLoading = useSelector((state) => {
    return state.asyncThunk.loading;
  });

  useEffect(() => {
    media_type === 'video' ? setIsVideo(true) : setIsVideo(false);
  }, [url]);

  // 2. datepicker에서 선택한 날짜의 api 호출
  // 2-[1] date format : api의 date format으로 변경
  // 2-[2] 앞서 선언한 변수 값 Update
  const dateUpdate = (_, newDate) => {
    //date,dateString 중 dateString(YYYY/MM/DD)을 date로 받음
    if (newDate) {
      dispatch(asyncUpFetch(newDate.match(/\d+/g).join('-')));
    }
  };
  // 3. datepicker의 date range : api의 date range와 일치시킴
  const disabledDate = (current) => {
    return (
      current > dayjs().endOf('day') ||
      current < dayjs('1995 / 06 / 16').endOf('day')
    );
  };

  const goVideo = (url) => {
    return (
      <iframe src={url} style={{ width: '100%', height: '100%' }}></iframe>
    );
  };

  //------------------- UI 시작 //////
  return (
    <div
      className="Univ_ViewContainer"
      style={{
        backgroundImage: isVideo
          ? 'url(https://www.nasa.gov/sites/default/files/thumbnails/image/iss068e054895_orig.jpg)'
          : `url('${url}')`,
        backgroundSize: 'cover',
      }}
    >
      <GlobalStyle /> <DrawerToggler />
      <UniverseBtn isGame={false} url={url} />
      <div className="Univ_loader">
        {asyncLoading && <InfinitySpin width="100" color=" cornflowerblue" />}
      </div>
      <div className="Univ_dateContainer">
        <ConfigProvider locale={locale}>
          <DatePicker
            className="Univ_datepicker"
            defaultValue={dayjs(new Date())}
            format={'YYYY/MM/DD'}
            disabledDate={disabledDate}
            onChange={dateUpdate}
          />
        </ConfigProvider>
      </div>
      {/* {isVideo && <VideoPlayer />} */}
      {isVideo && goVideo(url)}
      <div className="Univ_textContainer">
        <div className="Univ_title">{title}</div>
        <div className="Univ_explanation">{explanation}</div>
      </div>
    </div>
  );
}
