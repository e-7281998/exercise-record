import InfoPage from "./pages/InfoPage";
import ListPage from "./pages/ListPage";
import { Routes, Route } from 'react-router-dom';
import WritePage from "./pages/WritePage";

const App = () => {
  return (
    <Routes>
      <Route element={<InfoPage />} path="/" />
      <Route element={<ListPage />} path="/list" />
      <Route element={<WritePage />} path="/write" />
    </Routes>
  );
}

export default App;
