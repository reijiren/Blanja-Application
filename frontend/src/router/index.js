import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import ScrollToTop from '../components/ScrollToTop';

export default function Router() {
    return (
        <BrowserRouter>
            <ScrollToTop />
            <Routes>
                <Route path='/'>
                    
                </Route>
            </Routes>
        </BrowserRouter>
    );
}