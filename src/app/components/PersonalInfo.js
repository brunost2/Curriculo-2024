import React from 'react';

const PersonalInfo = () => {
  return (
    <div>
      <h1 className="flex items-center">
        <span className="material-symbols-outlined">person</span> Informações Pessoais
      </h1>
      <h1 className="flex items-center">
        <span className="material-symbols-outlined">description</span> Estado Civil: Solteiro
      </h1>
      <h1 className="flex items-center">
        <span className="material-symbols-outlined text-green-300">location_on</span> Localidade:
        <a href="/src/endereco.html" className="text-blue-900">
          Clique aqui para ter localização exata
        </a>
      </h1>
      <h1 className="flex items-center">
        <span className="material-symbols-outlined">calendar_month</span> Data de Nascimento: 09/06/2000 -
        <a href="https://pt.wikipedia.org/wiki/9_de_junho" className="text-base text-red-500">
          Curiosidades dessa data
        </a>
      </h1>
    </div>
  );
};

export default PersonalInfo;
