import './App.css';
import Login from './pages/Login/Login';
import { Routes,Route } from 'react-router-dom';
import Home from './pages/HomePage/Home';
function App() {
  return (
    <div className="">
      {/* safdfasfas */}

    <Routes>
      <Route path = "pages/*" element={<Home/>}/>
      <Route path='/' element={<Home/>}/>
      <Route path='/Login' element={<Login/>}/>
    </Routes>
    </div>
  );
}

export default App;
