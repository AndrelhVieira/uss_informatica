"use client";

import React, { useState } from "react";

const ClientList = () => {
  const clients = [
    "Escritório de Advocacia José Carlos Passuelo",
    "Clínica Médica Dr. Raul Clóvis",
    "Studdio Bagni",
    "Ivan Amaral Contabilidade",
    "Giroldo Constrções Civis Ltda.",
    "Realiza Construções Civis",
    "Distribuidora de Bebidas Pinheiros Ltda.",
    "Paulo Celles IMóveis",
    "TG Lubrificantes - Araucária",
    "Dr. Ogier Buchi",
    "Escritório de Advocacia Paulo Macarini",
    "Clínica Médica Macarini",
    "Rodrigo Alarcón Design de Jóias",
    "Florido Contabilidade",
    "Padilha Indústria e Comércio de Conservas Ltda.",
    "Zem Lataria e Mecânica",
    "Sindivet - Sindicato dos Médicos Veterinários do Paraná",
    "Qualitá Móveis para Escritório",
    "Nelci Mainardes",
    "MR Contabilidade",
  ];

  const [showingAll, setShowingAll] = useState(false);
  const initialDisplayCount = 0;

  const toggleShowAll = () => {
    setShowingAll(!showingAll);
  };

  return (
    <div className="p-6 pt-10">
      <button
        onClick={toggleShowAll}
        className="h-12 px-6 text-background transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none bg-primary font-bold mx-auto flex justify-center items-center w-40"
      >
        {showingAll ? "Ver Menos" : "Ver Mais"}
      </button>
      <div className="container mx-auto flex mt-10">
        <ul className="mx-2 flex flex-wrap gap-x-10 gap-y-5">
          {(showingAll ? clients : clients.slice(0, initialDisplayCount)).map(
            (client, index) => (
              <li
                key={index}
                className="list-disc list-inside py-1 italic font-semibold"
              >
                {client}
              </li>
            )
          )}
        </ul>
      </div>
    </div>
  );
};

export default ClientList;
