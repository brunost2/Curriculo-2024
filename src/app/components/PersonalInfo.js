import {
  Accessibility,
  BookA,
  CalendarDays,
  Cpu,
  Globe,
  GraduationCap,
  Info,
  Languages,
  MapPin,
  NotebookText,
  School,
} from 'lucide-react';
import React from 'react';
import Link from 'next/link';
import SvgFig from './SvgFig';

const PersonalInfo = () => {
  return (
    <div>
      <h1 className="flex justify-center underline items-center p-2 gap-x-2">
        <Info className="" /> Informações Pessoais:
      </h1>
      <h1 className="flex items-center p-2 gap-x-2">
        <NotebookText /> Estado Civil: Solteiro
      </h1>
      <h1 className="flex items-center p-2 gap-x-2">
        <MapPin /> Localidade:
        <a href="/src/endereco.html" className="text-blue-900">
          Clique aqui para ter localização exata
        </a>
      </h1>
      <h1 className="flex items-center p-2 gap-x-2">
        <CalendarDays /> Data de Nascimento: 09/06/2000 - 23 anos -
        <a
          href="https://pt.wikipedia.org/wiki/9_de_junho"
          className="text-base text-red-500"
        >
          Curiosidades dessa data
        </a>
      </h1>
      <h1 className="flex items-center p-2 gap-x-2">
        <GraduationCap />
        Faculdade:
        <Link
          href="https://portal.anhembi.br/"
          class="text-green-600 flex items-center"
        >
          {' '}
          <SvgFig /> Universidade Anhembi Morumbi.
        </Link>
      </h1>
      <h1 className="flex items-center p-2 gap-x-2">
        {' '}
        <BookA /> Curso:
        <Link
          href="https://portal.anhembi.br/graduacao/ciencia-da-computacao/?gad_source=1&gclid=Cj0KCQiAnfmsBhDfARIsAM7MKi1CDhd3INOme8SccE7uDtTSLXDfa9NsGdDPId59vNkRhgCseMpTrqkaArZFEALw_wcB"
          class="text-green-600 flex items-center"
        >
          Ciência da Computação.
        </Link>
      </h1>
      <h1 className="flex items-center p-2 gap-x-2">
        <Cpu /> Semestre: 5º
      </h1>
      <h1 className="flex items-center p-2 gap-x-2">
        <School /> Previsão de finalização: 12/2025{' '}
      </h1>
      <h1 className='flex justify-center underline items-center p-2 gap-x-2'> <Languages/> Idiomas </h1>
      <h1 className="flex items-center p-2 gap-x-2">
        <Globe/> Portugês : Nativo. </h1>
        <h1 className="flex items-center p-2 gap-x-2">
        <Globe/> Inglês : Intermediario - Leitura e escrita / Basico - conversação.
      </h1>
      <h1 className="flex items-center p-2 gap-x-2"> <Globe/> Espanhol : Basico.</h1>
    </div>
  );
};

export default PersonalInfo;
