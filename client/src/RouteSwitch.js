import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App'
import CreateProject from './components/CreateProject';

const RouteSwitch = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path = '/' element = {<App />}/>
                <Route path = '/resume' element = {<App />}/>
                <Route path = '/portfolio' element = {<App />}/>
                <Route path = '/blog' element = {<App />}/>
                <Route path = '/create-project' element = {<CreateProject/>}/>
                <Route path = '/create-post' element = {<App />}/>
            </Routes>
        </BrowserRouter>
    )
}

export default RouteSwitch;