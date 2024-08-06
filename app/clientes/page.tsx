import Image from "next/image";

export default function ClientsPage() {
  return (
    <section className="px-4 py-16 md:px-24 lg:px-8 lg:py-20">
      <h1 className="text-center text-3xl font-bold">
        Clientes que Confiam em Nós
      </h1>
      <div className="flex flex-wrap items-center justify-center gap-10 mt-10">
        <Image
          src="/static/cliente1.png"
          alt="Cliente de USS Informática"
          className="w-40 xl:w-44"
          width={100}
          height={100}
        />
        <Image
          src="/static/sindivet_logo.png"
          alt="Cliente de USS Informática"
          className="w-40 xl:w-44"
          width={100}
          height={100}
        />
        <Image
          src="/static/cliente3.png"
          alt="Cliente de USS Informática"
          className="w-40 xl:w-44"
          width={100}
          height={100}
        />
        <Image
          src="/static/cliente4.png"
          alt="Cliente de USS Informática"
          className="w-40 xl:w-44"
          width={100}
          height={100}
        />
        <Image
          src="/static/cliente5.png"
          alt="Cliente de USS Informática"
          className="w-40 xl:w-44"
          width={100}
          height={100}
        />
        <Image
          src="/static/cliente6.png"
          alt="Cliente de USS Informática"
          className="w-40 xl:w-44"
          width={100}
          height={100}
        />
        <Image
          src="/static/cliente7.png"
          alt="Cliente de USS Informática"
          className="w-40 xl:w-44"
          width={100}
          height={100}
        />
        <Image
          src="/static/cliente8.png"
          alt="Cliente de USS Informática"
          className="w-40 xl:w-44"
          width={100}
          height={100}
        />
      </div>
      <h1 className="text-center text-3xl font-bold mt-10">
        Marcas em que Somos Especialistas
      </h1>
      <div className="flex flex-wrap items-center justify-center gap-10 mt-10">
        <Image
          src="/static/acer.png"
          alt="Marca especialista de USS Informática"
          className="w-40 xl:w-44"
          width={100}
          height={100}
        />
        <Image
          src="/static/asus.png"
          alt="Marca especialista de USS Informática"
          className="w-40 xl:w-44"
          width={100}
          height={100}
        />
        <Image
          src="/static/microsoft.png"
          alt="Marca especialista de USS Informática"
          className="w-40 xl:w-44"
          width={100}
          height={100}
        />
        <Image
          src="/static/samsung.png"
          alt="Marca especialista de USS Informática"
          className="w-40 xl:w-44"
          width={100}
          height={100}
        />
        <Image
          src="/static/lenovo.png"
          alt="Marca especialista de USS Informática"
          className="w-40 xl:w-44"
          width={100}
          height={100}
        />
        <Image
          src="/static/amd.png"
          alt="Marca especialista de USS Informática"
          className="w-40 xl:w-44"
          width={100}
          height={100}
        />
        <Image
          src="/static/3com.png"
          alt="Marca especialista de USS Informática"
          className="w-40 xl:w-44"
          width={100}
          height={100}
        />
        <Image
          src="/static/compaq.png"
          alt="Marca especialista de USS Informática"
          className="w-40 xl:w-44"
          width={100}
          height={100}
        />
        <Image
          src="/static/hp.png"
          alt="Marca especialista de USS Informática"
          className="w-40 xl:w-44"
          width={100}
          height={100}
        />
        <Image
          src="/static/ibm.png"
          alt="Marca especialista de USS Informática"
          className="w-40 xl:w-44"
          width={100}
          height={100}
        />
        <Image
          src="/static/adobe.png"
          alt="Marca especialista de USS Informática"
          className="w-40 xl:w-44"
          width={100}
          height={100}
        />
        <Image
          src="/static/dell.png"
          alt="Marca especialista de USS Informática"
          className="w-40 xl:w-44"
          width={100}
          height={100}
        />
      </div>
    </section>
  );
}
