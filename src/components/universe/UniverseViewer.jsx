import React, { useEffect } from 'react';
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

// const myDate = '2013/11/15'.match(/\d+/g).join('-');
// console.log(myDate);
// const MyBtn = styled(Button)`
//   float: right;
//   margin: 20px 100px 0 0;
//   transform: scale(1.2);
// `;

export default function Viewer() {
  const { title, explanation, url } = useSelector((state) => {
    return state.asyncThunk.data;
  });
  const asyncLoading = useSelector((state) => {
    return state.asyncThunk.loading;
  });
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncUpFetch());
  }, []);

  const dateUpdate = (_, newDate) => {
    //date,dateString 중 dateString(YYYY/MM/DD)을 date로 받음
    dispatch(asyncUpFetch(newDate.match(/\d+/g).join('-')));
    console.log(newDate);
  };
  // const goPage = () => {
  //   location.href = '/universe/hangman';
  //   // setShowGame(!showGame);
  // };
  const disabledDate = (current) => {
    return (
      current > dayjs().endOf('day') ||
      current < dayjs('1995 / 06 / 16').endOf('day')
    );
  };

  return (
    <div
      className="Univ_ViewContainer"
      style={{ backgroundImage: `url('${url}')` }}
    >
    <GlobalStyle /> <DrawerToggler />
      <UniverseBtn isGame={false} url={url} />
      <div className="Univ_loader">
        {asyncLoading && <InfinitySpin width="100" color=" cornflowerblue" />}
      </div>
      {/* <Tooltip title="GO Game">
        <MyBtn
          ghost
          size="large"
          icon={<EastOutlined color="white" />}
          onClick={goPage}
        />
      </Tooltip> */}
      <div className="Univ_dateContainer">
        <ConfigProvider locale={locale}>
          <DatePicker
            className="Univ_datepicker"
            defaultValue={dayjs(new Date())}
            format={'YYYY/MM/DD'}
            disabledDate={disabledDate}
            // size={'large'}
            onChange={dateUpdate}
          />
        </ConfigProvider>
      </div>
      <div className="Univ_textContainer">
        <div className="Univ_title">{title}</div>
        <div className="Univ_explanation">{explanation}</div>
      </div>
    </div>
  );
}
