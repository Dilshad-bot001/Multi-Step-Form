// import DemoComponent from "./DemoComponent";
import React from "react";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Form from './components/MultiStepForm/Form'
import Home from './components/Home'

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Form />,
    },
    {
      path: "/home",
      element: <Home />,
    },
  ]);

  return (
    <RouterProvider router={router} />
  );
}

export default App;