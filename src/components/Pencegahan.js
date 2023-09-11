export const Pencegahan = () => {
    return (
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 ">
        <h5 className="text-center mb-8 text-4xl font-extrabold leading-none md:pl-2 " data-aos="flip-up">
          Penanganan dan {' '}
          <br className="hidden md:block" />
          Pengobatan{' '}
          <span className="inline-block text-red-400">
           Hepatitis
          </span>
        </h5>
        <div className="py-5 text-lg font-bold text-center" data-aos="flip-up">Pengobatan</div>
        <p data-aos="fade-up" className="text-md text-center">Pengobatan hepatitis disesuaikan dengan jenis hepatitis dan tingkat keparahannya. Metode pengobatan untuk hepatitis yang dapat dilakukan dengan pemberian obat-obatan dan transplantasi hati.
      Beberapa obat yang digunakan untuk mengobati penyakit hepatitis antara lain interferon, imunosupresan, antivirus, dan cacing hati. Pemberian obat-obatan untuk penderita hepatitis juga harus berhati-hati, karena fungsi hati sedang terganggu.
        Bila hepatitis sudah menyebabkan kerusakan hati yang berat, dokter akan merekomendasikan tindakan transplantasi hati. Melalui prosedur ini, organ hati pasien yang rusak akan diganti dengan organ hati yang sehat dari pendonor.</p>
        <div className="py-5 text-lg font-bold text-center" data-aos="flip-up">Pencegahan</div>
        <div className="grid gap-3 row-gap-3 lg:grid-cols-2 ">

          <ul className="space-y-3 " data-aos="fade-right">
            <li className="flex items-start jus">
              <span className="mr-1">
                <svg
                  className="w-5 h-5 mt-px text-red-400"
                  stroke="currentColor"
                  viewBox="0 0 52 52"
                >
                  <polygon
                    strokeWidth="4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="none"
                    points="29 13 14 29 25 29 23 39 38 23 27 23"
                  />
                </svg>
              </span>
              Melakukan vaksinasi
            </li>
            <li className="flex items-start">
              <span className="mr-1">
                <svg
                  className="w-5 h-5 mt-px text-red-400"
                  stroke="currentColor"
                  viewBox="0 0 52 52"
                >
                  <polygon
                    strokeWidth="4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="none"
                    points="29 13 14 29 25 29 23 39 38 23 27 23"
                  />
                </svg>
              </span>
              Mengurangi konsumsi alkohol
            </li>
            <li className="flex items-start">
              <span className="mr-1">
                <svg
                  className="w-5 h-5 mt-px text-red-400"
                  stroke="currentColor"
                  viewBox="0 0 52 52"
                >
                  <polygon
                    strokeWidth="4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="none"
                    points="29 13 14 29 25 29 23 39 38 23 27 23"
                  />
                </svg>
              </span>
              Mencuci bahan makanan yang dikonsumsi, terutama kerang dan tiram, sayuran, serta buah-buahan
            </li>
          </ul>
          <ul className="space-y-3 float-right" data-aos="fade-left">
            <li className="flex items-start">
              <span className="mr-1">
                <svg
                  className="w-5 h-5 mt-px text-red-400"
                  stroke="currentColor"
                  viewBox="0 0 52 52"
                >
                  <polygon
                    strokeWidth="4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="none"
                    points="29 13 14 29 25 29 23 39 38 23 27 23"
                  />
                </svg>
              </span>
              Tidak berbagi pakai sikat gigi, pisau cukur, atau jarum suntik dengan orang lain
            </li>
            <li className="flex items-start">
              <span className="mr-1">
                <svg
                  className="w-5 h-5 mt-px text-red-400"
                  stroke="currentColor"
                  viewBox="0 0 52 52"
                >
                  <polygon
                    strokeWidth="4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="none"
                    points="29 13 14 29 25 29 23 39 38 23 27 23"
                  />
                </svg>
              </span>
              Tidak menyentuh darah tanpa sarung tangan pelindung
            </li>
            <li className="flex items-start">
              <span className="mr-1">
                <svg
                  className="w-5 h-5 mt-px text-red-400"
                  stroke="currentColor"
                  viewBox="0 0 52 52"
                >
                  <polygon
                    strokeWidth="4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="none"
                    points="29 13 14 29 25 29 23 39 38 23 27 23"
                  />
                </svg>
              </span>
              Melakukan hubungan seksual yang aman
            </li>
          </ul>
        </div>
      </div>

      
    );
  };
  export default Pencegahan