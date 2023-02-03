import axios from 'axios';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { BsFillPencilFill, BsFillTrashFill, BsX } from 'react-icons/bs';
import { useLocation, useNavigate } from 'react-router-dom';
import queryString from 'query-string';
import GlobalStyle from '../../components/common/GlobalStyle';

const LoadingCss = styled.div`
  height: 100vh;
  weight: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

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
  // console.log(queryString.parse(location.search).num);
  const [dataArr, setDataArr] = useState([]);
  const [loading, setLoading] = useState(null);

  useEffect(() => {
    try {
      setLoading(true);
      async function fetchData() {
        try {
          await axios
            .get('http://localhost:4000/window/postedit', {
              params: { num: state.num },
            })
            .then((res) => setDataArr(res.data.result));
          // console.log('데이터', dataArr);
        } catch (err) {
          console.log(err);
        }
      }
      fetchData();
    } catch (err) {
      console.log(err);
    }
    setLoading(false);
  }, []);
  const { country, city, img, comment } = dataArr;
  const navigate = useNavigate();
  console.log(state.mypage);

  if (loading)
    return (
      <LoadingCss>
        <BarLoader color="#C2CCA8" loading speedMultiplier={1} />
      </LoadingCss>
    );

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
          <BsFillPencilFill className="icon" color="#fff" size="20" />
          <div className="trashIcon">
            <BsFillTrashFill className="icon" color="#fff" size="20" />
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
