import { Button, Modal } from 'antd';
import axios from 'axios';
import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import styled from 'styled-components';
import { mypageclear } from '../../store/modules/mypage';

const BtnCss = styled(Button)`
  margin-left: 10px;
  border: 1px solid #2c2c2a;
  color: #2c2c2a;
  font-family: 'YUniverse-B' !important;
  &:hover {
    background-color: #2c2c2a !important;
    color: #fff !important;
  }
`;

export default function DeleteUser() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userid = localStorage.getItem('userid');
  console.log(userid);
  //   const [checkPW, setCheckPW] = useState(false);

  const checkDelUser = () => {
    Modal.info({
      width: 600,
      title: '아름다운 사진들을 더 이상 볼 수 없어요',
      content: '정말 탈퇴하시겠습니까?',
      onOk() {
        delUserInfo(userid);
      },
    });
  };

  const delUserInfo = (userid) => {
    axios
      .delete('http://localhost:4000/user/delUser', {
        data: { email: userid },
      })
      .then((res) => {
        console.log(res);
        localStorage.clear();
        dispatch(mypageclear());
        navigate('/', { replace: true });
      });
  };

  return (
    <>
      {/* {checkPW || ( */}
      <BtnCss
        onClick={() => {
          checkDelUser(userid);
          //   setCheckPW(!checkPW);
        }}
      >
        회원 탈퇴
      </BtnCss>
      {/* )} */}
    </>
  );
}
