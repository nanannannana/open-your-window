import React, { useEffect } from 'react';
import axios from 'axios';
import { Buffer } from 'buffer';
import { useNavigate } from 'react-router';
import { useDispatch } from 'react-redux';
import { setUser } from '../../store/modules/users';

const KakaoRedirectHandler = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    let params = new URL(document.location.toString()).searchParams;
    let code = params.get('code'); // 인가코드 받는 부분
    let grant_type = 'authorization_code';
    console.log('params :', params);
    console.log('code :', code);

    axios
      .post(
        `https://kauth.kakao.com/oauth/token?grant_type=${grant_type}&client_id=${process.env.REACT_APP_REST_API_KEY}&redirect_uri=${process.env.REACT_APP_REDIRECT_URI}&code=${code}`,
        {
          headers: {
            'Content-type': 'application/x-www-form-urlencoded;charset=utf-8',
          },
        }
      )
      .then(async (res) => {
        var base64Payload = res.data.id_token.split('.')[1]; //value 0 -> header, 1 -> payload, 2 -> VERIFY SIGNATURE
        var payload = Buffer.from(base64Payload, 'base64');
        var result = JSON.parse(payload.toString());
        console.log(result);

        // const user_info = await axios.get(`https://kapi.kakao.com/v2/user/me`, {
        //   headers: {
        //     'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8',
        //     Authorization: `Bearer ${res.data.access_token}`,
        //   },
        // });
        // console.log('user_info', user_info);
        await axios
          .post('http://localhost:4000/user/checkEmail', {
            email: result.email,
          })
          .then(async (res) => {
            console.log('kakao :', res.data);
            if (res.data) {
              await axios
                .post('http://localhost:4000/user/signUp', {
                  email: result.email,
                  pw: 'kakao',
                  nickname: result.nickname,
                  phone: 'KakaoUser',
                })
                .then((res) => {
                  console.log(res);
                  navigate('/', { replace: true });
                });
            }

            localStorage.setItem('userid', `${result.email}`);
            localStorage.setItem('isKakao', true);
            dispatch(setUser({ userid: `${result.email}` }));
            navigate('/', { replace: true });
          });
      });
  }, []);

  return <div></div>;
};

export default KakaoRedirectHandler;
