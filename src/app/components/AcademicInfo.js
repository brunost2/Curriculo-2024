import React from 'react';
import Link from 'next/link';
import SvgFig from './SvgFig';
import {
  ComputerIcon,
  LanguagesIcon,
  LucideLanguages,
  Workflow,
} from 'lucide-react';
const AcademicInfo = () => {
  return (
    <div className="Flex justify-center items-center ">
      <h1 className="flex items-center p-2 gap-x-2 justify-center underline">
        {' '}
        <Workflow />
        Habilidades:
      </h1>
      <h1 className="flex items-center p-2 gap-x-2 justify-center">
        <ComputerIcon /> Linguagens de Programação:
      </h1>
      <p className="flex justify-center items-center gap-x-2 flex-col">
        {' '}
        <Link
          href="https://developer.mozilla.org/pt-BR/docs/Web/HTML "
          className="flex items-center"
        >
          {' '}
          <img src="/html.png" alt="" className="w-[2rem]" />
          HTML:5{' '}
          <p>
            - linguagem de marcação usada para estruturar conteúdo em páginas
            web.
          </p>
        </Link>{' '}
        <p className="font-bold text-sm underline">Conhecimento Avançado</p>
      </p>
      <p className="flex justify-center items-center gap-x-2 flex-col">
        {' '}
        <Link
          href="https://developer.mozilla.org/pt-BR/docs/Web/JavaScript "
          className="flex items-center "
        >
          {' '}
          <img src="/js.png" alt="" className="w-[4rem]" />
          JavaScript{' '}
          <p>
            - Desenvolvimento web para criar interatividade e dinamismo em
              páginas.
          </p>
        </Link>{' '}
        <p className="font-bold text-sm underline">
          Conhecimento Intermediario
        </p>
      </p>
      <p className="flex justify-center items-center gap-x-2 flex-col">
        {' '}
        <Link
          href="https://developer.mozilla.org/pt-BR/docs/Web/CSS"
          className="flex items-center"
        >
          {' '}
          <img src="/css.png" alt="" className="w-[2rem]" />
          CSS {' '}
          <p>
            - Utilizada para controlar a apresentação e o layout de elementos em páginas web.
          </p>
        </Link>{' '}
        <p className="font-bold text-sm underline">Conhecimento Avançado</p>
      </p>
    </div>
  );
};

export default AcademicInfo;
