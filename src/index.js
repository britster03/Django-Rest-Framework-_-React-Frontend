import React from 'react';
import ReactDOM from'react-dom';
import {BrowserRouter as Router,Route, Routes} from "react-router-dom";
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker'
import Header from './components/header';
import Footer from './components/footer';
import Register from './components/register';
import Login from './components/login';
import Logout from './components/logout';
import Admin from './Admin';
import Create from './components/admin/create';
import Edit from './components/admin/edit';
import Delete from './components/admin/delete';



const routing = (
  <Router>
    <Header/>
    <Routes>
            <Route path="/" element={<App/>} />
            <Route exact path="/admin" element={<Admin/>} />
				    <Route exact path="/admin/create" element={<Create/>} />
				    <Route exact path="/admin/edit/:id" element={<Edit/>} />
				    <Route exact path="/admin/delete/:id" element={<Delete/>} />
            <Route path="/register" element={<Register/>} />
            <Route path="/login" element={<Login/>} />
            <Route path="/logout" element={<Logout/>} />
    </Routes>
    <Footer/>
  </Router>
);
ReactDOM.render(routing, document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
serviceWorker.unregister();
