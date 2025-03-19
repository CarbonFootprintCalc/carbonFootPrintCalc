// src/App.tsx
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import StationaryCombustion from "./pages/StationaryCombustion"; 
import Refrige from "./pages/RefrigerationAC";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/stationary-combustion" element={<StationaryCombustion />} />
      <Route path="/refrigeration-AC" element={<Refrige />} />
    </Routes>
  );
}

export default App;
