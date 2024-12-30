import { Suspense, useEffect } from 'react';
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
import UpdateMyCoursePage from '@pages/updateMyCourse/updateMyCourse';
import CheckRequirement from '@pages/checkRequirement/checkRequirement';

import { useLoggedInStore } from '@zustand/user/store';

import Layout from '@layout/layout';

const queryClient = new QueryClient();

function App() {
  const { isLoggedIn, setIsLoggedIn } = useLoggedInStore();

  useEffect(() => {
    if (localStorage.getItem('accessToken')) {
      setIsLoggedIn(true);
    }
  }, []);

  return (
    <Suspense fallback={<div>조회중</div>}>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Routes>
            <Route element={<Layout />}>
              <Route path="/" element={<StartPage />} />
              <Route path="/join/agree" element={<SignUpPage />} />
              <Route path="/join/begin" element={<InfoInputPage />} />
              <Route path="/join/end" element={<CompletePage />} />

              {isLoggedIn && (
                <>
                  <Route path="/entercourse" element={<EnterCoursePage />} />
                  <Route path="/update" element={<UpdateMyCoursePage />} />
                  <Route path="/mypage" element={<MyPage />} />
                  <Route path="/requirement" element={<CheckRequirement />} />
                </>
              )}
            </Route>

            <Route>
              <Route path="*" element={<NotFoundPage />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </QueryClientProvider>
    </Suspense>
  );
}

export default App;
