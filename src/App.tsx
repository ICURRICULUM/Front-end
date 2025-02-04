import { Suspense, useEffect } from 'react';
import TakeListCodesProvider from 'providers/takeListCodes';
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
import FindPasswordPage from '@pages/findPassword/findPassword';
import ResetPasswordPage from '@pages/resetPassword/resetPassword';
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
          {isLoggedIn && <TakeListCodesProvider />}

          <Routes>
            <Route element={<Layout />}>
              <Route path="/" element={<StartPage />} />
              <Route path="/join/agree" element={<SignUpPage />} />
              <Route path="/join/begin" element={<InfoInputPage />} />
              <Route path="/join/end" element={<CompletePage />} />
              <Route path="/reset/password" element={<FindPasswordPage />} />

              {isLoggedIn && (
                <>
                  <Route path="/requirement" element={<CheckRequirement />} />

                  <Route path="/entercourse" element={<EnterCoursePage />} />
                  <Route path="/update" element={<UpdateMyCoursePage />} />

                  <Route path="/mypage" element={<MyPage />} />
                  <Route path="/change/password" element={<ResetPasswordPage />} />
                </>
              )}
            </Route>

            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </BrowserRouter>
      </QueryClientProvider>
    </Suspense>
  );
}

export default App;
