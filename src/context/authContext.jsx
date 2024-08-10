import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(localStorage.getItem("User")) || false
  );

    const login = () => {
        setCurrentUser({
            id:1,
            name:"John Smith",
            profilePicture:"https://randomuser.me/api/port",
        });
    };

    useEffect(() => {
        localStorage.setItem("User", JSON.stringify(currentUser));
    }, [currentUser]);

  return (
    <AuthContext.Provider value={{ currentUser, login }}>
      {children}
    </AuthContext.Provider>
  );
}