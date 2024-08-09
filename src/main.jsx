import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App';
import './index.css';
import Homepage from './Components/Homepage/Homepage';
import Card1 from './Components/Cards/Card1';
import Card2 from './Components/Cards/Card2';

// Define your routes
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Homepage />,
      },
      {
        path: "home",
        element: <Homepage />,
      },
      {
        path: "about",
        element: <Card1
          img="/engineering.jpg"
          title="engineering"
          cn={500}
          cources1="BE/B.Tech"
          cources2="Diploma in engineering"
          cources3="ME/M.tech"
          borderColor="#cc6b56"
        />,
      },
      {
        path: "contact",
        element: <Card2
          title="Ranking"
          tagline="Collage Ranked based on data"
          bname="Top Ranked Collges in india"
          img="https://cdni.iconscout.com/illustration/premium/thumb/website-ranking-3465545-2928735.png?f=webp"
        />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
