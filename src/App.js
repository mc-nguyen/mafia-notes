import React from "react";
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";

import HomePage from "./pages/HomePage";
import LogIn from "./pages/LogIn";
import SignUp from "./pages/SignUp";
import NavBar from "./control/NavBar";

const router = createBrowserRouter([
    {
        path: "/",
        element: <HomePage/>,
    },
    {
        path: "log-in",
        element: <LogIn/>,
    },
    {
        path: "sign-up",
        element: <SignUp/>,
    },
]);

function App() {
    return (
        <div>
            <NavBar/>
            <RouterProvider router={router} />
        </div>
    );
}

export default App;
