import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Register from './components/Register';
import Login from './components/Login';
import FriendList from './components/FriendList';
import ChatRoom from './components/ChatRoom';
import NavBar from './components/NavBar';

const App = () => {
    const [authenticated, setAuthenticated] = useState(false);

    return (
        <Router>
            <NavBar />
            <Routes>
                <Route path="/register" element={<Register />} />
                <Route path="/login" element={<Login setAuthenticated={setAuthenticated} />} />
                {authenticated && (
                    <>
                        <Route path="/friends" element={<FriendList userId={1} />} /> {/* Replace with actual user ID */}
                        <Route path="/chat" element={<ChatRoom />} />
                    </>
                )}
            </Routes>
        </Router>
    );
};

export default App;