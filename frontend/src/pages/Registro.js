import React, { useState } from "react";
import logo from "../assets/images/logo.png";
import { useNavigate } from "react-router-dom";

const Registro = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [username, setUsername] = useState("");
  const [gender, setGender] = useState("");
  const [birthDate, setBirthDate] = useState("");
  //const [error, setError] = useState("");
  //const [success, setSuccess] = useState("");

  //const navigate = useNavigate();
  const handleChange = (event) => {
    setGender(event.target.value);
  };
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
          {/* Username */}
          <div className="mb-4 w-1/3">
            <label className="block text-blue-500">Username</label>
            <input
              type="text"
              className="w-full bg-gray-100 rounded-md p-2 text-center"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          {/* First Name */}
          <div className="mb-4 w-1/3">
            <label className="block text-blue-500">Nome</label>
            <input
              type="text"
              className="w-full bg-gray-100 rounded-md p-2 text-center"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              required
            />
          </div>
          {/* Last Name */}
          <div className="mb-4 w-1/3">
            <label className="block text-blue-500">Sobrenome</label>
            <input
              type="password"
              className="w-full bg-gray-100 rounded-md p-2 text-center"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              required
            />
          </div>
          {/*Email*/}
          <div className="mb-4 w-1/3">
            <label className="block text-blue-500">Email</label>
            <input
              type="password"
              className="w-full bg-gray-100 rounded-md p-2 text-center"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          {/*Senha*/}
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
          {/*Data de Nascimento*/}
          <div className="mb-4 w-1/3">
            <label className="block text-blue-500">Data de Nascimento</label>
            <input
              type="date"
              className="w-full bg-gray-100 rounded-md p-2 text-center"
              value={birthDate}
              onChange={(e) => setBirthDate(e.target.value)}
              required
            />
          </div>
          {/*Gênero*/}
          <div className="mb-4 w-1/3">
            <label htmlFor="gender" className="block text-blue-500">
              Gênero
            </label>
            <select
              id="gender"
              value={gender}
              onChange={handleChange}
              className="w-full bg-gray-100 rounded-md p-2 text-center"
            >
              <option value="" disabled>
                Selecione o gênero
              </option>
              <option value="male">Masculino</option>
              <option value="female">Feminino</option>
              <option value="outro">Outro</option>
            </select>
          </div>
          {/*error && <p className="text-red-500">{error}</p>*/}
          {/*success && <p className="text-green-500">{success}</p>*/}
        </div>

        {/* Botões para cada tipo de login */}
        <div className="flex flex-col items-center gap-4 mt-4">
          {/* Formulário de Login Funcionário */}
          <form onSubmit={handleSubmit} className="w-full flex justify-center">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-sky-700 text-white py-2 px-6 rounded-md shadow-md"
            >
              Registra-se
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Registro;
