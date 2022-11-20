import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import ScrollToTop from '../components/ScrollToTop';
import CheckOut from '../pages/user/checkout/CheckOut';
import Profile from '../pages/user/profile/Profile';

export default function Router() {
    return (
        <BrowserRouter>
            <ScrollToTop />
            <Routes>
                <Route path='/'>
                    <Route path='/checkout' element={<CheckOut/>}/>
                    <Route path='/profile' element={<Profile/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    );
}