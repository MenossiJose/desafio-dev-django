import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from "../contexts/AuthContext";

const Contatos = () => {
  const { createContact } = useContext(AuthContext);
  const navigate = useNavigate();

  const [contactData, setContactData] = useState({
    phone: "",
    adress: "",
    cep: "",
  });

  const handleContactChange = (e) => {
    setContactData({ ...contactData, [e.target.name]: e.target.value });
  };

  const handleContactSubmit = async (e) => {
    e.preventDefault();
    try {
      await createContact(contactData); 
      navigate("/home"); 
    } catch (error) {
      console.error("Erro ao registrar contato:", error);
    }
  };

  return (
    <div className="font-adlam text-2xl flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-5xl">
        <h1 className="text-pink-600 font-bold mb-4">Registre seu Contato</h1>
        <form onSubmit={handleContactSubmit} className="mb-8">
          <input
            type="tel"
            name="phone"
            placeholder="Telefone"
            value={contactData.phone}
            onChange={handleContactChange}
            className="w-full bg-gray-100 rounded-md p-2 mb-4"
          />
          <input
            type="text"
            name="adress"
            placeholder="Endereço"
            value={contactData.adress}
            onChange={handleContactChange}
            className="w-full bg-gray-100 rounded-md p-2 mb-4"
          />
          <input
            type="number"
            name="cep"
            placeholder="CEP"
            value={contactData.cep}
            onChange={handleContactChange}
            className="w-full bg-gray-100 rounded-md p-2 mb-4"
          />
          <button
            type="submit"
            className="bg-blue-500 hover:bg-sky-700 text-white py-2 px-6 rounded-md shadow-md"
          >
            Registrar Contato
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contatos;