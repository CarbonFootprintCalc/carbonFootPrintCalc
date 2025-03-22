// src/App.tsx
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import StationaryCombustion from "./pages/StationaryCombustion"; 
import Refrige from "./pages/RefrigerationAC";
import FireSuppression from "./pages/FireSuppression";
import PurchaseGas from "./pages/PurchaseGas";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/stationary-combustion" element={<StationaryCombustion />} />
      <Route path="/refrigeration-AC" element={<Refrige />} />
      <Route path="/fire-suppression" element={<FireSuppression />} />
      <Route path="/purchase-gas" element={<PurchaseGas />} />
    </Routes>
  );
}

export default App;
