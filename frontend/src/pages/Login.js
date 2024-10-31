import React, { useState, useContext } from "react";
import logo from "../assets/images/logo.png";
import { useNavigate } from "react-router-dom";
import AuthContext from "../contexts/AuthContext";

const Login = () => {
  const navigate = useNavigate();
  const { login, error } = useContext(AuthContext);
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await login(formData);
  };

  return (
    <div className="font-adlam text-2xl flex justify-center items-center min-h-screen bg-gray-200">
      <div className="w-full max-w-5xl">
        <img
          src={logo}
          alt="PEGHO logo"
          className="mx-auto w-1/6 h-auto rounded-lg"
        />
        <form onSubmit={handleSubmit}>
          {/* Formulário de dados comuns */}
          <div className="flex flex-col items-center mt-4">
            <div className="mb-4 w-1/3">
              <label className="block text-blue-500">Username</label>
              <input
                type="text"
                className="w-full bg-gray-100 rounded-md p-2 text-center"
                value={formData.username}
                onChange={(e) =>
                  setFormData({ ...formData, username: e.target.value })
                }
                required
              />
            </div>
            <div className="mb-4 w-1/3">
              <label className="block text-blue-500">Senha</label>
              <input
                type="password"
                className="w-full bg-gray-100 rounded-md p-2 text-center"
                value={formData.password}
                onChange={(e) =>
                  setFormData({ ...formData, password: e.target.value })
                }
                required
              />
            </div>
          </div>

          {/* Botões para cada tipo de login */}
          <div className="flex flex-col items-center gap-4 mt-4">
            {/* Formulário de Login Funcionário */}
            <button
              type="submit"
              className="bg-blue-500 hover:bg-sky-700 text-white py-2 px-6 rounded-md shadow-md"
            >
              Login
            </button>
            {error && <p className="text-red-500">{error}</p>} 
          </div>
          <div className="flex flex-col items-center gap-4 mt-4">
            <button
              type="button"
              className="bg-red-400 hover:bg-red-500 text-white py-2 px-6 rounded-md shadow-md"
              onClick={() => navigate("/Registro")}
            >
              Registrar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
