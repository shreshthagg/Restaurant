import './App.css';
import Home from './pages/Home';
import About from './pages/About';
import Menu from './pages/Menu';
import Location from './pages/Location';
import Contact from './pages/Contact';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Reviews from './pages/Reviews';
import Navbar from './components/Navbar';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/about',
    element: <About />,
  },
  {
    path: '/menu',
    element: <Menu />,
  },
  {
    path: '/contact',
    element: <Contact />,
  },
  {
    path: '/reviews',
    element: <Reviews />,
  },
  {
    path: '/location',
    element: <Location />,
  },
]);

function App() {
  return (
    <>
      <ToastContainer
        position='top-right'
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={false}
        draggable={false}
        pauseOnHover={false}
        theme='light'
      />
      <Navbar />
      <RouterProvider router={router} />
    </>
  );
}

export default App;
