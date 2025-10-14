import React from "react";
import { createBrowserRouter } from "react-router";
import Root from "../pages/Root/Root";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Home from "../pages/Home";
import Apps from "../pages/Apps/Apps"
import installation from "../pages/Installation";
import appDetails from "../pages/Apps/AppDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    Component:Root,
    errorElement:<ErrorPage></ErrorPage>,
    children:[
      {
        index: true,
        path:"/",
        Component:Home,
        loader:() => fetch('../App.json')
      },
      {
        path:"/Apps",
        Component:Apps,
        loader:() => fetch('../App.json')
      },
      {
        path:"/installation",
        Component:installation,
      },
      {
      path: "/Apps/:id",
      Component: appDetails,
      loader: async ({ params }) => {
      const res = await fetch('../App.json');
      const data = await res.json();
      return { Apps: data, id: params.id };
     },
    } 
    ]
  },
]);