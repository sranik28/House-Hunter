import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../pages/Home";
import Houses from "../pages/Houses";
import Login from "../pages/Authentication/login/Login";
import Registration from "../pages/Authentication/Registration/Registration";
import Dashboard from "../layouts/Dashboard";
import PrivateRoute from "./PrivateRoute";
import ErrorPage from "../components/ErrorPage/ErrorPage";
import UpdateProfile from "../components/UpdateUserProfile/UpdateUserProfile";
import UserProfile from "../components/UserProfile/UserProfile";
import OwnerRoute from "../routes/OwnerRoute";
import BookingForm from "../pages/BookingForm/BookingForm";
import AddHouse from "../pages/Dashboard/HouseOwner/AddHouse";
import ManageAllBooking from "../Pages/Dashboard/HouseOwner/ManageAllBooking";
import ManageHouse from "../Pages/Dashboard/HouseOwner/ManageHouse";
import UpdateHouse from "../Pages/Dashboard/HouseOwner/UpdateHouse";
import ManageBooking from "../pages/Dashboard/HouseRenter/ManageBooking";

const Router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        errorElement: <ErrorPage />,
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
                path: "/booking/:id",
                element: <BookingForm />,
                loader: ({params}) => fetch(`https://house-hunter-server-eight.vercel.app/house/${params.id}`)
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
            loader: ({params}) => fetch(`http://localhost:8888/house/${params.id}`)
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
            loader: ({params}) => fetch(`https://http://localhost:8888/getprofileinfo/${params.id}`)
          },
        ],
      },
]);

export default Router