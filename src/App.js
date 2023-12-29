import "./App.css";
import { createBrowserRouter ,RouterProvider} from "react-router-dom";
import Body from "./components/Body";
import Header from "./components/Header";
import Login from "./components/Login";
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
  },
  {
    path: "/login",
    element: <Login />,
  }
]);
const App = () => { 
  return (
    <div>
      <Header/>
      <RouterProvider router={appRouter} />
    </div> 
  );
};

export default App;