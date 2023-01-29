import { Route, Routes } from 'react-router-dom';
import './App.css';
import Intro_FristPage from './pages/Intro_FirstPage';
import MyPage_Main from './pages/MyPage_Main';
import SignIn_SignUp from './pages/SignIn_SignUp';
import Universe_Main from './pages/Universe_Main';
import Window_Main from './pages/Window_Main/Window_Main';
import Window_Upload from './pages/Window_Upload/Window_Upload';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Intro_FristPage />} />
        <Route path="/signin_up" element={<SignIn_SignUp />} />
        <Route path="/universe" element={<Universe_Main />} />
        <Route path="/window" element={<Window_Main />} />
        <Route path="/window/upload" element={<Window_Upload />} />
        <Route path="/mypage" element={<MyPage_Main />} />
      </Routes>
    </div>
  );
}

export default App;
