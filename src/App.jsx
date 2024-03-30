import { Routes, Route } from "react-router-dom";
import Game from './components/Game/Game'
import Home from "./components/Home/Home";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/play" element={<Game />} />
      </Routes>
    </>
  );
}

export default App;
