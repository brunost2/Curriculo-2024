import React from 'react';
import Link from 'next/link';
const AcademicInfo = () => {
  return (
    <div>
      <h1 className="flex items-center">
        <span className="material-symbols-outlined">school</span> Informações acadêmicas
      </h1>
      <h1>Faculdade:
               <Link href="https://portal.anhembi.br/" class="text-green-600"> Universidade Anhembi Morumbi</Link>
                <p>Curso: <a href=""></a></p>
              </h1>
          </div>

      );
};

export default AcademicInfo;