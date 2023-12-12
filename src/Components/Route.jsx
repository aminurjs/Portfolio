import { createBrowserRouter } from "react-router-dom";
import App from "../App";
const MyRoute = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
]);

export default MyRoute;
