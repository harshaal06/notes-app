import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import Home from './views/Home/Home';
import NewNote from './views/NewNote/NewNote';
import UpdateNote from './views/UpdateNote/UpdateNote';
import Login from './views/Login/Login';
import { Toaster } from 'react-hot-toast';

const router = createBrowserRouter([
  {
    path: "/home",
    element: <Home />
  },
  {
    path: "/",
    element: <Login />
  },
  {
    path: "/new-note",
    element: <NewNote />
  },
  {
    path: "/update/:id",
    element: <UpdateNote />
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<>
  <Toaster />
  <RouterProvider router={router} />
  </>
);
