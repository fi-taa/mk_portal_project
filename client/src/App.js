import './App.css';
import Login from './pages/Login/Login';
import { Routes,Route, Navigate } from 'react-router-dom';
import Home from './pages/HomePage/Home';
import { AuthContext } from "./context/authContext";
import { useContext } from "react";

function App() {
  const {userData} = useContext(AuthContext);
  return (
          <Routes>
            <Route exact path="/" element={userData? <Home/> : <Login/>}/>
            <Route path="/login" element={ userData? <Navigate to="/" replace={true} />: <Login/> }/>
            <Route path="pages/*" element={<Home/>}></Route>
          </Routes>
    
  );
}
export default App;
