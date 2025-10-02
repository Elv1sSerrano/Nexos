import { CustomerReviews, Footer, Hero, FrequentlyAsked, SpecialOffers, Subscribe, Initiation, ToolsS } from "./sections";
import Nav from "./components/Nav";

const App = () => (
  <main className="relative">
    <Nav />
    <section className="xl:padding-l wide:padding-r padding-b">
      <Hero />
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
    <section className="padding">
      <SpecialOffers />
    </section>
    <section className="padding bg-pale-blue">
      <CustomerReviews />
    </section>
    <section className="padding-x sm:py-32 py-16 w-full">
      <Subscribe />
    </section>
    <section className="bg-black padding-x padding-t pb-8">
      <Footer />
    </section>
  </main>
);

export default App;