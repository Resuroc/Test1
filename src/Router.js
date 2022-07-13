import React from "react"

import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";

import Homepage from './Homepage.js';
import Banane from "./Banane.js";

export default function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Homepage/>}/>
                <Route path="/banane" element={<Banane/>}/>
            </Routes>
        </BrowserRouter>
    );
}