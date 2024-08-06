import Image from "next/image";
import Link from "next/link";

const footerItems = {
  "/": {
    name: "Início",
  },
  "/servicos": {
    name: "Serviços",
  },
  "/clientes": {
    name: "Clientes",
  },
  "/contato": {
    name: "Contato",
  },
};

export default function Footer() {
  return (
    <footer>
      <div className="flex flex-col mx-3 bg-white rounded-lg">
        <div className="w-full draggable">
          <div className="container flex flex-col mx-auto">
            <div className="flex flex-col items-center w-full my-20">
              <div className="flex flex-col items-center gap-6 mb-8">
                <div className="flex flex-wrap items-center justify-center gap-5 lg:gap-12 gap-y-3 lg:flex-nowrap text-dark-grey-900">
                  {Object.entries(footerItems).map(([path, { name }]) => {
                    return (
                      <Link
                        key={path}
                        href="path"
                        className="text-gray-600 hover:text-gray-900"
                      >
                        {name}
                      </Link>
                    );
                  })}
                </div>
              </div>
              <div className="flex flex-col md:flex-row items-center mb-5">
                <Image
                  src="/static/logo-uss-icon-com-info.png"
                  alt="Logo de USS Informática"
                  width={300}
                  height={300}
                  className="w-40"
                />
              </div>
              <div className="flex items-center">
                <p className="text-base font-normal leading-7 text-center text-grey-700">
                  © Todos os direitos reservados para USS Informatica
                </p>
              </div>
              <div className="flex flex-col items-center mt-10 gap-5">
                <Image
                  src="/static/andrevieira.png"
                  alt="Logo de André Luiz Vieira"
                  width={300}
                  height={300}
                  className="w-20"
                />
                <p>
                  Desenvolvido por
                  <a
                    href="https://andreluizv.dev.br"
                    className="font-bold text-primary ml-1"
                    target="_blank"
                  >
                    André Luiz Vieira
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
