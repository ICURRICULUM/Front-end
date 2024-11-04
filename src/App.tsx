import { BrowserRouter, Route, Routes } from "react-router-dom";
import StartPage from "@pages/startPage/startPage";
import Layout from "@layout/layout";

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
