import Link from "next/link";

export const Banner = () => {
  return (
    <div className="relative flex flex-col-reverse py-16 lg:pt-0 lg:flex-col lg:pb-0">
      <div className="inset-y-0 top-0 right-0 z-0 w-full max-w-xl px-4 mx-auto md:px-0 lg:pr-0 lg:mb-0 lg:mx-0 lg:w-7/12 lg:max-w-full lg:absolute xl:px-0">
        <svg
          className="absolute left-0 hidden h-full text-background transform -translate-x-1/2 lg:block"
          viewBox="0 0 100 100"
          fill="currentColor"
          preserveAspectRatio="none slice"
        >
          <path d="M50 0H100L50 100H0L50 0Z" />
        </svg>
        <img
          className="object-cover w-full h-56 rounded shadow-lg lg:rounded-none lg:shadow-none md:h-96 lg:h-full"
          src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
          alt=""
        />
      </div>
      <div className="relative flex flex-col items-start w-full max-w-xl px-4 mx-auto md:px-0 lg:px-8 lg:max-w-screen-xl">
        <div className="mb-16 lg:my-40 lg:max-w-lg lg:pr-5">
          <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-background uppercase rounded-full bg-primary">
            USS Informática
          </p>
          <h2 className="mb-5 font-sans text-3xl font-bold tracking-tight text-secondary sm:text-4xl sm:leading-none">
            Assessoria em Hardware e Administração de redes
          </h2>
          <p className="pr-5 mb-5 text-base text-gray-700 md:text-lg">
            Ofereço serviços especializados em assessoria de hardware e
            administração de redes para empresas e indivíduos que buscam
            eficiência, segurança e desempenho em seus sistemas.
          </p>
          <div className="flex items-center">
            <Link
              href="/servicos"
              className="inline-flex items-center justify-center h-12 px-6 mr-6 tracking-wide text-background transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none bg-primary font-bold"
            >
              Serviços
            </Link>
            <Link
              href="/contato"
              aria-label=""
              className="inline-flex items-center font-semibold text-secondary transition-colors duration-200 hover:text-deep-purple-accent-700"
            >
              Contato
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
