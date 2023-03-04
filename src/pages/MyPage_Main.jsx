import axios from 'axios';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import DrawerToggler from '../components/common/DrawerToggler';
import MyPost from '../components/mypage/MyPost';
import { useDispatch, useSelector } from 'react-redux';
import { changeReset, update, goInfo } from '../store/modules/mypage';
import { pagereset } from '../store/modules/window';
import { BsFillPencilFill, BsBrightnessHighFill } from 'react-icons/bs';
import MyInfo from '../components/mypage/MyInfo';
import BarLoader from 'react-spinners/BarLoader';

const LoadingCss = styled.div`
  height: 100vh;
  width: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const OutBox = styled.div`
  padding: 170px 300px;
  height: 100vh;
  @media (max-width: 1440px) {
    padding: 50px 200px 0 200px;
  }
`;
const Username = styled.div`
  font-size: 3em;
  margin: 0 0 10px 0;
  @media (max-width: 1440px) {
    font-size: 2.5em;
    margin: 0 0 5px 0;
  }
`;
const UserEmail = styled.div`
  font-size: 1em;
  display: inline;
  margin-right: 5px;
`;
const PostIcon = styled(BsBrightnessHighFill)`
  margin-right: 5px;
`;
const EmailandIconBox = styled.div`
  text-align: center;
`;

export default function MyPage_Main() {
  const dispatch = useDispatch();
  const user_id = localStorage.getItem('userid');
  const mypost = useSelector((state) => state.mypage.mypost);
  const change = useSelector((state) => state.mypage.change);
  const [loading, setLoading] = useState(true);
  console.log('mypost', mypost);

  useEffect(() => {
    try {
      // setLoading(true);
      async function fectchData() {
        return await axios
          .post('http://localhost:4000/mypage/userinfofind', {
            user_id: user_id,
          })
          .then((res) => dispatch(update(res.data)))
          .catch((err) => console.log(err));
      }
      fectchData();
      dispatch(pagereset());
      dispatch(changeReset());
    } catch (err) {
      console.log(err);
    }
    setLoading(false);
  }, []);

  if (loading)
    return (
      <LoadingCss>
        <BarLoader color="#C2CCA8" loading speedMultiplier={1} />
      </LoadingCss>
    );

  return (
    <>
      {mypost.length !== 0 ? (
        <>
          <DrawerToggler />
          <OutBox>
            <Username>{mypost[0]['user.user_name']}</Username>
            <EmailandIconBox>
              <UserEmail>{user_id}</UserEmail>
              <PostIcon size="17" onClick={() => dispatch(changeReset())} />
              <BsFillPencilFill size="15" onClick={() => dispatch(goInfo(2))} />
            </EmailandIconBox>
            {change === 1 ? <MyPost /> : <MyInfo />}
          </OutBox>
        </>
      ) : (
        true
      )}
    </>
  );
}
