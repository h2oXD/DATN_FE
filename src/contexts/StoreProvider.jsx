import { createContext, useEffect, useState } from "react";
import Cookies from "js-cookie";
import { getUser } from "../api/apiService";

// eslint-disable-next-line react-refresh/only-export-components
export const StoreContext = createContext();

// eslint-disable-next-line react/prop-types
export const StoreProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [role, setRole] = useState(null);

  const token = Cookies.get("token");

  useEffect(() => {
    const fetchUser = async () => {
      if (token) {
        try {
          const res = await getUser();
          setUser(res.data);
          setRole(res.data.role);
        } catch (error) {
          console.log(error);
        }
      }
    };
    fetchUser();
  }, [token]);

  return (
    <StoreContext.Provider
      value={{
        user,
        setUser,
        role,
        setRole,
      }}
    >
      {children}
    </StoreContext.Provider>
  );
};
