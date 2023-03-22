import './App.css';
import Login from './components/Login/Login';
import { Routes,Route } from 'react-router-dom';
import Home from './components/HomePage/Home';
function App() {
  return (
    <div className="">
      {/* safdfasfas */}

    <Routes>
    <Route path='/' element={<Home/>}/>
      <Route path='/Login' element={<Login/>}/>


     
    </Routes>
      
    </div>
  );
}

export default App;
