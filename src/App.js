import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Body from "./components/Body";
import Header from "./components/Header";
import Login from "./components/Login";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./utils/firebase";
import { useDispatch } from "react-redux";
import { addUser ,removeUser} from "./utils/userSlice";
const uid = localStorage.getItem("user");
const appRouter = createBrowserRouter([
  {
    path: "/",
    element:(uid !== "null")?<Body />:<Login/>,
  },
  {
    path: "/browse",
    element:(uid !== "null")?<Body />:<Login/>,
  },
]);
const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = auth.currentUser;
        dispatch(addUser({uid:uid,email:email,displayName:displayName}));
      } else {
        dispatch(removeUser());
      }
    });
  }, []);
  return (
      <div>
        <Header />
        <RouterProvider router={appRouter} />
      </div>
  );
};

export default App;
