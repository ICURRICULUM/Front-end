import { BrowserRouter, Route, Routes } from "react-router-dom";
import StartPage from "./pages/startPage/startPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<StartPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
