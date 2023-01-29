import React, { useState } from 'react';
import Window_UploadEdit from './Window_UploadEdit';
import Window_UploadCheck from './Window_UploadCheck';

export default function Window_Upload() {
  const [change, setChange] = useState({
    edit: true,
    country: '',
    city: '',
    date: '',
    tags: [],
    content: '',
    img: '',
  });
  console.log(change);

  return (
    <>
      {change.edit ? (
        <Window_UploadEdit setChange={setChange} data={change} />
      ) : (
        <Window_UploadCheck />
      )}
    </>
  );
}
