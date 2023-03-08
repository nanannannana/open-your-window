import React from 'react';
import { Input } from 'antd';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { tagchange, totalnumchange } from '../../store/modules/window';
import { useNavigate } from 'react-router';
const { Search } = Input;

export default function SearchBar() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const onSearch = async (value) => {
    await axios
      .get(`http://${process.env.REACT_APP_HOST}/window/searchTag`, {
        params: {
          tag: value,
        },
      })
      .then((res) => {
        dispatch(tagchange(res.data.posts));
        dispatch(totalnumchange(res.data.totalNum));
        navigate(`/window/tag?search=${value}`, { replace: true });
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <Search
        placeholder="검색어를 입력하세요."
        onSearch={onSearch}
        style={{ width: 200 }}
      />
    </div>
  );
}
