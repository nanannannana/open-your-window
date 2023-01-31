import React from 'react';
import './UniverseDate.css';
import { ConfigProvider, DatePickerProps } from 'antd';
import { DatePicker } from 'antd';
import dayjs from 'dayjs';
import 'dayjs/locale/ko';
import locale from 'antd/locale/ko_KR';
import customParseFormat from 'dayjs/plugin/customParseFormat';

dayjs.extend(customParseFormat);

// const dateStyle = {
//   backgroundColor: '#2B2B2B',
//   color: 'white',
// };

const UniverseDate: React.FC = () => (
  <ConfigProvider locale={locale}>
    <DatePicker
      defaultValue={dayjs(new Date())}
      format={'YYYY/MM/DD'}
      size={'large'}
      // style={dateStyle}
    />
  </ConfigProvider>
);

export default UniverseDate;
