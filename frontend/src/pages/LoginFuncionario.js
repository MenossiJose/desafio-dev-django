import React from "react";
import logo from "../assets/images/logo.png";

const LoginFuncionario = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Adicione a lógica de submissão aqui
  };

  return (
    <div className=" font-adlam text-2xl flex justify-center items-center min-h-screen bg-gray-200">
      <div className="w-full max-w-5xl">
        <img
          src={logo}
          alt="PEGHO logo"
          className="mx-auto w-1/6 h-auto rounded-lg"
        />
        <form
          onSubmit={handleSubmit}
          className="flex flex-col items-center mt-4"
        >
          <div className="mb-4 w-1/3">
            <label className="block text-blue-500">ID</label>
            <input
              type="text"
              className="w-full bg-gray-100 rounded-md p-2 text-center"
            />
          </div>
          <div className="mb-4 w-1/3">
            <label className="block text-blue-500">Senha</label>
            <input
              type="text"
              className="w-full bg-gray-100 rounded-md p-2 text-center"
            />
          </div>
          <div className="col-span-3 flex justify-center">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-sky-700 text-white py-2 px-6 rounded-md shadow-md"
            >
              ENTRAR
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginFuncionario;
