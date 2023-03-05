import React, { useRef, useState } from 'react';
import { Form } from 'react-router-dom';
import styled from 'styled-components';
import {
  Input,
  Divider,
  Tag,
  Select,
  DatePicker,
  Col,
  Row,
  Form,
  Space,
} from 'antd';
import { PlusCircleOutlined } from '@ant-design/icons';
import { TweenOneGroup } from 'rc-tween-one';
import dayjs from 'dayjs';

const CountrySelect = styled.div`
  display: inline-block;
`;
const CityInput = styled.div`
  display: inline-block;
  margin-left: 15px;
  @media (max-width: 1440px) {
    width: 100px !important;
  }
`;
const WhereBox = styled.div`
  display: flex;
  justify-content: space-between;
`;

export default function PostUpload() {
  // tag 설정
  //1. tags 배열 초기값 설정
  const [tags, setTags] = useState([]); // tag배열
  //2. new tag 클릭 시, input값 나타남 / 기본값 false(input창 숨겨짐)
  const [inputVisible, setInputVisible] = useState(false);
  //3. inputValue 초기값 설정
  const [inputValue, setInputValue] = useState('');
  const inputRef = useRef(null);

  const handleClose = (removedTag) => {
    // newTags: 삭제한 태그 외 태그로 새 배열 생성
    const newTags = tags.filter((tag) => tag !== removedTag);
    console.log(newTags);
    setTags(newTags); // 삭제한 태그를 제외하고 리렌더링
  };

  //input에 value값이 있을 때 tags 배열에 그 value값이 포함되어 있지 않은 경우,
  //inputValue값을 tags배열에 넣음
  const handleInputConfirm = () => {
    if (inputValue && tags.indexOf(inputValue) === -1) {
      setTags([...tags, inputValue]);
    }
    setInputVisible(false);
    setInputValue('');
  };

  const tagChild = tags.map((tag) => {
    return (
      <span key={tag} style={{ display: 'inline-block' }}>
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
      </span>
    );
  });

  return (
    <>
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
          <Form name="uploadPost" onFinish={onFinish}>
            <div className="detailBox">
              <Divider orientation="left">Where</Divider>

              {/* country Selecter */}
              <CountrySelect>
                <Form.Item
                  name="country"
                  rules={[{ required: true, message: '' }]}
                >
                  <Select
                    placeholder="Country"
                    style={{ width: 120 }}
                    optins={[
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
              </CountrySelect>

              {/* city Input */}
              <CityInput>
                <Form.Item
                  name="city"
                  rules={[{ required: true, message: '' }]}
                >
                  <Input size="medium" placeholder="City" />
                </Form.Item>
              </CityInput>

              {/* 이미지 datePicker */}
              <Divider orientation="left">Date</Divider>
              <Form.Item name="date">
                <DatePicker
                  defaultValue={dayjs(new Date())}
                  format={'YYYY/MM/DD'}
                  placeholder="YYYY/MM/DD"
                  disabledDate={disabledDate}
                />
              </Form.Item>

              <Divider orientation="left">Tags</Divider>
              <div style={{ marginBottom: 16 }}>
                <Form.Item name="tags">
                  <TweenOneGroup
                    enter={{
                      scale: 0.8,
                      opacity: 0,
                      type: 'from',
                      duration: 100,
                    }}
                    onEnd={(e) => {
                      if (e.type === 'appear' || e.type === 'enter')
                        e.target.style = 'display: inline-block';
                    }}
                    leave={{ opacity: 0, width: 0, scale: 0, duration: 200 }}
                    appear={false}
                  >
                    {tagChild}
                  </TweenOneGroup>
                </Form.Item>

                {/* inputVisible이 true면 input창 보임, false면 New tag icon보임 => 클릭 시, input창으로 변경 */}
                {inputVisible ? (
                  <Input
                    ref={inputRef}
                    type="text"
                    size="small"
                    style={{ width: 78 }}
                    value={inputValue}
                    onBlur={handleInputConfirm}
                    onPressEnter={handleInputConfirm}
                  />
                ) : (
                  <Tag onClick={() => setInputVisible(true)}>
                    <PlusCircleOutlined /> New Tag
                  </Tag>
                )}
              </div>

              {/* content */}
              <Divider orientation="left">Content</Divider>
              <Form.Item name="content">
                <TextArea
                  showCount
                  maxLength={50}
                  style={{ height: 50, resize: 'none' }}
                  placeholder="코멘트를 남겨주세요!"
                />
              </Form.Item>

              <Form.Item>
                <WindowBtn
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
          </Form>
        </Col>
      </Row>
    </>
  );
}
