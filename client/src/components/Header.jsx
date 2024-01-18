import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { signOutUserFailure, signOutUserStart, signOutUserSuccess } from "../redux/user/userSlice";

export default function Header() {
  const { currentUser } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const handleSignOut = async () => {
    try {
      dispatch(signOutUserStart());
      const res = await fetch("/api/auth/signout");
      const data = await res.json();
      if (data.success === false) {
        dispatch(signOutUserFailure(data.message));
        return;
      }
      dispatch(signOutUserSuccess(data));
    } catch (error) {
      console.log(error)
      dispatch(signOutUserFailure(error.message));
    }
  };
  return (
    <header className="bg-slate-200 shadow-md">
      <div className="flex justify-between items-center max-w-6xl mx-auto p-3">
        <Link to="/">
          <h1 className="font-bold text-sm sm:text-xl flex flex-wrap">
            <span className="text-slate-500">LiveCode</span>
            <span className="text-slate-700">Nexus</span>
          </h1>
        </Link>

        <ul className="flex gap-4">
          <Link to="/">
            <li className="hidden sm:inline text-slate-700 hover:underline">
              Home
            </li>
          </Link>          
          <Link to="/createworkspace">
            {currentUser ? (
              <li className="text-slate-700 hover:underline">Create workspace</li>
            ) : (
              <li className="text-slate-700 hover:underline">Sign in</li>
            )}
          </Link>
          <Link to="/sign-in">
          {currentUser ? (
            <span onClick={handleSignOut} className="text-red-700 cursor-pointer">
            Sign out
          </span>
            ) : (
              ""
            )}
          </Link>
          <Link to="/profile">
            {currentUser ? (
              <img className="rounded-full h-7 w-7 object-cover" src={currentUser.avatar} alt='profile' />
            ) : (
              ""
            )}

          </Link>
        </ul>
      </div>
    </header>
  );
}
