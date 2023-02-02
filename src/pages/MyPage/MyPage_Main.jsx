import React, { useState } from 'react';
import MyPage from '../../components/mypage/MyPage';
import './MyPage_Main.css';

export default function MyPage_Main() {
  const [isLogin, setIsLogin] = useState(true);
  return (
    <div className="mypageContainer">
      {isLogin && <MyPage />}
      {/* {isLogin || <MyPage/>} */}
    </div>
  );
}
