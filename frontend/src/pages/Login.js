import React, { useState } from "react";
import logo from "../assets/images/logo.png";
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  //const [error, setError] = useState("");
  //const [success, setSuccess] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {

  };

  return (
    <div className="font-adlam text-2xl flex justify-center items-center min-h-screen bg-gray-200">
      <div className="w-full max-w-5xl">
        <img
          src={logo}
          alt="PEGHO logo"
          className="mx-auto w-1/6 h-auto rounded-lg"
        />

        {/* Formulário de dados comuns */}
        <div className="flex flex-col items-center mt-4">
          <div className="mb-4 w-1/3">
            <label className="block text-blue-500">Email</label>
            <input
              type="text"
              className="w-full bg-gray-100 rounded-md p-2 text-center"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-4 w-1/3">
            <label className="block text-blue-500">Senha</label>
            <input
              type="password"
              className="w-full bg-gray-100 rounded-md p-2 text-center"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          {/*error && <p className="text-red-500">{error}</p>*/}
          {/*success && <p className="text-green-500">{success}</p>*/}
        </div>

        {/* Botões para cada tipo de login */}
        <div className="flex flex-col items-center gap-4 mt-4">
          {/* Formulário de Login Funcionário */}
          <form
            onSubmit={handleSubmit}
            className="w-full flex justify-center"
          >
            <button
              type="submit"
              className="bg-blue-500 hover:bg-sky-700 text-white py-2 px-6 rounded-md shadow-md"
            >
              Login
            </button>
          </form>
          <button
              type="button"
              className="bg-red-400 hover:bg-red-500 text-white py-2 px-6 rounded-md shadow-md"
              onClick={() => navigate('/Registro')}
            >
              Registrar
            </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
