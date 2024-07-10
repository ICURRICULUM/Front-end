import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./layout/layout";
import StartPage from "./pages/startPage/startPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<StartPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
