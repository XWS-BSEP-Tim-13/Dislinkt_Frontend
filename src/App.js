//import { useEffect } from 'react';
//import axios from 'axios';
import { Route, Routes } from 'react-router-dom';
import { useLocation } from 'react-router-dom'
import Homepage from './pages/Homepage/Homepage';
import Mainpage from './pages/Mainpage/Mainpage';
import Network from './pages/Network/Network';
import './App.css';
import Navigation from "../src/components/Navigation/Navigation";

function App() {

  /*useEffect(() => {
    axios.get('http://localhost:8081/')
    .then((res) => {
        console.log(res.data)
    })
  }, []);*/
  const location = useLocation();

  return (
    <div className="App">
          { location.pathname !== '/' ? <Navigation /> : null }
        <Routes>
            <Route path='/' element={<Mainpage />} />
            <Route path='/home' element={<Homepage />} />
            <Route path='/network' element={<Network />} />
        </Routes>
    </div>
  );
}

export default App;
