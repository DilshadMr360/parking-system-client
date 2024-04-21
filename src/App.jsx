import { Routes, Route } from "react-router-dom"
import NumberPlateDetection from "./pages/NumberPlateDetection";
import API from "./pages/API";
import MainMenu from "./pages/MainMenu";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ParkingSlotDetection from "./pages/ParkingSlotDetection";


function App() {
  return (
    <div>
      <Routes>
      <Route path="/" element={<MainMenu />} />
        <Route path="/api" element={<API />} />
        <Route path="/numberplate" element={<NumberPlateDetection />} />
        <Route path="/parkingslot" element={<ParkingSlotDetection />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

      </Routes>
    </div>
  );
}

export default App;
