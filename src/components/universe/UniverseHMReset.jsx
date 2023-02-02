// import { Button, Modal, Space } from 'antd';
// import React, { createContext } from 'react';

// const ReachableContext = createContext(null);
// const UnreachableContext = createContext(null);
// const config = {
//   title: 'DO you want to play HANGMAN again?',
//   context: (
//     <>
//       <ReachableContext.Consumer>
//         {(name) => `Reachable:${name}!`}
//       </ReachableContext.Consumer>
//       <br />
//       <UnreachableContext.Consumer>
//         {(name) => `Uneachable:${name}!`}
//       </UnreachableContext.Consumer>
//     </>
//   ),
// };

// export default function UniverseHMReset() {
//   const [modal, contextHolder] = Modal.useModal();
//   return (
//     <ReachableContext.Provider value="Replay">
//       <Space>
//         <Button
//           onClick={() => {
//             modal.confirm(config);
//           }}
//         >
//           Confirm
//         </Button>
//       </Space>
//       {contextHolder}
//     </ReachableContext.Provider>
//   );
// }
import { Modal } from 'antd';
import React from 'react';
import { useNavigate } from 'react-router';

export default function UniverseHMReset(props) {
  const navigate = useNavigate();
  const { count, answer } = props;
  return (
    <Modal
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
      <p style={{ fontSize: 'xx-large', fontWeight: 'bold' }}>
        {count < 0 ? `The answer was '${answer[0]}'` : 'You are a good player!'}
      </p>
      <p style={{ fontSize: 'xx-large', fontWeight: 'lighter' }}>
        Do you want to play another HANGMAN ?{' '}
      </p>
    </Modal>
  );
}
