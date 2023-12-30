import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Body from "./components/Body";
import Login from "./components/Login";
import { Navigate } from "react-router-dom";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element:<Login />,
  },
  {
    path: "/browse",
    element:<Body />,
  },
]);
const App = () => {
  return (
        <RouterProvider router={appRouter} />
  );
};

export default App;
