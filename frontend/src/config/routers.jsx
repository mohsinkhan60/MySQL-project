import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import HomePage from "../pages/HomePage";
import SingleFlowerPage from "../pages/SingleFlowerPage";

export const routes = createBrowserRouter([
   {
      path: "/",
      Component: App,
      children: [
         {
            path: '',
            Component: HomePage
         },
         {
            path: '/post/:id',
            Component: SingleFlowerPage
         }
      ]
   }
])