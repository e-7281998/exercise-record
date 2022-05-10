import InfoPage from "./pages/InfoPage";
import ListPage from "./pages/ListPage";
import { Routes, Route, useNavigate } from 'react-router-dom';
import WritePage from "./pages/WritePage";
import { useEffect } from "react";

const App = () => {

  //정보가 있으면 /list로 이동
  const navigate = useNavigate();
  useEffect(() => {
    if (localStorage.getItem("name") !== null)
      navigate('/list');
    return;
  }, []);

  return (
    <Routes>
      <Route element={<InfoPage />} path="/" />
      <Route element={<ListPage />} path="/list" />
      <Route element={<WritePage />} path="/write" />
    </Routes>
  );
}

export default App;
