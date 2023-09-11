import { Disclosure, Transition } from "@headlessui/react";


export const List = () => {
  return (
    <>
      <div className="mb-5 bg-gray-100 py-10 ">
        <h1 className="text-3xl font-bold text-center text-gray-700 mb-5" data-aos="fade-up">Penyebab Hepatitis</h1>
        <div className="w-full flex justify-center">

          <p className=" text-center w-9/12 lg:w-4/12"data-aos="fade-up">Penyakit Hepatitis terbagi menjadi
            beberapa jenis dan dapat disebabkan oleh beberapa hal diantaranya</p>
        </div>
        <div className="container px-6 mx-auto mt-8">
          <div className="grid grid-cols-1 gap-2  lg:gap-4 w-full lg:w-9/12 mx-auto">
            {/* list */}
            <div className=" rounded-lg shadow-lg bg-white " data-aos="fade-right">
              <div className="p-4">
                <Disclosure className="w-full" >
                  {({ open }) => (
                    <>
                      <Disclosure.Button className="w-full text-left flex items-center justify-between transition duration-150 ease-in-out">

                        <div className="flex gap-2">

                          <div className="">

                            <svg width="47" height="49" viewBox="0 0 47 49" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <circle cx="23.5" cy="25.5" r="23.5" fill="url(#paint0_linear_92_508)" />
                              <path d="M26.968 31.032H18.584L17.24 35H11.512L19.64 12.536H25.976L34.104 35H28.312L26.968 31.032ZM25.56 26.808L22.776 18.584L20.024 26.808H25.56Z" fill="white" />
                              <defs>
                                <linearGradient id="paint0_linear_92_508" x1="13.9336" y1="-2.78319" x2="29.9469" y2="38.8097" gradientUnits="userSpaceOnUse">
                                  <stop stop-color="#FFEC44" />
                                  <stop offset="1" stop-color="#F87171" />
                                </linearGradient>
                              </defs>
                            </svg>


                          </div>
                          <div className="">
                            <p className="font bold text-gray-400 text-xs uppercase">HAV</p>
                            <span className="font-bold text-md text-red-400">Hepatitis A</span>
                            <p className="text-gray-700 text-xs font-semibold">Disebabkan oleh virus hepatitis A</p>
                          </div>
                        </div>


                        <div className="">
                          <div className={`${open ? 'rotate-180 transform' : ''} h-5 w-5 text-purple-500`}>
                            <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M18.2083 8.625L11.5 15.3333L4.79166 8.625" stroke="#888888" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                          </div>
                        </div>
                      </Disclosure.Button>
                      <Transition
                        show={open}
                        enter="transition-all duration-300 ease-in-out"
                        enterFrom="transform scale-95 opacity-0"
                        enterTo="transform scale-100 opacity-100"
                        leave="transition duration-75 ease-out"
                        leaveFrom="transform scale-100 opacity-100"
                        leaveTo="transform scale-95 opacity-0"
                      >
                        <Disclosure.Panel static className=" mt-3 px-14 ">
                          <div className="relative">
                          Dapat ditularkan melalui makanan atau air minum yang terkontaminasi feses dari pengidap hepatitis A.
                          </div>
                        </Disclosure.Panel>
                      </Transition>

                    </>
                  )}
                </Disclosure>
              </div>

            </div>
            <div className=" rounded-lg shadow-lg bg-white" data-aos="fade-right" data-aos-delay-="20" >
              <div className="p-4">
                <Disclosure className="w-full" >
                  {({ open }) => (
                    <>
                      <Disclosure.Button className="w-full text-left flex items-center justify-between ">

                        <div className="flex gap-2">

                          <div className="">

                            <svg width="47" height="47" viewBox="0 0 47 47" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <circle cx="23.5" cy="23.5" r="23.5" fill="url(#paint0_linear_92_571)" />
                              <path d="M28.584 23.48C29.8853 23.7573 30.9307 24.408 31.72 25.432C32.5093 26.4347 32.904 27.5867 32.904 28.888C32.904 30.7653 32.2427 32.2587 30.92 33.368C29.6187 34.456 27.7947 35 25.448 35H14.984V12.536H25.096C27.3787 12.536 29.16 13.0587 30.44 14.104C31.7413 15.1493 32.392 16.568 32.392 18.36C32.392 19.6827 32.04 20.7813 31.336 21.656C30.6533 22.5307 29.736 23.1387 28.584 23.48ZM20.456 21.624H24.04C24.936 21.624 25.6187 21.432 26.088 21.048C26.5787 20.6427 26.824 20.056 26.824 19.288C26.824 18.52 26.5787 17.9333 26.088 17.528C25.6187 17.1227 24.936 16.92 24.04 16.92H20.456V21.624ZM24.488 30.584C25.4053 30.584 26.1093 30.3813 26.6 29.976C27.112 29.5493 27.368 28.9413 27.368 28.152C27.368 27.3627 27.1013 26.744 26.568 26.296C26.056 25.848 25.3413 25.624 24.424 25.624H20.456V30.584H24.488Z" fill="white" />
                              <defs>
                                <linearGradient id="paint0_linear_92_571" x1="13.9336" y1="-4.78319" x2="29.9469" y2="36.8097" gradientUnits="userSpaceOnUse">
                                  <stop stop-color="#FFEC44" />
                                  <stop offset="1" stop-color="#F87171" />
                                </linearGradient>
                              </defs>
                            </svg>


                          </div>
                          <div className="">
                            <p className="font bold text-gray-400 text-xs uppercase">HBV</p>
                            <span className="font-bold text-md text-red-400">Hepatitis B</span>
                            <p className="text-gray-700 text-xs font-semibold">Disebabkan oleh virus hepatitis B</p>
                          </div>
                        </div>


                        <div className="">
                          <div className={`${open ? 'rotate-180 transform' : ''} h-5 w-5 text-purple-500`}>
                            <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M18.2083 8.625L11.5 15.3333L4.79166 8.625" stroke="#888888" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                          </div>
                        </div>
                      </Disclosure.Button>
                      <Transition
                           show={open}
                           enter="transition-all duration-300 ease-in-out"
                           enterFrom="transform scale-95 opacity-0"
                           enterTo="transform scale-100 opacity-100"
                           leave="transition duration-75 ease-out"
                           leaveFrom="transform scale-100 opacity-100"
                           leaveTo="transform scale-95 opacity-0"
                      >
                      <Disclosure.Panel className="mt-3 px-14">
                        <div className="">
                        Jenis ini umumnya ditularkan melalui cairan tubuh dari pengidap jenis ini, seperti darah, cairan Miss V, dan air mani.
                        </div>
                      </Disclosure.Panel>
                      </Transition>
                    </>
                  )}
                </Disclosure>
              </div>

            </div>
            <div className=" rounded-lg shadow-lg bg-white" data-aos="fade-right" data-aos-delay-="40">
              <div className="p-4">
                <Disclosure className="w-full" >
                  {({ open }) => (
                    <>
                      <Disclosure.Button className="w-full text-left flex items-center justify-between ">

                        <div className="flex gap-2">

                          <div className="">

                            <svg width="47" height="47" viewBox="0 0 47 47" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <circle cx="23.5" cy="23.5" r="23.5" fill="url(#paint0_linear_92_560)" />
                              <path d="M13.056 23.736C13.056 21.5173 13.536 19.544 14.496 17.816C15.456 16.0667 16.7893 14.712 18.496 13.752C20.224 12.7707 22.176 12.28 24.352 12.28C27.0187 12.28 29.3013 12.984 31.2 14.392C33.0987 15.8 34.368 17.72 35.008 20.152H28.992C28.544 19.2133 27.904 18.4987 27.072 18.008C26.2613 17.5173 25.3333 17.272 24.288 17.272C22.6027 17.272 21.2373 17.8587 20.192 19.032C19.1467 20.2053 18.624 21.7733 18.624 23.736C18.624 25.6987 19.1467 27.2667 20.192 28.44C21.2373 29.6133 22.6027 30.2 24.288 30.2C25.3333 30.2 26.2613 29.9547 27.072 29.464C27.904 28.9733 28.544 28.2587 28.992 27.32H35.008C34.368 29.752 33.0987 31.672 31.2 33.08C29.3013 34.4667 27.0187 35.16 24.352 35.16C22.176 35.16 20.224 34.68 18.496 33.72C16.7893 32.7387 15.456 31.384 14.496 29.656C13.536 27.928 13.056 25.9547 13.056 23.736Z" fill="white" />
                              <defs>
                                <linearGradient id="paint0_linear_92_560" x1="13.9336" y1="-4.78319" x2="29.9469" y2="36.8097" gradientUnits="userSpaceOnUse">
                                  <stop stop-color="#FFEC44" />
                                  <stop offset="1" stop-color="#F87171" />
                                </linearGradient>
                              </defs>
                            </svg>


                          </div>
                          <div className="">
                            <p className="font bold text-gray-400 text-xs uppercase">HCV</p>
                            <span className="font-bold text-md text-red-400">Hepatitis C</span>
                            <p className="text-gray-700 text-xs font-semibold">Disebabkan oleh virus hepatitis C</p>
                          </div>
                        </div>


                        <div className="">
                          <div className={`${open ? 'rotate-180 transform' : ''} h-5 w-5 text-purple-500`}>
                            <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M18.2083 8.625L11.5 15.3333L4.79166 8.625" stroke="#888888" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                          </div>
                        </div>
                      </Disclosure.Button>
                      <Transition
                           show={open}
                           enter="transition-all duration-300 ease-in-out"
                           enterFrom="transform scale-95 opacity-0"
                           enterTo="transform scale-100 opacity-100"
                           leave="transition duration-75 ease-out"
                           leaveFrom="transform scale-100 opacity-100"
                           leaveTo="transform scale-95 opacity-0"
                      >
                          <Disclosure.Panel className="mt-3 px-14">
                        <div className="relative">
                        Cairan tubuh, terutama melalui berbagi pakai jarum suntik dan hubungan seksual tanpa kondom dapat menularkan hepatitis C.
                        </div>
                      </Disclosure.Panel>
                      </Transition>
                    
                    </>
                  )}
                </Disclosure>
              </div>

            </div>
            <div className=" rounded-lg shadow-lg bg-white" data-aos="fade-right" data-aos-delay-="60">
              <div className="p-4">
                <Disclosure className="w-full" >
                  {({ open }) => (
                    <>
                      <Disclosure.Button className="w-full text-left flex items-center justify-between ">

                        <div className="flex gap-2">

                          <div className="">

                            <svg width="47" height="47" viewBox="0 0 47 47" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <circle cx="23.5" cy="23.5" r="23.5" fill="url(#paint0_linear_92_593)" />
                              <path d="M23.4 12.536C25.768 12.536 27.8373 13.0053 29.608 13.944C31.3787 14.8827 32.744 16.2053 33.704 17.912C34.6853 19.5973 35.176 21.5493 35.176 23.768C35.176 25.9653 34.6853 27.9173 33.704 29.624C32.744 31.3307 31.368 32.6533 29.576 33.592C27.8053 34.5307 25.7467 35 23.4 35H14.984V12.536H23.4ZM23.048 30.264C25.1173 30.264 26.728 29.6987 27.88 28.568C29.032 27.4373 29.608 25.8373 29.608 23.768C29.608 21.6987 29.032 20.088 27.88 18.936C26.728 17.784 25.1173 17.208 23.048 17.208H20.456V30.264H23.048Z" fill="white" />
                              <defs>
                                <linearGradient id="paint0_linear_92_593" x1="13.9336" y1="-4.78319" x2="29.9469" y2="36.8097" gradientUnits="userSpaceOnUse">
                                  <stop stop-color="#FFEC44" />
                                  <stop offset="1" stop-color="#F87171" />
                                </linearGradient>
                              </defs>
                            </svg>


                          </div>
                          <div className="">
                            <p className="font bold text-gray-400 text-xs uppercase">HDV</p>
                            <span className="font-bold text-md text-red-400">Hepatitis D</span>
                            <p className="text-gray-700 text-xs font-semibold">Disebabkan oleh virus hepatitis A</p>
                          </div>
                        </div>


                        <div className="">
                          <div className={`${open ? 'rotate-180 transform' : ''} h-5 w-5 text-purple-500`}>
                            <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M18.2083 8.625L11.5 15.3333L4.79166 8.625" stroke="#888888" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                          </div>
                        </div>
                      </Disclosure.Button>
                      <Transition
                           show={open}
                           enter="transition-all duration-300 ease-in-out"
                           enterFrom="transform scale-95 opacity-0"
                           enterTo="transform scale-100 opacity-100"
                           leave="transition duration-75 ease-out"
                           leaveFrom="transform scale-100 opacity-100"
                           leaveTo="transform scale-95 opacity-0"
                      >

                      <Disclosure.Panel className="mt-3 px-14">
                        <div className="relative">
                        Virus hepatitis D tidak bisa berkembang biak di dalam tubuh manusia tanpa adanya hepatitis B. Hepatitis D dapat ditularkan melalui darah dan cairan tubuh lainnya.
                        </div>
                      </Disclosure.Panel>
                      </Transition>
                    </>
                  )}
                </Disclosure>
              </div>

            </div>
            <div className=" rounded-lg shadow-lg bg-white" data-aos="fade-right" data-aos-delay-="80">
              <div className="p-4">
                <Disclosure className="w-full" >
                  {({ open }) => (
                    <>
                      <Disclosure.Button className="w-full text-left flex items-center justify-between ">

                        <div className="flex gap-2">

                          <div className="">

                            <svg width="47" height="47" viewBox="0 0 47 47" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <circle cx="23.5" cy="23.5" r="23.5" fill="url(#paint0_linear_92_582)" />
                              <path d="M21.456 16.92V21.464H28.784V25.688H21.456V30.616H29.744V35H15.984V12.536H29.744V16.92H21.456Z" fill="white" />
                              <defs>
                                <linearGradient id="paint0_linear_92_582" x1="13.9336" y1="-4.78319" x2="29.9469" y2="36.8097" gradientUnits="userSpaceOnUse">
                                  <stop stop-color="#FFEC44" />
                                  <stop offset="1" stop-color="#F87171" />
                                </linearGradient>
                              </defs>
                            </svg>



                          </div>
                          <div className="">
                            <p className="font bold text-gray-400 text-xs uppercase">HEV</p>
                            <span className="font-bold text-md text-red-400">Hepatitis E</span>
                            <p className="text-gray-700 text-xs font-semibold">Disebabkan oleh virus hepatitis E</p>
                          </div>
                        </div>


                        <div className="">
                          <div className={`${open ? 'rotate-180 transform' : ''} h-5 w-5 text-purple-500`}>
                            <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M18.2083 8.625L11.5 15.3333L4.79166 8.625" stroke="#888888" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                          </div>
                        </div>
                      </Disclosure.Button>
                      <Transition 
                           show={open}
                           enter="transition-all duration-300 ease-in-out"
                           enterFrom="transform scale-95 opacity-0"
                           enterTo="transform scale-100 opacity-100"
                           leave="transition duration-75 ease-out"
                           leaveFrom="transform scale-100 opacity-100"
                           leaveTo="transform scale-95 opacity-0"
                      >

                      <Disclosure.Panel className="mt-3 px-14">
                        <div className="relative">
                        Jenis ini banyak ditemui di lingkungan yang tidak memiliki sanitasi yang baik, akibat kontaminasi virus hepatitis E pada sumber air.
                        </div>
                      </Disclosure.Panel>
                      </Transition>
                    </>
                  )}
                </Disclosure>
              </div>

            </div>
            {/* end list */}
            
          </div>
        </div>


      </div>


    </>

  )
}
export default List