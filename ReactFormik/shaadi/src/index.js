import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Landing from './Landingpage';
import Login from './Login';
import Registration from './Registration';
import reportWebVitals from './reportWebVitals';
import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
// import Landing from './Landingpage';
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Landing/>,
      children:[
        {
            path: "/",
            element: <Login/>
        },
        {
            path: "/registration",
            element: <Registration/>
        }
      ]
    },
    // {
    //     path: "/registration",
    //     element: <Registration/>
    // }
  ]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <RouterProvider router={router} />  
    // <Landing/>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
