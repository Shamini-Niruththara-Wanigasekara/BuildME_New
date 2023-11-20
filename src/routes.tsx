import React from 'react';
import { Route, Routes } from "react-router-dom";
// @ts-ignore
import HomePage from "./Pages/Home/home.tsx";

 const RootRouter =()=>{

    return(
        <Routes>
            <Route
            path='/'
            element={<HomePage/>}
            />
            <Route
            path='/category'
            element={<h1>CategoryPage</h1>}
            />
            <Route
            path='/request'
            element={<h1>RequestPage</h1>}
            />
            <Route
            path='/planupload'
            element={<h1>PlanuploadPage</h1>}
            />
            <Route
            path='/signupBuilder'
            element={<h1>SignupBuilder</h1>}
            />
            <Route
            path='/signupClient'
            element={<h1>SignupClient</h1>}
            />
            <Route
            path='/login'
            element={<h1>LoginPage</h1>}
            />
            <Route
            path='/about'
            element={<h1>AboutUs</h1>}
            />
            <Route
            path='/contact'
            element={<h1>ContactUs</h1>}
            />
        </Routes>
    );
 }

 export default RootRouter;