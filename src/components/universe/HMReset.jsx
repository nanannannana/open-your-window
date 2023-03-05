import { Modal } from 'antd';
import React from 'react';
// import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';

export default function HMReset(props) {
  const navigate = useNavigate();
  // const dispatch = useDispatch();
  // const { idx, answer, hint } = useSelector((state) => state.hmWords);
  const { count, answer } = props;

  return (
    <Modal
      bodyStyle={{ fontFamily: 'YUniverse-B', fontWeight: 'lighter' }}
      width={600}
      title={count < 0 ? 'You LOSE !' : 'You WIN !'}
      open="true"
      onOk={() => {
        location.href = '/universe/hangman';
        // navigate('/universe/hangman', { replace: true });
      }}
      onCancel={() => {
        // location.href = '/universe';
        navigate('/universe', { replace: true });
      }}
    >
      <span style={{ fontSize: 'x-large', fontWeight: 'bold' }}>
        {count < 0 ? `The answer was '${answer[0]}'` : 'You did a GREAT JOB !'}
      </span>
      <br />
      <span style={{ fontSize: 'x-large', fontWeight: 'lighter' }}>
        Do you want to play another HANGMAN ?{' '}
      </span>
    </Modal>
  );
}
