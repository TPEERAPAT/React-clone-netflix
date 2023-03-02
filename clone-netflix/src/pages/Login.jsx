import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
// นำเข้า User
import { UserAuth } from "../context/AuthContext";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { user, logIn } = UserAuth();
  //   เช็ค error
  const [error, setError] = useState("");

  //   const navigate = useNavigate();
  const navigate = useNavigate();

  // Function แบบ async เช็ค error
  const handleSubmit = async (e) => {
    e.preventDefault();
    //   เช็ค error
    setError("");
    try {
      await logIn(email, password);
      //  เมื่อ email, password ถูกต้อง ให้เข้าสู่ระบบได้
      navigate("/");
    } catch (error) {
      console.log(error);
      //   เช็ค error
      setError(error.message);
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
              <h1 className="text-3xl font-bold">Sign In</h1>
              {error ? <p className="p-3 bg-red-400 py-2">{error}</p> : null}
              {/* from Signup */}
              <form
                onSubmit={handleSubmit}
                className="w-full flex flex-col py-4"
              >
                <input
                  onChange={(e) => setEmail(e.target.value)}
                  className="p-3 my-2 bg-gray-600 rounded"
                  type="email"
                  placeholder="Email"
                  autoComplete="email"
                />
                <input
                  onChange={(e) => setPassword(e.target.value)}
                  className="p-3 my-2 bg-gray-600 rounded"
                  type="password"
                  placeholder="Password"
                  autoComplete="current-password"
                />
                <button className=" bg-red-600 py-3 my-6 rounded font-bold">
                  Sign In
                </button>
                <div className="flex justify-between items-center text-gray-500">
                  <p>
                    <input type="checkbox" className="mr-2" />
                    Remember me
                  </p>
                  <p>Need Help?</p>
                </div>
                <p className="py-8">
                  <span className="text-gray-500">New to Netflix?</span>
                  <Link to="/signup">Sign Up</Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
