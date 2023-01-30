import React, { useEffect, useRef, useState } from 'react';
import { Input, Divider, Space, Tag, Select, DatePicker } from 'antd';
import { PlusCircleOutlined, CloseCircleOutlined } from '@ant-design/icons';
import { TweenOneGroup } from 'rc-tween-one';
import dayjs from 'dayjs';
import './Window_UploadEdit.css';
import WindowBtn from '../../components/window/WindowBtn';
import axios from 'axios';

// CityInput 실시간 input값 확인
// const handleChange = (value: string) => {
//   console.log(`${value}`);
// };

// TextArea 실시간 Input값 확인
// const textAreaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
//   setContent(e.target.value);
// };

export default function Window_UploadEdit({ setView }) {
  // country, city 설정
  const [country, setCountry] = useState('');
  const countryChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setCountry(e);
  };
  const [city, setCity] = useState('');
  const cityChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
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
  const textAreaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setContent(e.target.value);
  };

  // const date = new Date();
  // const Today =
  //   date.getFullYear() + '/' + (date.getMonth + 1) + '/' + date.getDate;
  const [date, setDate] = useState('');
  const dateChange = (date: dayjs, dateString: string) => setDate(dateString);

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
  const handleClose = (removedTag: string) => {
    const newTags = tags.filter((tag) => tag !== removedTag);
    console.log(newTags);
    setTags(newTags); // 삭제한 태그를 제외하고 리렌더링
  };
  const showInput = () => {
    setInputVisible(true);
  };
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };
  const handleInputConfirm = () => {
    if (inputValue && tags.indexOf(inputValue) === -1) {
      setTags([...tags, inputValue]);
    }
    setInputVisible(false);
    setInputValue('');
  };
  const forMap = (tag: string) => {
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

  //server로 정보 전달
  const windowBtnClick = () => {
    const formData = new FormData();
    formData.append('country', country);
    formData.append('city', city);
    formData.append('tags', tags);
    formData.append('date', date);
    formData.append('content', content);
    formData.append('img', imgUrl);
    axios
      .post('http://localhost:4000/window/uploadConfirm', formData)
      .then((res) => setView({ change: false, num: res.data.num }));
  };

  return (
    <div className="fullBox">
      <p className="windowUploadTitle">Upload</p>
      {/* img upload div */}
      <div className="uploadBox">
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
        <div className="detailBox">
          {/* Country, City div */}
          <Divider orientation="left">Where</Divider>
          <div>
            <div className="countrySelect">
              <Space wrap>
                <Select
                  placeholder="Country"
                  style={{ width: 120 }}
                  // onChange={handleChange}
                  onChange={countryChange}
                  options={[
                    { value: 'United States of America', label: 'USA' },
                    { value: 'Australia', label: 'Australia' },
                    { value: 'South Korea', label: 'South Korea' },
                    { value: 'Brazil', label: 'Brazil' },
                  ]}
                />
              </Space>
            </div>
            <div className="cityInput">
              <Input size="medium" placeholder="City" onChange={cityChange} />
            </div>
          </div>

          {/* date div */}
          <Divider orientation="left">Date</Divider>
          <div>
            <DatePicker
              onChange={dateChange}
              format={'YYYY/MM/DD'}
              placeholder="YYYY/MM/DD"
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
                {tagChild}
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
            maxLength={100}
            onChange={textAreaChange}
            style={{ height: 50, resize: 'none' }}
            placeholder="코멘트를 남겨보세요!"
          />

          {/* button div */}
          <div className="uploadBtn">
            <WindowBtn
              clickEvent={windowBtnClick}
              borderColor="#2C2C2A"
              color="#2C2C2A"
              hoverBackgroundColor="#2C2C2A"
              hoverBorderColor="#ffffff"
              hoverColor="#ffffff"
              text="Upload"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
