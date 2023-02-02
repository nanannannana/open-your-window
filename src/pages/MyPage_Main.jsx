import axios from 'axios';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import DrawerToggler from '../components/common/DrawerToggler';

const OutBox = styled.div`
  padding: 200px 200px;
  height: 100vh;
`;
const Username = styled.div`
  font-size: 3em;
  margin: 0 0 10px 0;
`;
const UserEmail = styled.div`
  font-size: 1em;
`;

export default function MyPage_Main() {
  const [mypost, setMypost] = useState([]);
  const user_id = 'hello12';
  useEffect(() => {
    async function fectchData() {
      return await axios
        .post('http://localhost:4000/mypage/userinfofind', { user_id: user_id })
        .then((res) => console.log(res.data))
        .catch((err) => console.log(err));
    }
    fectchData();
  }, []);

  return (
    <>
      <DrawerToggler />
      <OutBox>
        <Username>Jeong SeSAC</Username>
        <UserEmail>jsesac@gmail.com</UserEmail>
      </OutBox>
    </>
  );
}
