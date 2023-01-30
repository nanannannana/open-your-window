import React, { useState } from 'react';
import Window_UploadEdit from './Window_UploadEdit';
import Window_UploadCheck from './Window_UploadCheck';

export default function Window_Upload() {
  const [view, setView] = useState({ change: true, num: 0 });
  // console.log(view);

  return (
    <>
      {view.change ? (
        <Window_UploadEdit setView={setView} />
      ) : (
        <Window_UploadCheck setView={setView} num={view.num} />
      )}
    </>
  );
}
