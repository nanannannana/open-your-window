import { Button, Modal } from 'antd';
import axios from 'axios';
import React, { useState } from 'react';
import { ExclamationCircleFilled } from '@ant-design/icons';
import { useNavigate } from 'react-router';

export default function DeleteUser() {
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
        navigate('/', { replace: true });
      });
  };

  return (
    <>
      {/* {checkPW || ( */}
      <Button
        onClick={() => {
          checkDelUser(userid);
          //   setCheckPW(!checkPW);
        }}
      >
        회원 탈퇴
      </Button>
      {/* )} */}
    </>
  );
}
