import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './main.scss'; // Importar o arquivo Sass
import 'bootstrap/dist/css/bootstrap.min.css'; // Importar Bootstrap
import '@fortawesome/fontawesome-free/css/all.min.css'; // Importar Font Awesome
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './Page/Home/Home';
import Contact from './Page/Contato/Contact';
import './main.scss';
import ChartComponent from './Page/ChartComponent/ChartComponent';
// import PageNotFound from './Page/PageNotFound/PageNotFound';


const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: 'dashboard', element: <ChartComponent /> },
      { path: 'contato', element: <Contact /> },

    ]
  },
  // {
  //   path: '*',
  //   element: <PageNotFound />
  // }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
