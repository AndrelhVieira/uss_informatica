import { HiOutlineLockClosed } from "react-icons/hi2";
import { CgPerformance } from "react-icons/cg";
import { PiNetwork } from "react-icons/pi";

export const Features = () => {
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="max-w-xl mb-10 sm:mx-auto">
        <h2 className="font-sans text-3xl font-bold leading-tight tracking-tight text-secondary sm:text-4xl sm:text-center">
          Explore Nossos Serviços Especializados para <br />
          <span className="text-primary">Tecnologia de Ponta</span>
        </h2>
      </div>
      <div className="grid gap-12 row-gap-8 lg:grid-cols-3">
        <div className="flex">
          <div className="mr-4">
            <div className="flex items-center justify-center w-12 h-12 mb-3 rounded-full bg-primary bg-opacity-20">
              <HiOutlineLockClosed className="text-primary text-2xl" />
            </div>
          </div>
          <div>
            <h6 className="mb-2 font-semibold leading-5">
              Proteja Seus Dados e Informações
            </h6>
            <p className="text-sm text-secondary">
              Com nosso serviço de antivírus, você pode garantir que seus dados
              estejam sempre seguros contra ameaças cibernéticas. Oferecemos
              soluções avançadas para proteger suas informações pessoais e
              profissionais de vírus, malware e outras vulnerabilidades.
            </p>
          </div>
        </div>
        <div className="flex">
          <div className="mr-4">
            <div className="flex items-center justify-center w-12 h-12 mb-3 rounded-full bg-primary bg-opacity-20">
              <CgPerformance className="text-primary text-2xl" />
            </div>
          </div>
          <div>
            <h6 className="mb-2 font-semibold leading-5">
              Otimização de Desempenho
            </h6>
            <p className="text-sm text-secondary">
              Aumente a eficiência do seu computador com nossos serviços de
              otimização. Realizamos manutenções completas para garantir que seu
              PC opere com a máxima velocidade e desempenho, permitindo que você
              trabalhe ou se divirta sem interrupções.
            </p>
          </div>
        </div>
        <div className="flex">
          <div className="mr-4">
            <div className="flex items-center justify-center w-12 h-12 mb-3 rounded-full bg-primary bg-opacity-20">
              <PiNetwork className="text-primary text-2xl" />
            </div>
          </div>
          <div>
            <h6 className="mb-2 font-semibold leading-5">
              Infraestrutura de Rede Personalizada
            </h6>
            <p className="text-sm text-secondary">
              Oferecemos serviços de configuração e manutenção de redes para
              empresas e residências. Nossa equipe cria ambientes de rede sob
              medida, garantindo conectividade estável, rápida e segura para
              todos os seus dispositivos.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
