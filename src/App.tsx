import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from './ui/home/Home';
import './App.css';
import PostBoardScreen from './ui/home/home_main/post_board/PostBoardScreen';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/post-board' element={<PostBoardScreen />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App;
