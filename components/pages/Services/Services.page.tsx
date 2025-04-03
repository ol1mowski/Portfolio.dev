import { FC } from 'react';
import { ServiceType } from '@/types/Services.type';
import { SERVICES } from "@/data/Services.data";
import { SERVICES_ARIA_LABEL } from './constants/services.constants';
import { useServiceSplit } from './hooks/useServiceSplit.hook';
import { Label } from "./Label/Label.component";
import { ServicesHeader } from "./ServicesHeader/ServicesHeader.component"; 
import { ServicesCta } from "./ServicesCta/ServicesCta.component";
import { NumberOfService } from "./NumberOfService/NumberOfService.component";
import { ServicesWrapper } from "./ServicesWrapper/ServicesWrapper.component";

export const Services: FC = () => {
  const { splitServiceType } = useServiceSplit();

  return (
    <section aria-label={SERVICES_ARIA_LABEL}>
      {SERVICES.map((service: ServiceType) => (
        <ServicesWrapper 
          key={service.number} 
          reverse={service.reverse}
        >
          <Label ifFirst={service.ifFirst} />
          <ServicesHeader typArr={splitServiceType(service.type)} />
          <ServicesCta des={service.des} />
          <NumberOfService number={service.number} />
        </ServicesWrapper>
      ))}
    </section>
  );
};
  
export default Services;
