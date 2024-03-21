import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Home from './views/Home/Home';
import NewNote from './views/NewNote/NewNote';
// import {Toaster} from 'react-hot-toast';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/new-note",
    element: <NewNote />
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={router} />);
