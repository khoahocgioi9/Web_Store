import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Outlet,
} from "react-router-dom";
import { Home } from "./pages/Home/Home";
import { Products } from "./pages/Products/Products";
import { Product } from "./pages/Product/Product";
import { Blog } from "./pages/Blog/Blog";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import "./app.scss";
import ErrorPage from "./pages/ErrorPage/ErrorPage";
import Login from "./pages/Login, Signup/Login";
import Signup from "./pages/Login, Signup/Signup";
import { useState } from "react";
import ThemeContext from "./context/themeContext";


const Layout = () => {
  return (
    <div className="app">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "*",
        element: <ErrorPage />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <Signup />,
      },
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/products/:id",
        element: <Products />,
      },
      {
        path: "/product/:id",
        element: <Product />,
      },
      {
        path: "/blog",
        element: <Blog />,
      },
    ],
  },
]);

function App() {
  const [theme, setTheme] = useState({ theme: "light" });

  return (
    <div>
      <ThemeContext.Provider value={{ theme: theme, setTheme: setTheme }}>

        <RouterProvider router={router} />
      </ThemeContext.Provider>
    </div>
  );
}

export default App;
