// src/App.tsx
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import StationaryCombustion from "./pages/StationaryCombustion"; // 新页面

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/stationary-combustion" element={<StationaryCombustion />} />
    </Routes>
  );
}

export default App;
