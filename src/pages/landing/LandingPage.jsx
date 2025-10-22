import { Footer, Hero, FrequentlyAsked, Subscribe, Initiation, ToolsS, AdditionalInfo } from "./sections";
import Nav from "../../components/Nav";

function LandingPage() {
  return (
  <main className="relative bg-[#FAF7F3]">
    <Nav />
    <section className="xl:padding-l wide:padding-r padding-b">
      <Hero />
    </section>
    <section>
      <AdditionalInfo />
    </section>
    <section className="px-8 pt-4 max-lg:py-24 bg-items bg-no-repeat max-lg:bg-repeat max-lg:bg-contain bg-cover">
      <Initiation />
    </section>
    <section className="padding bg-lines bg-no-repeat bg-cover bg-right">
      <ToolsS />
    </section>
    <section className="padding-x py-10">
      <FrequentlyAsked />
    </section>
    <section className="padding-x sm:py-32 py-16 w-full">
      <Subscribe />
    </section>
    <section>
      <Footer />
    </section>
  </main>
  );
}

export default LandingPage;