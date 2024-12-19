import { Route, Routes, BrowserRouter } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import './App.css';

import MyPage from '@pages/myPage/myPage';
import SignUpPage from '@pages/signUp/signUp';
import CompletePage from '@pages/signUp/complete';
import StartPage from '@pages/startPage/startPage';
import InfoInputPage from '@pages/signUp/infoInput';
import NotFoundPage from '@pages/notFound/notFound';
import EnterCoursePage from '@pages/enterCourse/enterCourse';
import CheckRequirement from '@pages/checkRequirement/checkRequirement';

import Layout from '@layout/layout';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<StartPage />} />
            <Route path="/join/agree" element={<SignUpPage />} />
            <Route path="/join/begin" element={<InfoInputPage />} />
            <Route path="/join/end" element={<CompletePage />} />
            <Route path="/entercourse" element={<EnterCoursePage />} />
            <Route path="/mypage" element={<MyPage />} />
            <Route path="/requirement" element={<CheckRequirement />} />
          </Route>

          <Route>
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
