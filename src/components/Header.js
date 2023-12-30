import { useDispatch, useSelector } from "react-redux";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { addUser, removeUser } from "../utils/userSlice";
import { useNavigate } from "react-router-dom";
import { LOGO_CDN, USER_LOGO_CDN } from "../utils/constant";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = auth.currentUser;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName }));
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });
    return ()=>unsubscribe();
  },[]);
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {});
  };
  const user = useSelector((state) => state.user.user);
  return (
    <div className="h-[90px] bg-gradient-to-b from-black via-black to-transparent absolute z-50 w-[100%] flex justify-between items-center">
      <img className="h-full" src={LOGO_CDN} alt="netflix-logo" />
      {user && (
        <>
          <img
            className="absolute right-28 h-10"
            src={USER_LOGO_CDN}
            alt="avatar"
          />
          <button
            className="absolute right-8 bg-red-700 rounded-md text-white font-bold p-1"
            onClick={() => {
              handleSignOut();
            }}
          >
            Sign Out
          </button>
        </>
      )}
    </div>
  );
};

export default Header;
