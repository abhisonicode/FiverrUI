import React, { Suspense, lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/layout/Layout";
import Home from "./home/Home";
// import Add from "./add/Add";
import Gig from "./gig/Gig";
import Gigs from "./gigs/Gigs";
import Login from "./login/Login";
import Messages from "./messages/Messages";
import MyGigs from "./myGigs/MyGigs";
import Orders from "./orders/Orders";
import Register from "./register/Register";

const Add = lazy(() => import("./add/Add"));

const AppRouter = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <Layout />,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/add",
        element: (
          <Suspense>
            <Add></Add>
          </Suspense>
        ),
      },
      {
        path: "/gig/:id",
        element: <Gig></Gig>,
      },
      {
        path: "/gigs",
        element: <Gigs></Gigs>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/messages",
        element: <Messages></Messages>,
      },
      {
        path: "/my-gigs",
        element: <MyGigs></MyGigs>,
      },
      {
        path: "/orders",
        element: <Orders></Orders>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
    ],
  },
]);

export default AppRouter;
