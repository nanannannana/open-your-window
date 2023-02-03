import React, { useEffect, useRef, useState } from 'react';
import {
  Input,
  Divider,
  Space,
  Tag,
  Select,
  DatePicker,
  Col,
  Row,
  Form,
} from 'antd';
import { PlusCircleOutlined, CloseCircleOutlined } from '@ant-design/icons';
import { TweenOneGroup } from 'rc-tween-one';
import dayjs from 'dayjs';
import './Window_Upload.css';
import WindowBtn from '../../components/window/WindowBtn';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'antd/es/form/Form';
import DrawerToggler from '../../components/common/DrawerToggler';

// CityInput 실시간 input값 확인
// const handleChange = (value: string) => {
//   console.log(`${value}`);
// };

// TextArea 실시간 Input값 확인
// const textAreaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
//   setContent(e.target.value);
// };

export default function Window_Upload() {
  const user_id = localStorage.getItem('userid');

  // country, city 설정
  const [country, setCountry] = useState('');
  const countryChange = (e) => {
    setCountry(e);
  };
  const [city, setCity] = useState('');
  const cityChange = (e) => {
    setCity(e.target.value);
  };

  //image 설정
  const [img, setImg] = useState('');
  const [imgUrl, setImgUrl] = useState('');
  const onChangeImg = (e) => {
    setImgUrl(e.target.files[0]);
    // FileReader 생성자를 사용하여 이미지 미리보기 기능 구현
    const reader = new FileReader();
    // readAsDataURL: 바이너리 파일을 Base64 Encode 문자열로 반환
    reader.readAsDataURL(e.target.files[0]);
    // 읽기 동작이 성공적으로 완료되었을 때 발생
    reader.onload = () => {
      setImg(reader.result);
      // console.log('imgUrl: ', reader.result);
    };
  };

  //TextArea 설정
  const { TextArea } = Input;
  //content 내용 저장
  const [content, setContent] = useState('');
  const textAreaChange = (e) => {
    setContent(e.target.value);
  };

  //Date 설정
  // const date = new Date();
  // const Today =
  //   date.getFullYear() + '/' + (date.getMonth + 1) + '/' + date.getDate;
  const [date, setDate] = useState('');
  const dateChange = (date, dateString) => setDate(dateString);
  // const dateRange = (currentDate: dayjs) => console.log(currentDate);
  // const dateRange = (current) => {
  //   // const day = new Date();
  //   // console.log(day);
  //   // currentDate < dayjs.endOf('YYYY/MM/DD');
  //   // current.endOf() > dayjs(new Date());
  //   const start = moment(dayjs(new Date()), 'YYYY-MM-DD');
  //   return current < start || current > moment();
  // };
  const disabledDate = (current) => {
    // 오늘 이후 날짜 선택 불가
    return current > dayjs().endOf('day');
  };

  // tag 설정
  const [tags, setTags] = useState([]); // tag배열
  const [inputVisible, setInputVisible] = useState(false); // new tag 클릭 시, input -> visible -> true
  const [inputValue, setInputValue] = useState(''); //input 기본값 ''
  const inputRef = useRef(null);

  //tag 관련 함수
  useEffect(() => {
    if (inputVisible) {
      inputRef.current.focus(); // inputVisible = true 일 때, input에 focus 설정
    }
  }, []);
  const handleClose = (removedTag) => {
    const newTags = tags.filter((tag) => tag !== removedTag);
    console.log(newTags);
    setTags(newTags); // 삭제한 태그를 제외하고 리렌더링
  };
  const showInput = () => {
    setInputVisible(true);
  };
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };
  const handleInputConfirm = () => {
    if (inputValue && tags.indexOf(inputValue) === -1) {
      setTags([...tags, inputValue]);
    }
    setInputVisible(false);
    setInputValue('');
  };
  const forMap = (tag) => {
    const tagElem = (
      <Tag
        closable
        closeIcon={<CloseCircleOutlined style={{ color: 'purple' }} />}
        color="purple"
        onClose={(e) => {
          e.preventDefault();
          handleClose(tag);
        }}
      >
        {tag}
      </Tag>
    );
    return (
      <span key={tag} style={{ display: 'inline-block' }}>
        {tagElem}
      </span>
    );
  };
  const tagChild = tags.map(forMap);
  const navigate = useNavigate();

  const [form] = Form.useForm();
  // const onFinish = (values: any) => {
  //   formData.append('country', values.country);
  //   formData.append('city', values.city);
  // };

  //server로 정보 전달
  const windowBtnClick = async () => {
    const formData = new FormData();
    formData.append('country', country);
    formData.append('city', city);
    formData.append('tags', tags);
    formData.append('date', date);
    formData.append('content', content);
    formData.append('user_id', user_id);
    formData.append('img', imgUrl);
    // console.log(formData);
    console.log(imgUrl);

    country || city || imgUrl
      ? await axios
          .post('http://localhost:4000/window/postupload', formData)
          .then((res) => {
            if (res.status === 200)
              // navigate(`/window/postedit?num=${res.data.num}`);
              navigate('/window/postedit', {
                replace: true,
                state: { num: res.data.num },
              });
          })
          .catch((err) => console.log(err))
      : true;
  };

  return (
    <>
      <DrawerToggler />
      <div className="fullBox">
        <p className="windowUploadTitle">Upload</p>
        <Form form={form}>
          {/* img upload div */}
          <Row gutter={100} height="100%">
            <Col span={14}>
              <label htmlFor="file">
                {img === '' ? (
                  <div className="imgDiv">Image Upload</div>
                ) : (
                  <img src={img} className="upLoadImgDiv" />
                )}
              </label>
              <input
                type="file"
                accept="image/*"
                id="file"
                style={{ display: 'none' }}
                onChange={onChangeImg}
              />
            </Col>
            <Col span={10}>
              <div className="detailBox">
                {/* Country, City div */}
                <Divider orientation="left">Where</Divider>
                <div>
                  <div className="countrySelect">
                    <Space wrap>
                      <Form.Item
                        name="country"
                        rules={[
                          {
                            required: true,
                            message: '',
                          },
                        ]}
                      >
                        <Select
                          placeholder="Country"
                          style={{ width: 120 }}
                          // onChange={handleChange}
                          onChange={countryChange}
                          options={[
                            { value: 'Argentina', label: 'Argentina' },
                            { value: 'Australia', label: 'Australia' },
                            { value: 'Brazil', label: 'Brazil' },
                            { value: 'France', label: 'France' },
                            { value: 'Singapore', label: 'Singapore' },
                            { value: 'South Korea', label: 'South Korea' },
                            { value: 'Spain', label: 'Spain' },
                            { value: 'Taiwan', label: 'Taiwan' },
                            { value: 'Thailand', label: 'Thailand' },
                            { value: 'United States of America', label: 'USA' },
                          ]}
                        />
                      </Form.Item>
                    </Space>
                  </div>
                  <div className="cityInput">
                    <Form.Item
                      name="city"
                      rules={[
                        {
                          required: true,
                          message: '',
                        },
                      ]}
                    >
                      <Input
                        size="medium"
                        placeholder="City"
                        onChange={cityChange}
                      />
                    </Form.Item>
                  </div>
                </div>

                {/* date div */}
                <Divider orientation="left">Date</Divider>
                <div>
                  <DatePicker
                    defaultValue={dayjs(new Date())}
                    onChange={dateChange}
                    format={'YYYY/MM/DD'}
                    placeholder="YYYY/MM/DD"
                    disabledDate={disabledDate}
                  />
                </div>

                {/* tag div */}
                <Divider orientation="left">Tags</Divider>
                <div>
                  <div style={{ marginBottom: 16 }}>
                    <TweenOneGroup
                      enter={{
                        scale: 0.8,
                        opacity: 0,
                        type: 'from',
                        duration: 100,
                      }}
                      onEnd={(e) => {
                        if (e.type === 'appear' || e.type === 'enter') {
                          e.target.style = 'display: inline-block';
                        }
                      }}
                      leave={{ opacity: 0, width: 0, scale: 0, duration: 200 }}
                      appear={false}
                    >
                      {/* <Form.Item name="tag" rules={[{ required: true }]}> */}
                      {tagChild}
                      {/* </Form.Item> */}
                    </TweenOneGroup>
                  </div>
                  {inputVisible ? (
                    <Input
                      ref={inputRef}
                      type="text"
                      size="small"
                      style={{ width: 78 }}
                      value={inputValue}
                      onChange={handleInputChange}
                      onBlur={handleInputConfirm}
                      onPressEnter={handleInputConfirm}
                    />
                  ) : (
                    <Tag onClick={showInput}>
                      <PlusCircleOutlined /> New Tag
                    </Tag>
                  )}
                </div>

                {/* Content div */}
                <Divider orientation="left">Content</Divider>
                <TextArea
                  showCount
                  maxLength={50}
                  onChange={textAreaChange}
                  style={{ height: 50, resize: 'none' }}
                  placeholder="코멘트를 남겨주세요!"
                />

                {/* button div */}
                <div className="uploadBtn">
                  <Form.Item>
                    <WindowBtn
                      clickEvent={windowBtnClick}
                      borderColor="#2C2C2A"
                      color="#2C2C2A"
                      hoverBackgroundColor="#2C2C2A"
                      hoverBorderColor="#ffffff"
                      hoverColor="#ffffff"
                      fontSize="1.5em"
                      height="auto"
                      text="Upload"
                    />
                  </Form.Item>
                </div>
              </div>
            </Col>
          </Row>
        </Form>
      </div>
    </>
  );
}
