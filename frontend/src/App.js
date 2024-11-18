import './App.css';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import EmployeeManagementApp from './Components/EmployeeManagementApp';
import EmployeeDetails from './Components/EmployeeDetails';
import AdminLogin from './pages/AdminLogin';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={ <AdminLogin/> }/>
          <Route path="/all" element={<Navigate to="employee/all" />} />
          <Route path="/employee" element={<EmployeeManagementApp />} />
          <Route path="/employee/:id" element={<EmployeeDetails />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
