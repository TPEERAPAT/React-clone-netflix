import { createContext, useContext, useState, useEffect } from "react";
import { auth, db } from "../Firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "@firebase/auth";
import { setDoc, doc } from "firebase/firestore";

const AuthContext = createContext();

export function AuthContextProvider({ children }) {
  // สร้าง useStrate = object
  const [user, setUser] = useState({});

  // Function สมัครสามชิก
  function signUp(email, password) {
    createUserWithEmailAndPassword(auth, email, password);
    setDoc(doc(db, "users", email), {
      savedShows: [],
    });
  }

  // Function ล็อคอิน
  function logIn(email, password) {
    return signInWithEmailAndPassword(auth, email, password);
  }

  // function ล็อคเอ้า
  function logOut() {
    return signOut(auth);
  }

  // ใช้ useEffect เปลี่ยนเเปลง useState
  useEffect(() => {
    // unsubscribe = เพื่อดูว่ามี user ในระบบหรือไม่
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => {
      // เพื่อยกเลิกการสมัคร
      unsubscribe();
    };
  });
  return (
    <AuthContext.Provider value={{ signUp, logIn, logOut, user }}>
      {children}
    </AuthContext.Provider>
  );
}

export function UserAuth() {
  return useContext(AuthContext);
}

// export function UserAuth() {
//   return useContext(AuthContext);
// }
