import { Routes, Route } from "react-router-dom";
import Card from "./components/Card";
import EmployeeRecord from "./pages/EmployeeRecord";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/form" element={<Card />} />
        <Route path="/" element={<EmployeeRecord />} />
      </Routes>
    </div>
  );
}

export default App;
