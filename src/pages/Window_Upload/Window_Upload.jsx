import React, { useEffect, useRef, useState } from 'react';
import { Col, Input, Divider, Space, Tag, Select } from 'antd';
import type { InputRef } from 'antd';
import './Window_Upload.css';

const handleChange = (value: string) => {
  console.log(`${value}`);
};

export default function Window_Upload() {
  // const { token } = theme.useToken();
  // const [tags, setTags] = useState(['warm', 'winter', 'snow']); // tag배열
  // const [inputVisible, setInputVisible] = useState(false); // new tag 클릭 시, input -> visible -> true
  // const [inputValue, setInputValue] = useState(''); //input 기본값 ''
  // const inputRef = useRef < InputRef > null;

  // useEffect(() => {
  //   if (inputVisible) {
  //     inputRef.current.focus(); // inputVisible = true 일 때, input에 focus 설정
  //   }
  // }, []);
  // const handleClose = (removedTag: string) => {
  //   const newTags = tags.filter((tag) => tag !== removedTag);
  //   console.log(newTags);
  //   setTags(newTags); // 삭제한 태그를 제외하고 리렌더링
  // };
  // const showInput = () => {
  //   setInputVisible(true);
  // };
  // const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   setInputValue(e.target.value);
  // };

  // const handleInputConfirm = () => {
  //   if (inputValue && tags.indexOf(inputValue) === -1) {
  //     setTags([...tags, inputValue]);
  //   }
  //   setInputVisible(false);
  //   setInputValue('');
  // };

  // const forMap = (tag: string) => {
  //   const tagElem = (
  //     <Tag
  //       closable
  //       onClose={(e) => {
  //         e.preventDefault();
  //         handleClose(tag);
  //       }}
  //     >
  //       {tag}
  //     </Tag>
  //   );
  //   return (
  //     <span key={tag} style={{ display: 'inline-block' }}>
  //       {tagElem}
  //     </span>
  //   );
  // };
  // const tagChild = tags.map(forMap);

  return (
    <>
      <p>Upload</p>
      <div className="UploadBox">
        <div
          style={{
            width: '400px',
            height: '400px',
            backgroundColor: '#ceb9ff',
            display: 'inline-block',
          }}
        >
          사진
        </div>
        <div className="DetailBox">
          <Space wrap className="Select">
            <Select
              placeholder="Country"
              style={{ width: 120 }}
              onChange={handleChange}
              options={[
                { value: 'United States of America', label: 'USA' },
                { value: 'Australia', label: 'Australia' },
                { value: 'South Korea', label: 'South Korea' },
                { value: 'Brazil', label: 'Brazil' },
              ]}
            />
          </Space>
          <Col span={8}>
            <Input size="medium" placeholder="City" />
          </Col>
          <div>
            <Divider orientation="left">Tags</Divider>
            <Tag color="red">warm</Tag>
            <Tag color="gold">cozy</Tag>
            <Tag color="geekblue">winter</Tag>
            <Tag color="purple">purple</Tag>
          </div>
        </div>
      </div>
    </>
  );
}
