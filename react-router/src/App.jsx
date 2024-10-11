import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home";
import ErrorPage from "./components/ErrorPage";
import Product from "./components/Product";
import Root from "./components/Root";
import ProductDetail from "./components/ProductDetail";
import "react-toastify/dist/ReactToastify.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/products",
        element: <Product />,
      },
      {
        path: "/products/:id",
        element: <ProductDetail />,
      },
    ],
  },

  {
    path: "*",
    element: <ErrorPage />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
