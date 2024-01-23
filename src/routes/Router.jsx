import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../pages/Home";
import Dashboard from "../pages/Dashboard";
import Houses from "../pages/Houses";
import Login from "../pages/Authentication/login/Login";

const Router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        children: [
            {
                path: "/",
                element: <Home/>
            },
            {
                path: "/dashboard",
                element: <Dashboard/>
            },
            {
                path: "/houses",
                element: <Houses/>
            },
            {
                path: "/login",
                element: <Login/>
            },
            {
                path: "/houses",
                element: <Houses/>
            },
        ]
    }
]);

export default Router