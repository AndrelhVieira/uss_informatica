import { MdHardware } from "react-icons/md";
import { FaShieldVirus } from "react-icons/fa";
import { FaWindows } from "react-icons/fa";
import { PiNetwork } from "react-icons/pi";
import { GrServers } from "react-icons/gr";
import { HiOutlineLockClosed } from "react-icons/hi2";
import Link from "next/link";

const SERVICES_ASSETS = [
  {
    icon: MdHardware,
    title: "Montagem e Manutenção de Hardware",
    text: "Realizamos montagem e manutenção completa de hardware para garantir que seus dispositivos funcionem perfeitamente. Sejam PCs, notebooks, netbooks, monitores ou impressoras, estamos prontos para oferecer suporte técnico especializado.",
  },
  {
    icon: FaShieldVirus,
    title: "Reparo de Softwares e Remoção de Vírus",
    text: "Oferecemos serviços de reparo de software, remoção de vírus e configuração de programas específicos. Além disso, instalamos e configuramos antivírus para proteger seus dispositivos e otimizar sua performance.",
  },
  {
    icon: FaWindows,
    title: "Instalação e Configuração de Sistemas Operacionais",
    text: "Instalamos e configuramos sistemas operacionais e demais softwares em uma variedade de dispositivos, incluindo PCs, notebooks, netbooks, modems e roteadores wireless, garantindo que tudo funcione de maneira eficiente e segura.",
  },
  {
    icon: PiNetwork,
    title: "Projetos de Ambiente de Rede e Cibersegurança",
    text: "Desenvolvemos projetos personalizados de ambientes de rede, cuidando da instalação e configuração para atender às suas necessidades específicas. Além disso, implementamos medidas de cibersegurança para proteger sua rede contra ameaças e garantir uma operação segura.",
  },
  {
    icon: GrServers,
    title: "Configuração de Servidores",
    text: "Configuramos servidores baseados em Windows e Linux, proporcionando uma infraestrutura estável e segura para suas operações, seja para uso pessoal ou empresarial.",
  },
  {
    icon: HiOutlineLockClosed,
    title: "Backup de Dados e Segurança da Informação",
    text: "Oferecemos soluções completas de backup de dados e segurança da informação, protegendo seus dados valiosos contra perdas e ameaças, e garantindo a recuperação rápida e eficiente em caso de imprevistos.",
  },
];

export const Services = () => {
  return (
    <div
      className="px-3 md:lg:xl:px-40   border-t border-b py-20 bg-opacity-10"
      style={{
        backgroundImage:
          "url('https://www.toptal.com/designers/subtlepatterns/uploads/dot-grid.png')",
      }}
    >
      <div className="grid grid-cols-1 md:lg:xl:grid-cols-3 group bg-background shadow-xl shadow-neutral-100 border ">
        {SERVICES_ASSETS.map((service) => (
          <div
            className="p-10 flex flex-col items-center text-center group md:lg:xl:border-r md:lg:xl:border-b hover:bg-slate-50 cursor-pointer"
            key={service.title}
          >
            <span className="p-5 rounded-full bg-primary text-background shadow-lg shadow-primary text-4xl">
              <service.icon />
            </span>
            <p className="text-xl font-medium text-slate-700 mt-3">
              {service.title}
            </p>
            <p className="mt-2 text-sm text-slate-500">{service.text}</p>
          </div>
        ))}
      </div>
      <div className="w-full flex-col bg-secondary shadow-xl shadow-secondary py-10 px-20 flex justify-between items-center lg:flex-row gap-5">
        <p className=" text-background text-center">
          <span className="text-3xl font-medium">
            Gostou e quer solicitar um orçamento ou pedido?
          </span>
        </p>
        <Link
          href="/contato"
          className="px-5 py-3  font-medium text-background shadow-xl hover:bg-background duration-150 bg-primary rounded-sm hover:text-secondary text-center"
        >
          Entre em Contato
        </Link>
      </div>
    </div>
  );
};
