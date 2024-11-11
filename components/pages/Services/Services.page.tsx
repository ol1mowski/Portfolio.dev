import { memo } from 'react';

import type { ServiceType } from '@/types/Services.type';
import { SERVICES } from "@/data/Services.data";

import Label from "./Label/Label.component";
import ServicesHeader from "./ServicesHeader/ServicesHeader.component"; 
import ServicesCta from "./ServicesCta/ServicesCta.component";
import NumberOfService from "./NumberOfService/NumberOfService.component";
import ServicesWrapper from "./ServicesWrapper/ServicesWrapper.component";

const Services = memo(() => {
  return (
    <section aria-label="Nasze usługi">
      {SERVICES.map((service: ServiceType) => (
        <ServicesWrapper 
          key={service.id} 
          reverse={service.reverse}
        >
          <Label ifFirst={service.ifFirst} />
          <ServicesHeader typArr={service.type.split("-")} />
          <ServicesCta des={service.des} />
          <NumberOfService number={service.number} />
        </ServicesWrapper>
      ))}
    </section>
  );
});

Services.displayName = 'Services';

export default Services;
