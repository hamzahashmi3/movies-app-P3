import React, { lazy, Suspense } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Route, Navigate, Routes } from "react-router-dom";

const Home = lazy(() => import("./pages/Home"))


const App = (props) => {


    return (
        <Suspense fallback={<>loading...</>}>
            <Routes>
                <Route path="/" exact element={<Home />} />
                <Route path="*" element={<Navigate to="/" />} />
            </Routes>
        </Suspense>
    )
}


export default App
