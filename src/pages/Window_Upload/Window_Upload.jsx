import React, { useEffect, useRef, useState } from 'react';
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
  Modal,
} from 'antd';
import { PlusCircleOutlined, CloseCircleOutlined } from '@ant-design/icons';
import { TweenOneGroup } from 'rc-tween-one';
import dayjs from 'dayjs';
import './Window_Upload.css';
import WindowBtn from '../../components/window/WindowBtn';
import axios from 'axios';
import { useLocation, useNavigate } from 'react-router-dom';
import DrawerToggler from '../../components/common/DrawerToggler';
import styled from 'styled-components';
// import { DataArrayRounded } from '@mui/icons-material';

const FullBox = styled.div`
  padding: 200px 270px 0 270px;
  @media (max-width: 1440px) {
    padding: 50px 220px 0 180px !important;
  }
`;
const CountrySelect = styled.div`
  display: inline-block;
`;
const CityInput = styled.div`
  display: inline-block;
  margin-left: 15px;
  @media (max-width: 1440px) {
    width: 150px !important;
  }
`;
const TagCss = styled.div`
  div {
    display: inline-block;
    margin: 0;
  }
  span {
    margin-bottom: 5px;
  }
`;
const { TextArea } = Input;
const { success, warning } = Modal;

export default function Window_Upload() {
  const navigate = useNavigate();
  const user_id = localStorage.getItem('userid');

  //0. mypage - 정보수정 경로로 들어온 경우, db에서 데이터 가져옴
  const [form] = Form.useForm();
  const { state } = useLocation();
  useEffect(() => {
    if (state !== null) {
      async function fetchData() {
        await axios
          .get(`http://${process.env.REACT_APP_HOST}/window/posts`, {
            params: { num: state.num },
          })
          .then((res) => {
            // useState 사용X, form.setFieldsValue를 사용하여 초기값 변경
            form.setFieldsValue({
              country: res.data.country,
              city: res.data.city,
              content: res.data.comment,
            });
            setImg(res.data.img);
            setImgServer(res.data.img);
            if (res.data.tags !== '') setTags(res.data.tags.split(','));
            setDate(dayjs(res.data.window_date));
          });
      }
      fetchData();
    } else {
      setDate('default');
    }
  }, []);

  //1. image 설정
  //1-1) img: 이미지 미리보기 경로(화면), imgUrl: 백에 전송할 이미지파일 정보(백)
  const [img, setImg] = useState('');
  const [imgUrl, setImgUrl] = useState('');
  const [imgServer, setImgServer] = useState('');
  const onChangeImg = (e) => {
    //1-2) 업로드 할 이미지파일 정보 imgUrl로 저장
    setImgUrl(e.target.files[0]);

    //1-3) 화면에 업로드 할 이미지 미리볼 수 있도록 설정
    // FileReader 생성자를 사용하여 이미지 미리보기 기능 구현
    const reader = new FileReader();
    // readAsDataURL: 바이너리 파일을 Base64 Encode 문자열로 반환
    reader.readAsDataURL(e.target.files[0]);
    // 읽기 동작이 성공적으로 완료되었을 때 발생
    reader.onload = () => {
      setImg(reader.result);
    };
  };

  //2. Date 설정
  //2-1) 현재 날짜 추출
  const today = dayjs().format('YYYY-MM-DD');
  //2-2) date의 초기값은 빈값, dateChange: date에 값이 들어왔을 때 값을 문자열로 변환
  const [date, setDate] = useState('');
  const dateChange = (date, dateString) => {
    if (dateString !== '') setDate(dateString);
  };
  //2-3) 오늘 이후 날짜 선택 불가하게 설정
  const disabledDate = (current) => {
    return current > dayjs().endOf('day');
  };

  //3. tag 설정
  //3-1) tags 배열 초기값 설정
  const [tags, setTags] = useState([]); // tag배열
  //3-2) new tag 클릭 시, input값 나타남 / 기본값 false(input창 숨겨짐)
  const [inputVisible, setInputVisible] = useState(false);
  //3-3) inputValue 초기값 설정
  const [inputValue, setInputValue] = useState('');
  const inputRef = useRef(null);
  //3-4) 작성한 태그를 삭제할 경우, 새 태그 배열 형성
  const handleClose = (removedTag) => {
    // newTags: 삭제한 태그 외 태그로 새 배열 생성
    const newTags = tags.filter((tag) => tag !== removedTag);
    console.log(newTags);
    setTags(newTags); // 삭제한 태그를 제외하고 리렌더링
  };
  //3-5) 태그 작성 후, tags 배열에 작성한 값이 포함되어 있지 않은 경우, 포함시키도록 설정
  const handleInputConfirm = () => {
    if (inputValue && tags.indexOf(inputValue) === -1) {
      setTags([...tags, inputValue]);
    }
    setInputVisible(false);
    setInputValue('');
  };
  //3-6) 작성되는 input값, inputValue값으로 저장되도록 설정
  // 이 설정 안 할 경우, input창에 값이 나타나지 않음..
  const InputValueChange = (e) => setInputValue(e.target.value);
  //3-7) input 창 보여질 때, 창이 focus 되도록 설정
  useEffect(() => {
    if (inputVisible) inputRef.current.focus();
  }, [inputVisible]);
  //3-8) tags 초기값대로 tag가 그려짐(span태그)
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

  //4. server로 정보 전달
  const onFinish = async (values) => {
    if (state) {
      //4-1) Update - 이미지를 변경하는 경우,
      //4-2) Update - 이미지를 변경하지 않는 경우,
      //4-3) Upload - 게시글을 처음 upload하는 경우,
      if (imgUrl) {
        //4-1)
        const formData = new FormData();
        const data = {
          ...values,
          date: typeof date === 'object' ? date.format('YYYY-MM-DD') : date,
          tags: tags,
          user_id: user_id,
          num: state.num,
          img: imgUrl,
          imgServer: imgServer,
        };
        for (var v in data) formData.append(`${v}`, data[v]);
        await axios
          .patch(
            `http://${process.env.REACT_APP_HOST}/window/posts-image`,
            formData
          )
          .then(() => success({ title: '게시글이 수정되었습니다!' }))
          .catch((err) => console.log(err));
      } else {
        //4-2)
        const data = {
          ...values,
          date: typeof date === 'object' ? date.format('YYYY-MM-DD') : date,
          tags: tags,
          user_id: user_id,
          num: state.num,
          img: imgServer,
        };
        await axios
          .patch(`http://${process.env.REACT_APP_HOST}/window/posts`, data)
          .then(() => success({ title: '게시글이 수정되었습니다!' }))
          .catch((err) => console.log(err));
      }
    } else {
      //4-3)
      const formData = new FormData();
      const data = {
        ...values,
        date: typeof date === 'object' ? date.format('YYYY-MM-DD') : date,
        tags: tags,
        user_id: user_id,
        img: imgUrl,
      };
      for (var v in data) formData.append(`${v}`, data[v]);
      imgUrl
        ? await axios
            .post(`http://${process.env.REACT_APP_HOST}/window/posts`, formData)
            .then((res) =>
              navigate('/window/postedit', {
                replace: true,
                state: { num: res.data.num },
              })
            )
            .catch((err) => console.log(err))
        : warning({
            title: '필수 정보를 모두 입력해주세요.',
            content: 'country, city 입력 및 image 업로드 필수!',
          });
    }
  };
  // console.log('date', date);

  if (date === '') return true;
  return (
    <>
      <DrawerToggler />
      <FullBox>
        <p className="windowUploadTitle">Upload</p>
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
            <Form form={form} name="uploadPost" onFinish={onFinish}>
              <div className="detailBox">
                <Divider orientation="left">Where</Divider>
                <div>
                  {/* country Selecter */}
                  <CountrySelect>
                    <Space wrap>
                      <Form.Item
                        name="country"
                        rules={[{ required: true, message: '' }]}
                      >
                        <Select
                          placeholder="Country"
                          style={{ width: 120 }}
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
                            {
                              value: 'United States of America',
                              label: 'USA',
                            },
                          ]}
                        />
                      </Form.Item>
                    </Space>
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
                </div>

                {/* 이미지 datePicker */}
                <Divider orientation="left">Date</Divider>
                {date === 'default' ? (
                  <DatePicker
                    defaultValue={dayjs(today)}
                    format={'YYYY-MM-DD'}
                    placeholder="YYYY-MM-DD"
                    onChange={dateChange}
                    disabledDate={disabledDate}
                  />
                ) : (
                  <DatePicker
                    defaultValue={dayjs(date)}
                    format={'YYYY-MM-DD'}
                    placeholder="YYYY-MM-DD"
                    onChange={dateChange}
                    disabledDate={disabledDate}
                  />
                )}

                {/* Tags */}
                <Divider orientation="left">Tags</Divider>
                <div style={{ marginBottom: 20 }}>
                  {tags.length !== 0 ? (
                    <Space wrap>
                      <TagCss>
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
                          leave={{
                            opacity: 0,
                            width: 0,
                            scale: 0,
                            duration: 200,
                          }}
                          appear={false}
                        >
                          {tagChild}
                        </TweenOneGroup>
                      </TagCss>
                    </Space>
                  ) : (
                    true
                  )}
                  {/* inputVisible이 true면 input창 보임, false면 New tag icon보임
                  => new tag 클릭 시, input창으로 변경 */}
                  {inputVisible ? (
                    <Input
                      ref={inputRef}
                      type="text"
                      size="small"
                      style={{ width: 78 }}
                      value={inputValue}
                      onChange={InputValueChange}
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
      </FullBox>
    </>
  );
}
