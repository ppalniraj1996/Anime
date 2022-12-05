import { Route, Routes } from "react-router-dom";
import "./App.css";
import Main from "./Pages/Main/Main";
import Home from "./Pages/Home/Home";
import Favlist from "./Pages/Favlist";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="anime/:mail_id" element={<Main />} />
        <Route path="/favlist" element={<Favlist />} />
      </Routes>
    </div>
  );
}

export default App;
