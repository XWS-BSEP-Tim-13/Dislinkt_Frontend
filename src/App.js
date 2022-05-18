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


function App() {
   
    const [messagesOpen, setMessagesOpen] = useState(false);

    const location = useLocation();

    return (
        <div className="App">
            {location.pathname !== '/' ? <Navigation /> : null}
            <Routes>
                <Route path='/' element={<Mainpage />} />
                <Route path='/home' element={<Homepage />} />
                <Route path='/network' element={<Network />} />
                <Route path='/messaging' element={<MessagingPage />} />
                <Route path='/jobs' element={<Jobs />} />
                <Route path='/in' element={<UserProfile />} />
            </Routes>

            <div className={`messaging transform ${messagesOpen ? "transformActive" : ""}`}>
                <Messaging clickHandler={() => setMessagesOpen(!messagesOpen)}
                    isMessagesOpen={messagesOpen} page="app">
                </Messaging>
            </div>
        </div>
    );
}

export default App;
