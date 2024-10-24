import React, { useState } from "react";
import logo from "../assets/images/logo.png";
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  const [educationFields, setEducationFields] = useState([
    { university: "", degree: "", duration: "" },
  ]);

  const [experienceFields, setExperienceFields] = useState([
    { company: "", role: "", description: "" },
  ]);

  const [gender, setGender] = useState("");

  const handleAddEducation = () => {
    setEducationFields([
      ...educationFields,
      { university: "", degree: "", duration: "" },
    ]);
  };

  const handleAddExperience = () => {
    setExperienceFields([
      ...experienceFields,
      { company: "", role: "", description: "" },
    ]);
  };

  const handleChange = (event) => {
    setGender(event.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Adicione a lógica de submissão aqui
  };

  return (
    <div className=" font-adlam text-2xl flex justify-center items-center min-h-screen bg-gray-100">
      {/*Botao Login Funcionário*/}
      <div className="col-span-3 absolute top-20 right-0">
        <button
          type="button"
          className="bg-blue-500 hover:bg-sky-700 text-white py-2 px-6 rounded-md shadow-md"
          onClick={() => navigate('/LoginFuncionario')}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z"
            />
          </svg>
        </button>
      </div>
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-5xl">
        <img
          src={logo}
          alt="PEGHO logo"
          className="mx-auto w-1/6 h-auto rounded-lg"
        />
        <form onSubmit={handleSubmit} className="grid grid-cols-3 gap-4">
          {/* Dados Pessoais */}
          <div>
            <h2 className="text-pink-600 font-bold mb-2">Dados Pessoais</h2>
            <div className="mb-4">
              <label className="block text-blue-500">Nome Completo</label>
              <input
                type="text"
                className="w-full bg-gray-100 rounded-md p-2"
              />
            </div>
            <div className="mb-4">
              <label className="block text-blue-500">Data de Nascimento</label>
              <input
                type="date"
                className="w-full bg-gray-100 rounded-md p-2"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="gender" className="block text-blue-500">
                Gênero
              </label>
              <select
                id="gender"
                value={gender}
                onChange={handleChange}
                className="w-full bg-gray-100 rounded-md p-2"
              >
                <option value="" disabled>
                  Selecione o gênero
                </option>
                <option value="male">Masculino</option>
                <option value="female">Feminino</option>
                <option value="outro">Outro</option>
              </select>
            </div>
            <h2 className="text-pink-600 font-bold mb-2">Contato</h2>
            <div className="mb-4">
              <label className="block text-blue-500">Email</label>
              <input
                type="email"
                className="w-full bg-gray-100 rounded-md p-2"
              />
            </div>
            <div className="mb-4">
              <label className="block text-blue-500">Telefone</label>
              <input type="tel" className="w-full bg-gray-100 rounded-md p-2" />
            </div>
            <div className="mb-4">
              <label className="block text-blue-500">Endereço</label>
              <input
                type="text"
                className="w-full bg-gray-100 rounded-md p-2"
              />
            </div>
            <div className="mb-4">
              <label className="block text-blue-500">CEP</label>
              <input
                type="text"
                className="w-full bg-gray-100 rounded-md p-2"
              />
            </div>
          </div>

          {/* Formação */}
          <div>
            <h2 className="text-pink-600 font-bold mb-2">Formação</h2>
            {educationFields.map((field, index) => (
              <div key={index}>
                <div className="mb-4">
                  <label className="block text-blue-500">Universidade</label>
                  <input
                    type="text"
                    className="w-full bg-gray-100 rounded-md p-2"
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-blue-500">Formação</label>
                  <input
                    type="text"
                    className="w-full bg-gray-100 rounded-md p-2"
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-blue-500">Duração</label>
                  <input
                    type="text"
                    className="w-full bg-gray-100 rounded-md p-2"
                  />
                </div>
              </div>
            ))}
            <button
              type="button"
              onClick={handleAddEducation}
              className="text-blue-500 font-bold text-lg"
            >
              +
            </button>
          </div>

          {/* Experiência Profissional */}
          <div>
            <h2 className="text-pink-600 font-bold mb-2">
              Experiência Profissional
            </h2>
            {experienceFields.map((field, index) => (
              <div key={index}>
                <div className="mb-4">
                  <label className="block text-blue-500">Empresa</label>
                  <input
                    type="text"
                    className="w-full bg-gray-100 rounded-md p-2"
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-blue-500">Cargo</label>
                  <input
                    type="text"
                    className="w-full bg-gray-100 rounded-md p-2"
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-blue-500">Descrição</label>
                  <textarea className="w-full bg-gray-100 rounded-md p-2"></textarea>
                </div>
              </div>
            ))}
            <button
              type="button"
              onClick={handleAddExperience}
              className="text-blue-500 font-bold text-lg"
            >
              +
            </button>
          </div>

          {/* Botão Enviar */}
          <div className="col-span-3 flex justify-end">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-sky-700 text-white py-2 px-6 rounded-md shadow-md"
            >
              ENVIAR
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Home;
