import { Routes, Route } from "react-router-dom";
import Card from "./components/Card";
import NewComponent from "./pages/NewComponent";
import EmployeeRecord from './pages/EmployeeRecord'
import EmployeeRecordProvider from "./EmployeeRecordList";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Card />} />
        <Route path="/new" element={<NewComponent />} />
        <Route path="/employee-record" element={<EmployeeRecord />} />
      </Routes>
    </div>
  );
}

export default App;
