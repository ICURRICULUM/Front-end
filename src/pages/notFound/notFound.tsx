import { useNavigate } from 'react-router-dom';

const NotFoundPage = () => {
  const navigate = useNavigate();

  const toHome = () => {
    navigate('/');
  };

  return (
    <div>
      <p>잘못된 주소 접근입니다!</p>
      <button onClick={toHome}>홈으로</button>
    </div>
  );
};

export default NotFoundPage;
