import { createContext, useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { api } from "../services/api";

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const token = localStorage.getItem("@TOKEN");
  const [user, setUser] = useState(null);
  const [userEducation, setUserEducation] = useState([]);
  const [userExperience, setUserExperience] = useState([]);
  const [userContact, setUserContact] = useState([]);
  const [userRetriveContacts, setUserRetriveContacts] = useState([]);
  const [error, setError] = useState(null);

  const logout = () => {
    localStorage.clear(); 
    setUser(null); 
    navigate("/"); 
  };

  const register = async (registerData) => {
    try {
      setError(null);
      console.log(registerData);
      const response = await api.post("api/users/", registerData, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.data) {
        setUser(response.data);
        navigate("/contatos");
      }
    } catch (err) {
      console.error("Error:", err.response);
      setError(err.response?.data?.message || "Registration failed");
    }
  };

  const updateUser = async (userData) => {
    for (const key in userData) {
      if (userData[key] === "") {
        delete userData[key];
      }
    }
    try {
      const response = await api.patch(`/api/users/${user.id}/`, userData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setUser(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const login = async (loginData) => {
    try {
      const response = await api.post("/api/token/", loginData);
      window.localStorage.clear();
      window.localStorage.setItem("@TOKEN", response.data.access);
      navigate("/home");
    } catch (err) {
      console.log(error);
      setError(err.response?.data?.message || "Login failed");
    }
  };

  const createContact = async (formData) => {
    try {
      await api.post("/api/contacts/", formData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
    } catch (error) {
      console.log(error);
    }
  };

  const retriveContacts = async (id) => {
    try {
      const response = await api.get(`/api/contacts/${id}/`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setUserRetriveContacts(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const updateContact = async (id, contactData) => {
    if (!id) {
      return;
    }
    for (const key in contactData) {
      if (contactData[key] === "") {
        delete contactData[key];
      }
    }
    try {
      const response = await api.patch(`/api/contacts/${id}/`, contactData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setUserContact(response.data);

    } catch (error) {
      console.log(error);
    } 
  };


  const createExperience = async (formData) => {
    try {
      await api.post("/api/experience/", formData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
    } catch (error) {
      console.log(error);
    }
  };

  const createEducation = async (formData) => {
    try {
      await api.post("/api/education/", formData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
    } catch (error) {
      console.log(error);
    }
  };

  const fetchUserData = async () => {
    try {
      const response = await api.get("/api/me", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setUser(response.data);

      try {
        const response = await api.get("/api/users/contacts/", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setUserContact(response.data);
        console.log(response.data);
      } catch (err) {
        console.error(err);
      }

      try {
        const response = await api.get("/api/users/education/", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setUserEducation(response.data);
      } catch (err) {
        console.error(err);
      }

      try {
        const response = await api.get("/api/users/experience/", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setUserExperience(response.data);
      } catch (err) {
        console.error(err);
      }

      if (location.pathname === "/") {
        navigate("/home");
      }
    } catch (err) {
      window.localStorage.clear();
      navigate("/");
    }
  };


  return (
    <AuthContext.Provider
      value={{
        user,
        error,
        register,
        login,
        createContact,
        createExperience,
        createEducation,
        userEducation,
        fetchUserData,
        userContact,
        userExperience,
        updateUser,
        userRetriveContacts,
        setUserRetriveContacts,
        retriveContacts,
        updateContact,
        logout
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
