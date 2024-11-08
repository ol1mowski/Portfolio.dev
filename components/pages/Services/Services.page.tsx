import Label from "./Label/Label.component";
import ServicesHeader from "./ServicesHeader/ServicesHeader.component";
import ServicesCta from "./ServicesCta/ServicesCta.component";
import NumberOfService from "./NumberOfService/NumberOfService.component";
import ServicesWrapper from "./ServicesWrapper/ServicesWrapper.component";
import { SERVICES } from "@/data/Services.data";

function Services() {
  return (
    <>
      {SERVICES.map((service, index) => (
        <ServicesWrapper key={index} reverse={service.reverse}>
          <Label ifFirst={service.ifFirst} />
          <ServicesHeader typArr={service.type.split("-")} />
          <ServicesCta des={service.des} />
          <NumberOfService number={service.number} />
        </ServicesWrapper>
      ))}
    </>
  );
}

export default Services;
