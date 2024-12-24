import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
import './output.css'
import App from './App.jsx'
import AdminApp from './AdminApp.jsx'
import ClubApp from './ClubApp.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  // Auth route
  // {
  //   path: "/auth",
  //   element: <Auth />,
  //   // errorElement: <ErrorPage />,
  //   // children: [
  //   //   {
  //   //     path: "",
  //   //     element: <Login/>,
  //   //   },
  //   //   {
  //   //     path: "register",
  //   //     element: <Register/>,
  //   //   },
  //   //   {
  //   //     path: "forgot-password",
  //   //     element: <ForgotPassword/>,
  //   //   },
  //   //   {
  //   //     path: "reset",
  //   //     element: <PasswordReset/>,
  //   //   },
  //   //   {
  //   //     path: "verify",
  //   //     element: <OTPVerification/>,
  //   //   },
  //   //   {
  //   //     path: "test",
  //   //     element: <Test/>,
  //   //   },
  //   // ],
  // },
  // // guest route
  // {
  //   path: "/",
  //   element: <GuestApp />,
  //   errorElement: <ErrorPage />,
  //   children: [
  //     {
  //       path: "",
  //       element: <Home/>,
  //     },
  //     {
  //       path: "careers",
  //       element: <Careers/>,
  //     },
  //     {
  //       path: "about",
  //       element: <About/>,
  //     },
  //     {
  //       path: "pricing",
  //       element: <Pricing/>,
  //     },
  //   ],
  // },
  // user routes
  {
    path: "",
    element: <App />,
    // errorElement: <ErrorPage />,
    // children: [
    //   {
    //     path: "",
    //     element: <MobileMenuPage />,
    //   },
    //   {
    //     path: "cart",
    //     element: <CartPage />,
    //   },
    // ],
  },
  // // restaurant Routes
  // {
  //   path: "/portal",
  //   element: <RestoApp />,
  //   errorElement: <ErrorPage />,
  //   children: [
  //     { path: "hotaction", element: <HotAction /> },
  //     { path: "faq", element: <FAQ />, },

  //   ],
  // },
  // admin Routes
  {
    path: "/admin",
    element: <AdminApp />,
    // errorElement: <ErrorPage />,
    // children: [
    //   { path: "hotaction", element: <HotAction /> },
    //   { path: "faq", element: <FAQ />, },

    // ],
  },
  {
    path: "/club",
    element: <ClubApp />,
    // errorElement: <ErrorPage />,
    // children: [
    //   { path: "hotaction", element: <HotAction /> },
    //   { path: "faq", element: <FAQ />, },

    // ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    <RouterProvider router={router} />
  </StrictMode>,
)
