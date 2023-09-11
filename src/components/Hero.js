import  img  from "./images/hero.png"
import AOS from "aos";
import 'aos/dist/aos.css'
import { useEffect } from "react";
export const Hero = () => {
  useEffect(() => {
    AOS.init({
      duration:1000
    });
    AOS.refresh();
  }, [2000]);
  return (
    <>
<section class="text-gray-600 body-font md:-mt-20">
  <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
      <div className="hidden md:block mb-5 text-xs py-2 border-2 rounded-full px-2 border-red-400 bg-red-100 uppercase text-red-400" data-aos="fade-up">Informasi Kesehatan</div>
      <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900" data-aos="zoom-in">Kenali Gejala <span className="font-bold text-red-400">Hepatitis</span>
       <div className=" mt-2" data-aos="zoom-in">Sejak Dini !</div>
        
      </h1>
      <p class="mb-8 leading-relaxed max-w-screen-md lg:w-9/12" data-aos="zoom-in">Mengenal lebih dalam tentang penyebab, risiko, gejala, pengobatan, pencegahan, dan berita terbaru tentang penyakit hepatitis.</p>
      <div class="flex justify-center ">
        <button class="inline-flex  text-white bg-red-400  border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded-full text-lg transition duration-150 ease-in-out"data-aos="zoom-in">Info Selengkapnya
        <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M21.5 7L13.5 15L9.5 11L3.5 17M13.5 7H21.5H13.5ZM21.5 7V15V7Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        </button>
      </div>
    </div>
    <div class=" lg:80 md:w-1/2 w-5/6">
      <img src={img} alt="hero" data-aos="zoom-in" data-aos-delay="50" />
    </div>
  </div>
</section>
    </>
  );
};
export default Hero