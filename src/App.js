import "./styles.css";
import React, { Suspense, lazy } from "react";
import Cart from "./cart";
import Product from "./product";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./Root";
import ErrorPage from "./errorPage";
import ErrorBoundry from "./errorBoundry";
import LoadingSpinner from "./loadingSpinner";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: (
          <Suspense fallback={<LoadingSpinner />}>
            <Product />
          </Suspense>
        ),
      },
      
      {
        path: "/card",
        element: (
          <Suspense fallback={<LoadingSpinner />}>
            <Cart />
          </Suspense>
        ),
      },
    ],
  },
]);

export default function App() {
  return (
    <ErrorBoundry>
      <RouterProvider router={router}></RouterProvider>
    </ErrorBoundry>
  );
}
