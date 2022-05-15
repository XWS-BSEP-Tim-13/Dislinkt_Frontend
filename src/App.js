//import { useEffect } from 'react';
//import axios from 'axios';
import { Route, Routes } from 'react-router-dom';
import { useLocation } from 'react-router-dom'
import Homepage from './pages/Homepage/Homepage';
import Mainpage from './pages/Mainpage/Mainpage';
import Network from './pages/Network/Network';
import MessagingPage from './pages/MessagingPage/MessagingPage';
import Jobs from './pages/Jobs/Jobs';
import './App.css';
import Navigation from "../src/components/Navigation/Navigation";
import UserProfile from './components/UserProfile/UserProfile/UserProfile';
import { isCompositeComponent } from 'react-dom/test-utils';


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
            <Route path='/messaging' element={<MessagingPage />} />
            <Route path='/jobs' element={<Jobs />} />
            <Route path='/in' element={<UserProfile />} />
        </Routes>
    </div>
  );
}

export default App;
