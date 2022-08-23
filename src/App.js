import { BrowserRouter, Routes, Route } from "react-router-dom";
import list from "./routes/list";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        {list.map((route, index) => <Route key={index} path={route.path} element={route.element} />)}
      </Routes>
    </BrowserRouter>
  );
}
export default App;