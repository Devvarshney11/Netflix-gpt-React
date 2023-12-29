import { useSelector } from "react-redux";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";

const Header = () => {
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        localStorage.setItem("user", "null");
        window.location.replace("/");
      })
      .catch((error) => {});
  };
  const user = useSelector((state) => state.user.user);
  return (
    <div className="h-[90px] bg-gradient-to-b from-black via-black to-transparent absolute z-50 w-[100%] flex justify-between items-center">
      <img
        className="h-full"
        src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        alt="netflix-logo"
      />
      {user && (
        <>
          <img
            className="absolute right-28 h-10"
            src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
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
