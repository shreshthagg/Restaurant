import './App.css';
import Home from './pages/Home';
import About from './pages/About';
import Menu from './pages/Menu';
import Contact from './pages/Contact';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Reviews from './pages/Reviews';
import Navbar from './components/Navbar';

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
]);

function App() {
  return (
    <>
      <Navbar />
      <RouterProvider router={router} />
    </>
  );
}

export default App;
