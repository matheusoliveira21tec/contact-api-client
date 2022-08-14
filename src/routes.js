import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './screens/home';
import New from  './screens/new';
import Edit from  './screens/edit';
import List from  './screens/list';
const Rotas = () => (
    <BrowserRouter>
        <Routes>
            <Route exact path='/' element={<Home />} />
            <Route exact path='/new' element={<New />} />
            <Route exact path='/edit/:id' element={<Edit />} />
            <Route exact path='/list' element={<List/>} />
        </Routes>
    </BrowserRouter>
);

export default Rotas;