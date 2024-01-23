import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../pages/Home";
import Houses from "../pages/Houses";
import Login from "../pages/Authentication/login/Login";
import Registration from "../pages/Authentication/Registration/Registration";
import Dashboard from "../layouts/Dashboard";

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
                path: "/registration",
                element: <Registration/>
            },
        ]
    },
    {
        path: "/dashboard",
        element: <PrivateRoute><Dashboard /></PrivateRoute>,
        children: [
         // House Owner Dashboard
          {
            path: "managehouse",
            element: <OwnerRoute><ManageHouse /></OwnerRoute>,
          },
          {
            path: "updatehouse/:id",
            element: <OwnerRoute><UpdateHouse /></OwnerRoute>,
            loader: ({params}) => fetch(`https://house-hunter-server-eight.vercel.app/house/${params.id}`)
          },
          {
            path: "manageallbooking",
            element: <OwnerRoute><ManageAllBooking /></OwnerRoute>,
          },
          {
            path: "addhouse",
            element: <OwnerRoute><AddHouse /></OwnerRoute>,
          },
         // House Renter Dashboard
          {
            path: "managebooking",
            element: <ManageBooking />,
          },
          // User Profile
          {
            path: "profile",
            element: <UserProfile />,
          },
          {
            path: "updateprofile/:id",
            element: <UpdateProfile />,
            loader: ({params}) => fetch(`https://house-hunter-server-eight.vercel.app/getprofileinfo/${params.id}`)
          },
        ],
      },
]);

export default Router