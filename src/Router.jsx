import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import NotFound from "./Pages/NotFound/NotFound";
import Home from "./Pages/Home/Home";
export const router = createBrowserRouter([
  {
    path: "",
    element: <App />,
    children: [
        {
            path:"/",
            element:<Home/>
        }
    ],
    errorElement: <NotFound />,
  },
]);
export default router;
