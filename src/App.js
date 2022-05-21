import { useState } from 'react';
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
import Messaging from "./components/MessagingHomePage/Messaging";
import ForgotPassword from './components/ForgotPassword/ForgotPassword';

function App() {
   
    const [messagesOpen, setMessagesOpen] = useState(false);

    const location = useLocation();

    return (
        <div className="App" id="appContainer">
            {location.pathname !== '/' && location.pathname !== '/forgot-password'  ? <Navigation /> : null}
            <Routes>
                <Route path='/' element={<Mainpage />} />
                <Route path='/home' element={<Homepage />} />
                <Route path='/network' element={<Network />} />
                <Route path='/messaging' element={<MessagingPage />} />
                <Route path='/jobs' element={<Jobs />} />
                <Route path='/in' element={<UserProfile />} />
                <Route path='/forgot-password' element={< ForgotPassword/>} />
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
