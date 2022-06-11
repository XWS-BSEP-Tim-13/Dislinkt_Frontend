import {useState } from 'react';
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
import { useSelector } from 'react-redux';
import CreateJobOffer from './components/CreateJobOffer/CreateJobOffer';
import JobApiToken from './components/JobOffer/JobApiTokenSent/JobApiToken';
import QRCode from './components/UserProfile/QRCode/QRCode';
function App() {
   
    const [messagesOpen, setMessagesOpen] = useState(false);
    const auth = useSelector(state => state.loginReducer);
    const location = useLocation();

      
    return (
        <div className="App" id="appContainer">
            {location.pathname !== '/' && location.pathname !== '/forgot-password' && !location.pathname.includes("/change-password/") ? <Navigation /> : null}
            <Routes>         
                    <Route path='/'          element={<Mainpage />} />
                    <Route path='/home'      element={<Homepage />} />
                    <Route path='/network'   element={<GuardedRoute Component = {Network} Roles="['COMPANY', 'USER']"/>} />
                    <Route path='/messaging' element={<GuardedRoute Component = {MessagingPage} Roles="['COMPANY', 'USER']"/>} />
                    <Route path='/jobs'      element={<Jobs />} />
                    <Route path='/in/:username'        element={<GuardedRoute Component = {UserProfile} Roles="['COMPANY', 'USER', 'ADMIN']"/>} />
                    <Route path='/jobs/create-job-offer'        element={<GuardedRoute Component = {CreateJobOffer} Roles="['COMPANY', 'USER', 'ADMIN']"/>} />
                    <Route path='/forgot-password' element={<ForgotPassword/>} />
                    <Route path='/change-password/:token'  exact  element= {<ChangePassword /> } />
                    <Route path='/jobs/token'  element= {<JobApiToken/> } />
                    <Route path='qr-code' element= {<QRCode/> }/>
            </Routes>
            {location.pathname !== '/'  && location.pathname !== '/forgot-password' && !location.pathname.includes("/change-password/")?
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
