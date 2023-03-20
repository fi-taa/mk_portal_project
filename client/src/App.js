import './App.css';
import Login from './components/Login/Login';
import { Routes,Route } from 'react-router-dom';
import Home from './components/HomePage/Home';
function App() {
  return (
    <div className="">
      {/* safdfasfas */}

    <Routes>
      <Route path='/Login' element={<Login/>}/>
      <Route path='/' element={<Home/>}/>

     
    </Routes>
      
    </div>
  );
}

export default App;
