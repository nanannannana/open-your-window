import React from 'react';
import './UniverseDate.css';
import { ConfigProvider, DatePickerProps } from 'antd';
import { DatePicker } from 'antd';
import dayjs from 'dayjs';
import 'dayjs/locale/ko';
import locale from 'antd/locale/ko_KR';
import customParseFormat from 'dayjs/plugin/customParseFormat';

dayjs.extend(customParseFormat);

const newDate = (_, date) => {
  //date,dateString 중 dateString(YYYY/MM/DD)을 date로 받음
  console.log(date);
};

const UniverseDate: React.FC = () => (
  <ConfigProvider locale={locale}>
    <DatePicker
      defaultValue={dayjs(new Date())}
      format={'YYYY/MM/DD'}
      size={'large'}
      onChange={newDate}
      style={{ marginTop: '200px' }}
    />
  </ConfigProvider>
);

export default UniverseDate;
