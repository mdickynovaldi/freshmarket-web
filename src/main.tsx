import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router";
import "@/index.css";
import React from "react";
import { Root } from "@/routes/root.tsx";
import { NotFound } from "@/routes/404.tsx";
import { Home, loader as homeLoader } from "@/routes/home.tsx";
import { Product, productLoader } from "./routes/product-detail";
import { Products, productsLoader } from "./routes/products";
import { Login, loginAction } from "./routes/login";
import { Register, registerAction } from "./routes/register";
import { Profile, profileLoader } from "./routes/profile";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <NotFound />,
    children: [
      { path: "/", element: <Home />, loader: homeLoader },
      {
        path: "/product/:slug",
        element: <Product />,
        loader: productLoader,
      },
      {
        path: "/products",
        element: <Products />,
        loader: productsLoader,
      },
      { path: "/login", element: <Login />, action: loginAction },

      { path: "/register", element: <Register />, action: registerAction },
      {
        path: "/profile",
        element: <Profile />,
        loader: profileLoader,
      },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
