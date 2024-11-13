import { Route, Routes, BrowserRouter } from 'react-router-dom';

import MyPage from '@pages/myPage/myPage';
import SignUpPage from '@pages/signUp/signUp';
import CompletePage from '@pages/signUp/complete';
import StartPage from '@pages/startPage/startPage';
import InfoInputPage from '@pages/signUp/infoInput';
import EnterCoursePage from '@pages/enterCourse/enterCourse';
import CheckRequirement from '@pages/checkRequirement/checkRequirement';

import Layout from '@layout/layout';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<StartPage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/infoinput" element={<InfoInputPage />} />
          <Route path="/complete" element={<CompletePage />} />
          <Route path="/entercourse" element={<EnterCoursePage />} />
          <Route path="/mypage" element={<MyPage />} />
          <Route path="/requirement" element={<CheckRequirement />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
