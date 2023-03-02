import { async } from "@firebase/util";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";

const Navbar = () => {
  const { user, logOut } = UserAuth();
  const navigate = useNavigate();
  // เเสดง user ที่ใช้งานอยู่
  // console.log(user.email);

  // Function ออกจากระบบ
  const handleLogout = async () => {
    try {
      await logOut();
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex justify-between items-center p-4 z-[100] w-full absolute">
      {/* Link ไปยัง component Home */}
      <Link to="/">
        <h1 className="text-red-600 text-4xl font-bold cursor-pointer">
          NETFLIX
        </h1>
      </Link>
      {/* operter เช็ค ถ้าใช้ user?.email ture = Navbar Login Account Fales = Navbar not Login */}
      {user?.email ? (
        // Navbar Login Account
        <div>
          {/* Link ไปยัง component Account */}
          <Link to="/account">
            <button className="text-white pr-4">Account</button>
          </Link>
          {/* Link ไปยัง component Logout */}
          <Link to="/">
            <button
              onClick={handleLogout}
              className="bg-red-600 px-6 py-2 rounded cursor-pointer text-white"
            >
              Logout
            </button>
          </Link>
        </div>
      ) : (
        // Navbar not Login
        <div>
          {/* Link ไปยัง component Loin */}
          <Link to="/login">
            <button className="text-white pr-4">Sign In</button>
          </Link>
          {/* Link ไปยัง component Signup */}
          <Link to="/signup">
            <button className="bg-red-600 px-6 py-2 rounded cursor-pointer text-white">
              Sign Up
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Navbar;
