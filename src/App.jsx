import { Routes, Route } from "react-router-dom"
import NumberPlateDetection from "./pages/NumberPlateDetection";
import API from "./pages/API";


function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<API />} />
        <Route path="/numberplate" element={<NumberPlateDetection />} />
      </Routes>
    </div>
  );
}

export default App;
