export type ClientLogoType = {
  src: string;
  altText: string;
  background?: boolean;
  style?: string;
};

const CLIENTS_ASSETS: ClientLogoType[] = [
  {
    src: "/static/Logo_Interalli_Positiva_Principal.png",
    altText: "Cliente de USS Informática",
    style: "w-48 xl:w-52",
  },
  {
    src: "/static/sindivet_logo.png",
    altText: "Cliente de USS Informática",
  },
  {
    src: "/static/cliente3.png",
    altText: "Cliente de USS Informática",
  },
  {
    src: "/static/cliente4.png",
    altText: "Cliente de USS Informática",
  },
  {
    src: "/static/cliente5.png",
    altText: "Cliente de USS Informática",
  },
  {
    src: "/static/cliente6.png",
    altText: "Cliente de USS Informática",
  },
  {
    src: "/static/cliente7.png",
    altText: "Cliente de USS Informática",
  },
  {
    src: "/static/cliente8.png",
    altText: "Cliente de USS Informática",
  },
  {
    src: "/static/logo-studdio-bagni.png",
    altText: "Cliente de USS Informática",
    background: true,
  },
  {
    src: "/static/paulo-celles-imoveis-logo.png",
    altText: "Cliente de USS Informática",
    background: true,
  },
  {
    src: "/static/rodrigo_alarcon.png",
    altText: "Cliente de USS Informática",
  },
  {
    src: "/static/logo-ced.png",
    altText: "Cliente de USS Informática",
  },
];

const BRAND_ASSETS: ClientLogoType[] = [
  {
    src: "/static/acer.png",
    altText: "Marca especialista de USS Informática",
  },
  {
    src: "/static/asus.png",
    altText: "Marca especialista de USS Informática",
  },
  {
    src: "/static/microsoft.png",
    altText: "Marca especialista de USS Informática",
  },
  {
    src: "/static/samsung.png",
    altText: "Marca especialista de USS Informática",
  },
  {
    src: "/static/lenovo.png",
    altText: "Marca especialista de USS Informática",
  },
  {
    src: "/static/amd.png",
    altText: "Marca especialista de USS Informática",
  },
  {
    src: "/static/3com.png",
    altText: "Marca especialista de USS Informática",
  },
  {
    src: "/static/compaq.png",
    altText: "Marca especialista de USS Informática",
  },
  {
    src: "/static/hp.png",
    altText: "Marca especialista de USS Informática",
  },
  {
    src: "/static/ibm.png",
    altText: "Marca especialista de USS Informática",
  },
  {
    src: "/static/adobe.png",
    altText: "Marca especialista de USS Informática",
  },
  {
    src: "/static/dell.png",
    altText: "Marca especialista de USS Informática",
  },
];

export default function ClientsPage() {
  return (
    <section className="px-4 py-16 md:px-24 lg:px-8 lg:py-20">
      <h1 className="text-center text-3xl font-bold">
        Clientes que Confiam em Nós
      </h1>
      <div className="flex flex-wrap items-center justify-center gap-10 mt-10">
        {CLIENTS_ASSETS.map((client) => (
          <img
            src={client.src}
            alt={client.altText}
            className={`w-52 xl:w-56
              ${client.background ? "bg-gray-200 p-10 rounded-xl" : null}
              ${client.style}`}
            width={100}
            height={100}
          />
        ))}
      </div>
      <h1 className="text-center text-3xl font-bold mt-10">
        Marcas em que Somos Especialistas
      </h1>
      <div className="flex flex-wrap items-center justify-center gap-10 mt-10">
        {BRAND_ASSETS.map((client) => (
          <img
            src={client.src}
            alt={client.altText}
            className="w-40 xl:w-44"
            width={100}
            height={100}
          />
        ))}
      </div>
    </section>
  );
}
