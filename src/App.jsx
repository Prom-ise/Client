import { Routes, Route, Navigate } from "react-router-dom";
import Mainpage from "./component/Mainpage";
import "./App.css";

function App() {
  return (
    <>
      <Routes>
        <Route path="/Mainpage" element={<Mainpage />} />
        <Route path="/" element={<Navigate to="/Mainpage" />} />
      </Routes>
    </>
  );
}

export default App;
