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
            profilePicture:"https://images.pexels.com/photos/275033/pexels-photo-275033.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
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
};