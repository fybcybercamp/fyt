import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Register from './components/Register/';
import Store from './components/Store/Store';
import Login from './components/Login/';
import Welcome from './components/Welcome/';

function App() {
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/fyt/register" element={<Register />} />
          
        <Route path="/fyt/store" element={<Store />} />

        <Route path="/fyt/login" element={<Login />} />
          
        <Route path="/fyt/" element={<Welcome />} />
          
      </Routes>
   </BrowserRouter>
  );


}

export default App;
