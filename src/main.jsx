import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App';
import './index.css';
import Homepage from './Components/Homepage/Homepage';
import Card1 from './Components/Cards/Card1';
import Card2 from './Components/Cards/Card2';
import Contact from './Components/ConactPage/Contact';
import Courses from './Components/Cources/Courses';
import About from './Components/About/About';
import Login from './Components/Login';
import Signup from './Components/Signup';
import QS1 from './Components/Questions/QS1';
import QS2 from './Components/Questions/QS2';
import QS3 from './Components/Questions/QS3';
import CollegeCard from './Components/Questions/CollegeCities/CollegeCard';

// Define your routes
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      // {
      //   path: "/",
      //   element: <Login />,
      // },
      // {
      //   path: "signup",
      //   element: <Signup />,
      // },
      {
        path: "/",
        element: <Homepage />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/courses",
        element: <Courses />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/qone",
        element: <QS1/>,
      },
      {
        path: "/qtwo",
        element: <QS2/>,
      },
      {
        path: "/qthree",
        element: <QS3/>,
      },
      {
        path: "/cities",
        element: <CollegeCard/>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
