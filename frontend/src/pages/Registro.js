import React, { useState, useContext } from "react";
import logo from "../assets/images/logo.png";
import AuthContext from "../contexts/AuthContext";

const Registro = () => {
  const { register, error } = useContext(AuthContext);
  const [formData, setFormData] = useState({
    "username": "",
    "first_name": "",
    "last_name": "", 
    "email": "",
    "birth_date": null,
    "gender": "",           
    "password": ""
  });

  const handleChange = (event) => {
    setFormData({
      ...formData,
      gender: event.target.value, 
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);

    const formattedData = {
      ...formData,
      birth_date: formatDate(formData.birth_date),
    };

    register(formattedData);
    console.log(formattedData);
  };

  const formatDate = (dateString) => {
    if (!dateString) return ""; 
    const [year, month, day] = dateString.split("-"); 
    return `${day}/${month}/${year}`; 
  };


  return (
    <div className="font-adlam text-xl flex justify-center items-center min-h-screen bg-gray-200">
      <div className="w-full max-w-2xl bg-white p-8 rounded-lg shadow-lg">
        <img
          src={logo}
          alt="PEGHO logo"
          className="mx-auto w-1/4 h-auto rounded-lg"
        />
        {/* Formulário de dados comuns */}
        <form
          onSubmit={handleSubmit}
          className="flex flex-col items-center mt-6 space-y-6"
        >
          {/* Username */}
          <div className="w-2/4 mx-auto">
            <label className="block text-blue-500 mb-2">Username</label>
            <input
              type="text"
              className="w-full bg-gray-100 rounded-md p-3"
              value={formData.username}
              onChange={(e) =>
                setFormData({ ...formData, username: e.target.value })
              }
              required
            />
          </div>
          {/* First Name */}
          <div className="w-2/4 mx-auto">
            <label className="block text-blue-500 mb-2">Nome</label>
            <input
              type="text"
              className="w-full bg-gray-100 rounded-md p-3"
              value={formData.first_name}
              onChange={(e) =>
                setFormData({ ...formData, first_name: e.target.value })
              }
              required
            />
          </div>
          {/* Last Name */}
          <div className="w-2/4 mx-auto">
            <label className="block text-blue-500 mb-2">Sobrenome</label>
            <input
              type="text"
              className="w-full bg-gray-100 rounded-md p-3"
              value={formData.last_name}
              onChange={(e) =>
                setFormData({ ...formData, last_name: e.target.value })
              }
              required
            />
          </div>
          {/* Email */}
          <div className="w-2/4 mx-auto">
            <label className="block text-blue-500 mb-2">Email</label>
            <input
              type="email"
              className="w-full bg-gray-100 rounded-md p-3"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              required
            />
          </div>
          {/* Senha */}
          <div className="w-2/4 mx-auto">
            <label className="block text-blue-500 mb-2">Senha</label>
            <input
              type="password"
              className="w-full bg-gray-100 rounded-md p-3"
              value={formData.password}
              onChange={(e) =>
                setFormData({ ...formData, password: e.target.value })
              }
              required
            />
          </div>
          {/* Data de Nascimento */}
          <div className="w-2/4 mx-auto">
            <label className="block text-blue-500 mb-2">
              Data de Nascimento
            </label>
            <input
              type="date"
              className="w-full bg-gray-100 rounded-md p-3"
              value={formData.birth_date}
              onChange={(e) =>
                setFormData({ ...formData, birth_date: e.target.value })
              }
              required
            />
          </div>
          {/* Gênero */}
          <div className="w-2/4 mx-auto">
            <label htmlFor="gender" className="block text-blue-500 mb-2">
              Gênero
            </label>
            <select
              id="gender"
              value={formData.gender}
              onChange={handleChange}
              className="w-full bg-gray-100 rounded-md p-3"
            >
              <option value="" disabled>
                Selecione o gênero
              </option>
              <option value="male">Masculine</option>
              <option value="female">Feminine</option>
              <option value="outro">Other</option>
            </select>
          </div>

          {/* Submit button */}
          <div className="w-auto mx-auto">
            <button
              type="submit"
              className="w-auto bg-blue-500 hover:bg-sky-700 text-white py-2 px-4 rounded-md shadow-md"
            >
              Registra-se
            </button>
            {error && <p className="text-red-500">{error}</p>} 
          </div>
        </form>
      </div>
    </div>
  );
};

export default Registro;
