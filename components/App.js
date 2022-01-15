import React from 'react';
import LogIn from './LogIn';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Background from './Background';
import MainPage from './MainPage';

function App() {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route exact path={"/"} element={<div><Background /> <LogIn /></div>} />
                    <Route exact path={"/meetup"} element={<MainPage />} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default App;