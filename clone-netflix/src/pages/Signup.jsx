import React, { useState } from "react";
// เข้าเข้า useNavigate
import { Link, useNavigate } from "react-router-dom";
// นำเข้า User
import { UserAuth } from "../context/AuthContext";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { user, signUp } = UserAuth();
  const navigate = useNavigate();

  // Function แบบ async เช็ค error
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signUp(email, password);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="w-full h-screen">
        <img
          className="hidden sm:block absolute w-full h-full object-cover"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/f841d4c7-10e1-40af-bcae-07a3f8dc141a/f6d7434e-d6de-4185-a6d4-c77a2d08737b/US-en-20220502-popsignuptwoweeks-perspective_alpha_website_medium.jpg"
          alt="/"
        />
        {/* fixed = องค์ประกอบตำแหน่งคงที่ */}
        <div className="bg-black/60 fixed top-0 left-0 w-full h-screen" />
        <div className="fixed w-full px-4 py-24 z-50">
          {/* กรอบดำข้างใน */}
          <div className="max-w-[450px] h-[600px] mx-auto bg-black/75 text-white">
            <div className="max-w-[320px] mx-auto py-16">
              <h1 className="text-3xl font-bold">Sign up</h1>
              {/* from Signup */}
              <form
                onClick={handleSubmit}
                className="w-full flex flex-col py-4"
              >
                <input
                  // เป็นการตั้งค่า Email
                  onChange={(e) => setEmail(e.target.value)}
                  className="p-3 my-2 bg-gray-600 rounded"
                  type="email"
                  placeholder="Email"
                  autoComplete="email"
                />
                <input
                  // เป็นการตั้งค่า Password
                  onChange={(e) => setPassword(e.target.value)}
                  className="p-3 my-2 bg-gray-600 rounded"
                  type="password"
                  placeholder="Password"
                  autoComplete="current-password"
                />
                <button className=" bg-red-600 py-3 my-6 rounded font-bold">
                  Sign Up
                </button>
                <div className="flex justify-between items-center text-gray-500">
                  <p>
                    <input type="checkbox" className="mr-2" />
                    Remember me
                  </p>
                  <p>Need Help?</p>
                </div>
                <p className="py-8">
                  <span className="text-gray-500">
                    Already subscribed to Netflix?
                  </span>
                  <Link to="/login">Sign In</Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
