import { createBrowserRouter } from 'react-router-dom';
import Layout from './Layout';
import Home from './pages/Home';
import About from './pages/About';
import Cart from './pages/Cart';
import NotFoundPage from './pages/NotFoundPage';
import ProductPage from './pages/ProductPage';
import Categorized from './pages/Categorized';
import Search from './pages/Search';

export const routes = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/about',
        element: <About />,
      },
      {
        path: '/cart',
        element: <Cart />,
      },
      {
        path: '/product/:id',
        element: <ProductPage />,
      },
      {
        path: '/category/:categorySlug',
        element: <Categorized />,
      },
      {
        path: '/search',
        element: <Search />,
      },
      {
        path: '*',
        element: <NotFoundPage />,
      },
    ],
  },
]);
