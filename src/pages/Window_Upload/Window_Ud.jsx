import React from 'react';
import DrawerToggler from '../../components/common/DrawerToggler';
import { Form } from 'react-router-dom';
import { TweenOneGroup } from 'rc-tween-one';
import TextArea from 'antd/es/input/TextArea';

export default function Window_Ud() {
  return (
    <>
      <Form name="uploadPost" onFinish={onFinish}>
        <Form.Item name="country" rules={[{ required: true, message: '' }]}>
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
        <Form.Item name="city" rules={[{ required: true, message: '' }]}>
          <Input size="medium" placeholder="City" />
        </Form.Item>

        <Form.Item name="date">
          <DatePicker
            defaultValue={dayjs(new Date())}
            format={'YYYY/MM/DD'}
            placeholder="YYYY/MM/DD"
            disabledDate={disabledDate}
          />
        </Form.Item>

        {/* tag 입력 후, enter 키 눌렀을 때 애니메이션 효과 */}
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
          <Tag onClick={showInput}>
            <PlusCircleOutlined /> New Tag
          </Tag>
        )}
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
      </Form>
    </>
  );
}
