import Image from "next/image";
import Client1 from "public/static/cliente1.png";
import Client2 from "public/static/sindivet_logo.png";
import Client3 from "public/static/cliente3.png";
import Client4 from "public/static/cliente4.png";
import Client5 from "public/static/cliente5.png";
import Client6 from "public/static/cliente6.png";
import Client7 from "public/static/cliente7.png";
import Client8 from "public/static/cliente8.png";

import Brand1 from "public/static/acer.png";
import Brand2 from "public/static/asus.png";
import Brand3 from "public/static/microsoft.png";
import Brand4 from "public/static/samsung.png";
import Brand5 from "public/static/lenovo.png";
import Brand6 from "public/static/amd.png";
import Brand7 from "public/static/3com.png";
import Brand8 from "public/static/compaq.png";
import Brand9 from "public/static/hp.png";
import Brand10 from "public/static/ibm.png";
import Brand12 from "public/static/adobe.png";
import Brand13 from "public/static/dell.png";

export default function ClientsPage() {
  return (
    <section className="px-4 py-16 md:px-24 lg:px-8 lg:py-20">
      <h1 className="text-center text-3xl font-bold">
        Clientes que Confiam em Nós
      </h1>
      <div className="flex flex-wrap items-center justify-center gap-10 mt-10">
        <Image
          src={Client1}
          alt="Cliente de USS Informática"
          className="w-40 xl:w-44"
        />
        <Image
          src={Client2}
          alt="Cliente de USS Informática"
          className="w-40 xl:w-44"
        />
        <Image
          src={Client3}
          alt="Cliente de USS Informática"
          className="w-40 xl:w-44"
        />
        <Image
          src={Client4}
          alt="Cliente de USS Informática"
          className="w-40 xl:w-44"
        />
        <Image
          src={Client5}
          alt="Cliente de USS Informática"
          className="w-40 xl:w-44"
        />
        <Image
          src={Client6}
          alt="Cliente de USS Informática"
          className="w-40 xl:w-44"
        />
        <Image
          src={Client7}
          alt="Cliente de USS Informática"
          className="w-40 xl:w-44"
        />
        <Image
          src={Client8}
          alt="Cliente de USS Informática"
          className="w-40 xl:w-44"
        />
      </div>
      <h1 className="text-center text-3xl font-bold mt-10">
        Marcas em que Somos Especialistas
      </h1>
      <div className="flex flex-wrap items-center justify-center gap-10 mt-10">
        <Image
          src={Brand1}
          alt="Marca especialista de USS Informática"
          className="w-40 xl:w-44"
        />
        <Image
          src={Brand2}
          alt="Marca especialista de USS Informática"
          className="w-40 xl:w-44"
        />
        <Image
          src={Brand3}
          alt="Marca especialista de USS Informática"
          className="w-40 xl:w-44"
        />
        <Image
          src={Brand4}
          alt="Marca especialista de USS Informática"
          className="w-40 xl:w-44"
        />
        <Image
          src={Brand5}
          alt="Marca especialista de USS Informática"
          className="w-40 xl:w-44"
        />
        <Image
          src={Brand6}
          alt="Marca especialista de USS Informática"
          className="w-40 xl:w-44"
        />
        <Image
          src={Brand7}
          alt="Marca especialista de USS Informática"
          className="w-40 xl:w-44"
        />
        <Image
          src={Brand8}
          alt="Marca especialista de USS Informática"
          className="w-40 xl:w-44"
        />
        <Image
          src={Brand9}
          alt="Marca especialista de USS Informática"
          className="w-40 xl:w-44"
        />
        <Image
          src={Brand10}
          alt="Marca especialista de USS Informática"
          className="w-40 xl:w-44"
        />
        <Image
          src={Brand12}
          alt="Marca especialista de USS Informática"
          className="w-40 xl:w-44"
        />
        <Image
          src={Brand13}
          alt="Marca especialista de USS Informática"
          className="w-40 xl:w-44"
        />
      </div>
    </section>
  );
}
