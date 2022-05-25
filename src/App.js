import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { GuardedRoute } from './GuardedRoute';
import { useLocation } from 'react-router-dom'
import Homepage from './pages/Homepage/Homepage';
import Mainpage from './pages/Mainpage/Mainpage';
import Network from './pages/Network/Network';
import MessagingPage from './pages/MessagingPage/MessagingPage';
import Jobs from './pages/Jobs/Jobs';
import './App.css';
import Navigation from "../src/components/Navigation/Navigation";
import UserProfile from './components/UserProfile/UserProfile/UserProfile';
import Messaging from "./components/MessagingHomePage/Messaging";
import ForgotPassword from './components/ForgotPassword/ForgotPassword';
import ChangePassword from './components/ChangePassword/ChangePassword';


function App() {
   
    const [messagesOpen, setMessagesOpen] = useState(false);

    const location = useLocation();

    return (
        <div className="App" id="appContainer">
            {location.pathname !== '/' && location.pathname !== '/forgot-password'  ? <Navigation /> : null}
            <Routes>         
                    <Route path='/'          element={<Mainpage />} />
                    <Route path='/home'      element={<Homepage />} />
                    <Route path='/network'   element={<GuardedRoute Component = {Network} Roles="['COMPANY', 'USER']"/>} />
                    <Route path='/messaging' element={<GuardedRoute Component = {MessagingPage} Roles="['COMPANY', 'USER']"/>} />
                    <Route path='/jobs'      element={<Jobs />} />
                    <Route path='/in'        element={<GuardedRoute Component = {UserProfile} Roles="['COMPANY', 'USER', 'ADMIN']"/>} />
                    <Route path='/forgot-password' element={<GuardedRoute Component = {ForgotPassword} Roles="['COMPANY', 'USER', 'ADMIN']"/>} />
            </Routes>
            {location.pathname !== '/' ?
                <div className={`messaging transform ${messagesOpen ? "transformActive" : ""}`}>
                    <Messaging clickHandler={() => setMessagesOpen(!messagesOpen)}
                        isMessagesOpen={messagesOpen} page="app">
                    </Messaging>
                </div> : null
            }
        </div>
    );
}

export default App;
