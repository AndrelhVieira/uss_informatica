import { Services } from "app/components/Services";

export default function ServicesPage() {
  return (
    <section className="px-4 py-16 md:px-24 lg:px-8 lg:py-20">
      <h1 className="font-bold text-3xl text-center mb-10">
        Explore Nossos Serviços Especializados para Tecnologia de Ponta
      </h1>
      <Services />
    </section>
  );
}
