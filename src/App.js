import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Register from './components/Register/Register';
import Store from './components/Store/Store';
import Welcome from './components/Welcome/Welcome';

function App() {
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/register" element={<Register />} />
          
        <Route path="/store" element={<Store />} />
          
        <Route path="/" element={<Welcome />} />
          
      </Routes>
   </BrowserRouter>
  );


}

export default App;
