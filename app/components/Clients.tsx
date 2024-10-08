import { ClientLogoType } from "app/clientes/page";
import Link from "next/link";

const CLIENTS_ASSETS: ClientLogoType[] = [
  {
    src: "/static/acer.png",
    altText: "Logo da Acer",
    style: "w-48 xl:w-52",
  },
  {
    src: "/static/3com.png",
    altText: "Logo da 3com",
    style: "w-44 xl:w-48",
  },
  {
    src: "/static/amd.png",
    altText: "Logo da AMD",
    style: "w-48 xl:w-52",
  },
  {
    src: "/static/asus.png",
    altText: "Logo da Asus",
    style: "w-48 xl:w-52",
  },
  {
    src: "/static/Logo_Interalli_Positiva_Principal.png",
    altText: "Logo do grupo Interalli",
    style: "w-52 xl:w-56",
  },
  {
    src: "/static/cliente3.png",
    altText: "Logo de Altair dos Santos",
    style: "w-48 xl:w-52",
  },
  {
    src: "/static/cliente5.png",
    altText: "Logo de Originale",
    style: "w-48 xl:w-52",
  },
  {
    src: "/static/cliente7.png",
    altText: "Logo de Liderauto",
    style: "w-48 xl:w-52",
  },
];

export const Clients = () => {
  return (
    <section className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <h1 className="font-bold text-3xl text-center">
        Empresas e marcas que atendo
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-rows-2 lg:grid-cols-4 gap-10 mt-10 items-center">
        {CLIENTS_ASSETS.map((client) => (
          <img
            src={client.src}
            alt={client.altText}
            key={client.altText}
            className={`object-fill max-w-48 mx-auto 
              ${client.style}
              `}
            width={100}
            height={100}
          />
        ))}
      </div>
      <div className="flex justify-center mt-10">
        <Link
          href="/clientes"
          className="inline-flex self-center items-center justify-center mx-auto h-12 px-6 font-medium tracking-wide transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none bg-primary text-background"
          aria-label="Contato"
          title="Contato"
        >
          Ver mais
        </Link>
      </div>
    </section>
  );
};
