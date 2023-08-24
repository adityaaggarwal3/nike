import "./App.css";
import Hero from "./sections/Hero";
import Footer from "./sections/Footer";
import Offers from "./sections/Offers";
import Services from "./sections/Services";
import CustomerReviews from "./sections/CustomerReviews";
import Subscribe from "./sections/Subscribe";
import PopularProducts from "./sections/PopularProducts";
import PremiumProducts from "./sections/PremiumProducts";
import Nav from "./components/Nav";

function App() {
  return (
    <main className="relative">
      <Nav />
      <section className="xl:padding-l wide:padding-r padding-b">
        <Hero />
      </section>
      <section className="padding">
        <PopularProducts />
      </section>
      <section className="padding">
        <PremiumProducts />
      </section>
      <section className="padding">
        <Services />
      </section>
      <section className="padding">
        <CustomerReviews />
      </section>
      <section className="padding">
        <Offers />
      </section>
      <section className="padding-x sm:py-32 p-16 w-full">
        <Subscribe />
      </section>
      <section className="padding-x padding-t bg-black pb-8">
        <Footer />
      </section>
    </main>
  );
}

export default App;
