import Image from "next/image";
import Brand1 from "public/static/acer.png";
import Brand2 from "public/static/3com.png";
import Brand3 from "public/static/amd.png";
import Brand4 from "public/static/asus.png";
import Client5 from "public/static/cliente1.png";
import Client6 from "public/static/cliente3.png";
import Client7 from "public/static/cliente5.png";
import Client8 from "public/static/cliente7.png";
import Link from "next/link";

const CLIENTS_ASSETS = [
  {
    src: Brand1,
    altText: "Logo da Acer",
  },
  {
    src: Brand2,
    altText: "Logo da 3com",
  },
  {
    src: Brand3,
    altText: "Logo da AMD",
  },
  {
    src: Brand4,
    altText: "Logo da Asus",
  },
  {
    src: Client5,
    altText: "Logo do grupo Interalli",
  },
  {
    src: Client6,
    altText: "Logo de Altair dos Santos",
  },
  {
    src: Client7,
    altText: "Logo de Originale",
  },
  {
    src: Client8,
    altText: "Logo de Liderauto",
  },
];

export const Clients = () => {
  return (
    <section className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <h1 className="font-bold text-3xl text-center">
        Empresas e marcas que atendo
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-rows-2 lg:grid-cols-4 gap-10 mt-10">
        {CLIENTS_ASSETS.map((client) => (
          <Image
            src={client.src}
            alt={client.altText}
            key={client.altText}
            className="object-fill max-w-48 mx-auto"
          />
        ))}
      </div>
      <div className="flex justify-center">
        <Link
          href="/clients"
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
