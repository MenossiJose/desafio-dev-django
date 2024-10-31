import React, { useState, useContext, useEffect } from "react";
import AuthContext from "../contexts/AuthContext";
import logo from "../assets/images/logo.png";

const Home = () => {
  const { user, userContact, fetchUserData, logout, createEducation, createExperience, updateUser, updateContact} = useContext(AuthContext);

  const [userData, setUserData] = useState({
    first_name: user?.first_name || "",
    last_name: user?.last_name || "",
    birth_date: user?.birth_date || "",
    gender: user?.gender || "",
    email: user?.email || "",
  });

  const [contactData, setContactData] = useState({
    phone: "",
    adress: "",
    cep: "",
  });

  const [educationData, setEducationData] = useState({
    institution: "",
    title: "",
    duration: "",
  });

  const [experienceData, setExperienceData] = useState({
    company: "",
    role: "",
    description: "",
  });

  useEffect(() => {
    fetchUserData();
  }, []);

  useEffect(() => {
    if (user) {
      setUserData({
        first_name: user.first_name,
        last_name: user.last_name,
        birth_date: user.birth_date,
        gender: user.gender,
        email: user.email,
      });
    }
    if (userContact && userContact.length > 0) {
      const { phone, adress, cep } = userContact[0];
      setContactData({ phone, adress, cep });
    }
  }, [user, userContact]);

  const formatDate = (date) => {
    const [year, month, day] = date.split("-");
    return `${day}/${month}/${year}`;
  };

  const handleUserChange = (e) => setUserData({ ...userData, [e.target.name]: e.target.value });
  const handleContactChange = (e) => setContactData({ ...contactData, [e.target.name]: e.target.value });
  const handleEducationChange = (e) => setEducationData({ ...educationData, [e.target.name]: e.target.value });
  const handleExperienceChange = (e) => setExperienceData({ ...experienceData, [e.target.name]: e.target.value });

  const handleUserSubmit = (e) => {
    e.preventDefault();
    const formattedUserData = {
      ...userData,
      birth_date: formatDate(userData.birth_date),
    };
    updateUser(formattedUserData);
  };

  const handleContactSubmit = (e) => {
    e.preventDefault();

    if (userContact && userContact[0]?.id) {
      updateContact(userContact[0].id, contactData);
      console.log(contactData);
    }
  };

  const handleEducationSubmit = (e) => {
    e.preventDefault();
    createEducation(educationData);
  };

  const handleExperienceSubmit = (e) => {
    e.preventDefault();
    createExperience(experienceData);
  };


  return (
    <div className="font-adlam text-2xl flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-5xl">
        <img src={logo} alt="PEGHO logo" className="mx-auto w-1/6 h-auto rounded-lg" />

        {/* Dados Pessoais */}
        <form onSubmit={handleUserSubmit} className="mb-8">
          <h2 className="text-pink-600 font-bold mb-4">Dados Pessoais</h2>
          <input
            type="text"
            name="first_name"
            placeholder="Nome"
            value={userData.first_name}
            onChange={handleUserChange}
            className="w-full bg-gray-100 rounded-md p-2 mb-4"
          />
          <input
            type="text"
            name="last_name"
            placeholder="Sobrenome"
            value={userData.last_name}
            onChange={handleUserChange}
            className="w-full bg-gray-100 rounded-md p-2 mb-4"
          />
          <input
            type="date"
            name="birth_date"
            value={userData.birth_date}
            onChange={handleUserChange}
            className="w-full bg-gray-100 rounded-md p-2 mb-4"
          />
          <select
            name="gender"
            value={userData.gender}
            onChange={handleUserChange}
            className="w-full bg-gray-100 rounded-md p-2 mb-4"
          >
            <option value="" disabled>
              Selecione o gênero
            </option>
            <option value="male">Masculino</option>
            <option value="female">Feminino</option>
            <option value="outro">Outro</option>
          </select>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={userData.email}
            onChange={handleUserChange}
            className="w-full bg-gray-100 rounded-md p-2 mb-4"
          />
          <button
            type="submit"
            className="bg-blue-500 hover:bg-sky-700 text-white py-2 px-6 rounded-md shadow-md"
          >
            Alterar Dados Pessoais
          </button>
        </form>

        {/* Contatos */}
        <form onSubmit={handleContactSubmit} className="mb-8">
          <h2 className="text-pink-600 font-bold mb-4">Contatos</h2>
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
            type="text"
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
            Alterar Contatos
          </button>
        </form>

        {/* Formação */}
        <form onSubmit={handleEducationSubmit} className="mb-8">
          <h2 className="text-pink-600 font-bold mb-4">Formação</h2>
          <input
            type="text"
            name="institution"
            placeholder="Instituição"
            onChange={handleEducationChange}
            className="w-full bg-gray-100 rounded-md p-2 mb-4"
          />
          <input
            type="text"
            name="title"
            placeholder="Formação"
            onChange={handleEducationChange}
            className="w-full bg-gray-100 rounded-md p-2 mb-4"
          />
          <input
            type="number"
            name="duration"
            placeholder="Duração"
            onChange={handleEducationChange}
            className="w-full bg-gray-100 rounded-md p-2 mb-4"
          />
          <button
            type="submit"
            className="bg-blue-500 hover:bg-sky-700 text-white py-2 px-6 rounded-md shadow-md"
          >
            Adicionar Formação
          </button>
        </form>

        {/* Experiência Profissional */}
        <form onSubmit={handleExperienceSubmit} className="mb-8">
          <h2 className="text-pink-600 font-bold mb-4">Experiência</h2>
          <input
            type="text"
            name="company"
            placeholder="Empresa"
            onChange={handleExperienceChange}
            className="w-full bg-gray-100 rounded-md p-2 mb-4"
          />
          <input
            type="text"
            name="role"
            placeholder="Cargo"
            onChange={handleExperienceChange}
            className="w-full bg-gray-100 rounded-md p-2 mb-4"
          />
          <input
            type="text"
            name="description"
            placeholder="Descrição"
            onChange={handleExperienceChange}
            className="w-full bg-gray-100 rounded-md p-2 mb-4"
          />
          <button
            type="submit"
            className="bg-blue-500 hover:bg-sky-700 text-white py-2 px-6 rounded-md shadow-md"
          >
            Adicionar Experiência
          </button>
        </form>
      </div>
      <button
          onClick={logout}
          className="absolute top-4 right-4 bg-red-500 hover:bg-red-700 text-white py-2 px-6 rounded-md shadow-md"
        >
          Logout
        </button>
    </div>
  );
};

export default Home;
