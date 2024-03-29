import Image from 'next/image';
import Link from 'next/link';
import AcademicInfo from './components/AcademicInfo';
import PersonalInfo from './components/PersonalInfo';
import { Accessibility, Info } from 'lucide-react';
export default function Home() {
  return (
    <main className=" min-h-screen">
      <div>
        <div className="grid grid-cols-3  bg-black p-3 ">
          <div className="">
            <div>
              <Link href="/local.js">
                <img src="/bruno.png" alt="" className="w-[5rem]" />
              </Link>
            </div>
          </div>
          <div>
            <h1 className="text-center text-white font-bold font-mono text-4xl ">
              Bruno Santos Teixeira
              <p className="text-xl p-2">Desenvolvedor Web Full Stack</p>
            </h1>
          </div>
          <div className="flex justify-center items-center">
            <button className="text-white"> Portugês</button>
            <p className="text-white p-2"> /</p>
            <button className="text-white"> Inglês</button>
          </div>
        </div>

        <div>
          <div className="bg-black/95  text-white">
            <div>
              <h1 className="text-center font-mono text-2xl p-3">
                Sobre Mim:{' '}
              </h1>
            </div>
            <div className="grid grid-cols-2">
              <div className="">
                <PersonalInfo />
              </div>
              <div>
                <AcademicInfo />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
