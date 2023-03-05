import axios from 'axios';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { BsFillPencilFill, BsFillTrashFill, BsX } from 'react-icons/bs';
import { Modal } from 'antd';
import { useLocation, useNavigate } from 'react-router-dom';
// import queryString from 'query-string';
import GlobalStyle from '../../components/common/GlobalStyle';
import { useDispatch } from 'react-redux';
import { mypageclear } from '../../store/modules/mypage';

const { success } = Modal;

const FullImg = styled.div`
  height: 100vh;
  width: 100vw;
  background-image: url(${(props) => props.background_img});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`;

export default function Window_PostEdit() {
  const { state } = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  // console.log(queryString.parse(location.search).num);
  const [dataArr, setDataArr] = useState([]);
  const deleteSuccess = () => {
    success({
      title: '삭제가 완료되었습니다!',
      onOk() {
        dispatch(mypageclear());
        navigate('/mypage');
      },
    });
  };

  useEffect(() => {
    try {
      async function fetchData() {
        try {
          await axios
            .get('http://localhost:4000/window/postedit', {
              params: { num: state.num },
            })
            .then((res) => setDataArr(res.data));
          // console.log('데이터', dataArr);
        } catch (err) {
          console.log(err);
        }
      }
      fetchData();
    } catch (err) {
      console.log(err);
    }
  }, []);
  const { country, city, img, comment } = dataArr;
  // console.log(state.mypage);

  const postEditClick = () => {
    navigate('/window/upload', {
      replace: true,
      state: { num: state.num },
    });
  };

  const delPost = () => {
    axios
      .delete('http://localhost:4000/window/postDelete', {
        data: { delPost: dataArr },
      })
      .then(() => deleteSuccess());
  };

  return (
    <FullImg background_img={img}>
      <GlobalStyle />
      <div className="iconBox">
        <div
          onClick={() => {
            if (state.mypage) return navigate('/mypage');
            return navigate('/window');
          }}
        >
          <BsX className="icon" color="#fff" size="30" />
        </div>

        <div className="iconBoxChild">
          <BsFillPencilFill
            className="icon"
            color="#fff"
            size="20"
            onClick={postEditClick}
          />
          <div className="trashIcon">
            <BsFillTrashFill
              className="icon"
              color="#fff"
              size="20"
              onClick={delPost}
            />
          </div>
        </div>
      </div>

      <div className="infoBox">
        <span className="nickName">{dataArr['user.user_name']}</span>
        <span>
          {country}, {city}
        </span>
        <p className="comment">{comment}</p>
      </div>
    </FullImg>
  );
}
