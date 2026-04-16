import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import BreedDetail from "./pages/BreedDetail";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/breed/:id" element={<BreedDetail />} />
      </Routes>
    </Router>
  );
}