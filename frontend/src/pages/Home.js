import React, { useState } from "react";
import logo from "../assets/images/logo.png";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  // Seções de dados
  const [userData, setUserData] = useState({
    nome: "",
    sobrenome: "",
    dataNascimento: "",
    genero: "",
    email: ""
  });

  const [contactData, setContactData] = useState({
    telefone: "",
    endereco: "",
    cep: ""
  });

  const [educationFields, setEducationFields] = useState([
    { universidade: "", formacao: "", duracao: "" }
  ]);

  const [experienceFields, setExperienceFields] = useState([
    { empresa: "", cargo: "", descricao: "" }
  ]);

  // Handlers para campos de usuário
  const handleUserChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  // Handlers para campos de contato
  const handleContactChange = (e) => {
    setContactData({ ...contactData, [e.target.name]: e.target.value });
  };

  // Adicionar e remover campos dinâmicos de formação
  const handleAddEducation = () => {
    setEducationFields([...educationFields, { universidade: "", formacao: "", duracao: "" }]);
  };

  const handleRemoveEducation = (index) => {
    const updatedFields = [...educationFields];
    updatedFields.splice(index, 1);
    setEducationFields(updatedFields);
  };

  // Adicionar e remover campos dinâmicos de experiência
  const handleAddExperience = () => {
    setExperienceFields([...experienceFields, { empresa: "", cargo: "", descricao: "" }]);
  };

  const handleRemoveExperience = (index) => {
    const updatedFields = [...experienceFields];
    updatedFields.splice(index, 1);
    setExperienceFields(updatedFields);
  };

  // Handler para enviar dados ao servidor
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Exemplo de requisições separadas para cada app Django
    try {
      // Envio dos dados de usuário
      await fetch("/api/usuario/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(userData)
      });

      // Envio dos dados de contato
      await fetch("/api/contato/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(contactData)
      });

      // Envio das formações
      await fetch("/api/formacao/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(educationFields)
      });

      // Envio das experiências
      await fetch("/api/experiencia/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(experienceFields)
      });

      alert("Dados enviados com sucesso!");
      navigate("/dashboard"); // Redirecionar após o envio

    } catch (error) {
      console.error("Erro ao enviar dados:", error);
      alert("Ocorreu um erro ao enviar os dados.");
    }
  };

  return (
    <div className=" font-adlam text-2xl flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-5xl">
        <img src={logo} alt="PEGHO logo" className="mx-auto w-1/6 h-auto rounded-lg" />
        
        <form onSubmit={handleSubmit} className="grid grid-cols-3 gap-4">
          {/* Dados Pessoais */}
          <div>
            <h2 className="text-pink-600 font-bold mb-4">Dados Pessoais</h2>
            <input type="text" name="nome" placeholder="Nome" onChange={handleUserChange} className="w-full bg-gray-100 rounded-md p-2 mb-4" />
            <input type="text" name="sobrenome" placeholder="Sobrenome" onChange={handleUserChange} className="w-full bg-gray-100 rounded-md p-2 mb-4" />
            <input type="date" name="dataNascimento" onChange={handleUserChange} className="w-full bg-gray-100 rounded-md p-2 mb-4" />
            <select name="genero" onChange={handleUserChange} className="w-full bg-gray-100 rounded-md p-2 mb-4">
              <option value="" disabled>Selecione o gênero</option>
              <option value="male">Masculino</option>
              <option value="female">Feminino</option>
              <option value="outro">Outro</option>
            </select>
            <input type="email" name="email" placeholder="Email" onChange={handleUserChange} className="w-full bg-gray-100 rounded-md p-2 mb-4" />
          </div>

          {/* Contatos */}
          <div>
            <h2 className="text-pink-600 font-bold mb-4">Contatos</h2>
            <input type="tel" name="telefone" placeholder="Telefone" onChange={handleContactChange} className="w-full bg-gray-100 rounded-md p-2 mb-4" />
            <input type="text" name="endereco" placeholder="Endereço" onChange={handleContactChange} className="w-full bg-gray-100 rounded-md p-2 mb-4" />
            <input type="text" name="cep" placeholder="CEP" onChange={handleContactChange} className="w-full bg-gray-100 rounded-md p-2 mb-4" />
          </div>

          {/* Formação */}
          <div>
            <h2 className="text-pink-600 font-bold mb-4">Formação</h2>
            {educationFields.map((field, index) => (
              <div key={index} className="mb-4">
                <input type="text" placeholder="Universidade" className="w-full bg-gray-100 rounded-md p-2 mb-4" />
                <input type="text" placeholder="Formação" className="w-full bg-gray-100 rounded-md p-2 mb-4" />
                <input type="text" placeholder="Duração" className="w-full bg-gray-100 rounded-md p-2 mb-4" />
                <button type="button" onClick={() => handleRemoveEducation(index)} className="text-red-500 font-bold text-lg">Remover Formação</button>
              </div>
            ))}
            <button type="button" onClick={handleAddEducation} className="text-blue-500 font-bold text-lg">Adicionar Formação</button>
          </div>

          {/* Experiência Profissional */}
          <div>
            <h2 className="text-pink-600 font-bold mb-4">Experiência Profissional</h2>
            {experienceFields.map((field, index) => (
              <div key={index} className="mb-4">
                <input type="text" placeholder="Empresa" className="w-full bg-gray-100 rounded-md p-2 mb-4" />
                <input type="text" placeholder="Cargo" className="w-full bg-gray-100 rounded-md p-2 mb-4" />
                <textarea placeholder="Descrição" className="w-full bg-gray-100 rounded-md p-2 mb-4"></textarea>
                <button type="button" onClick={() => handleRemoveExperience(index)} className="text-red-500 font-bold text-lg">Remover Experiência</button>
              </div>
            ))}
            <button type="button" onClick={handleAddExperience} className="text-blue-500 font-bold text-lg">Adicionar Experiência</button>
          </div>

          {/* Botão Enviar */}
          <div className="col-span-3 flex justify-end">
            <button type="submit" className="bg-blue-500 hover:bg-sky-700 text-white py-2 px-6 rounded-md shadow-md">ENVIAR</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Home;
