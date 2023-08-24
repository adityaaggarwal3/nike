import ServiceCard from "../components/ServiceCard";
import { services } from "../constants";

const Services = () => {
  // console.log(services);
  return (
    <section className="flex flex-1 justify-between items-center gap-5 max-container my-10 p-5">
      {services.map((service, index) => {
        return <ServiceCard key={index} {...service} />;
      })}
    </section>
  );
};

export default Services;
