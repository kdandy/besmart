import Hati from './images/hati.png'
import { Transition } from '@tailwindui/react';
export const About = () => {
    return (
      <div className="px-4 py-16 mx-auto sm:max-w-2xl md:max-w-screen lg:max-w-screen-xl md:px-0 lg:px-8 lg:py-20">
        <div className="grid  md:grid-cols-2">
          <div className="flex flex-col justify-center  lg:max-w-lg">
            <div className="text-xs font-bold text-red-400 uppercase tracking-widest p-2" data-aos="flip-up">about</div>
            <div className=" mb-6">
              <h2 data-aos="fade-right" className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-700 sm:text-4xl sm:leading-none">
                Apa itu Hepatitis?
              </h2>
              <p className="text-base text-gray-700 md:text-lg" data-aos="fade-right">
             <span className="text-red-400" >Hepatitis</span>  merupakan penyakit yang ditandai dengan peradangan pada organ hati. 
              Kondisi ini bisa terjadi karena infeksi virus, kebiasaan minum alkohol, paparan zat 
              beracun atau obat-obatan tertentu. 
              </p>
              <p className="text-base text-gray-700 md:text-lg mt-4" data-aos="fade-right"
     >
              Berdasarkan sifatnya hepatitis dibedakan menjadi dua yaitu 
              hepatitis <span className="text-red-400">akut</span> dan <span className="text-red-400">kronis</span>, keduanya sama-sama dapat menggangu 
              berbagai fungsi metabolisme.
              </p>
            </div>
            <div>
              <button data-aos="zoom-in"
                href="/"
                aria-label=""
                className="transition duration-150 ease-in-out inline-flex items-center bg-red-400 rounded-full py-2 px-6 font-semibold  text-white "
              >
                Lebih lanjut 
                <svg
                  className="inline-block w-3 ml-2"
                  fill="currentColor"
                  viewBox="0 0 12 12"
                >
                  <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z" />
                </svg>
              </button>
            </div>
          </div>
          <div className="flex items-center justify-center rounded-full  -mx-4 lg:pl-8 lg:bg-blue-300">
            <div className="flex-col items-center px-2 flex justify-center">
             <img data-aos="zoom-in" src={Hati} alt="" className=' mx-auto w-9/12 mt-5 md:mt-0 md:w-9/12 lg:w-1/2 animate-pulse-slow'/>
            </div>
          </div>
        </div>
      </div>
    );
  };
  export default About