import React from "react";
import Navbar from "./components/Navbar";

// import Router-dom
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import { AuthContextProvider } from "./context/AuthContext";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Account from "./pages/Account";
// import component ป้องกันการเข้าถึง Account
import ProtectedRoutse from "./components/ProtectedRoutse";

function App() {
  return (
    <>
      <AuthContextProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route
            path="/account"
            element={
              // นำ ProtectedRoutse มาครอบ Component Account
              <ProtectedRoutse>
                <Account />
              </ProtectedRoutse>
            }
          />
        </Routes>
      </AuthContextProvider>
    </>
  );
}

export default App;
