import { Banner } from "./components/Banner";
import { Clients } from "./components/Clients";
import { Features } from "./components/Features";

export default function Page() {
  return (
    <section>
      <Banner />
      <Features />
      <Clients />
    </section>
  );
}
