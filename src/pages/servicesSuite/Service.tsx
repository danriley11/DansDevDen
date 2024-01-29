import { A } from '../../components/buttons/Linking.styles';
import { Heading3, P } from '../../components/core/typography';
import { ServiceContent } from './ServicesSuite.styles';

type ServiceProps = {
  service: {
    title: string;
    descriptions: string[];
    email: string;
    available: boolean;
    popular: boolean;
  };
};
const Service = ({ service }: ServiceProps) => {
  return (
    <ServiceContent isPopular={service.popular} isAvailable={service.available}>
      <Heading3>{service.title}</Heading3>

      {service.descriptions.map((description, index) => (
        <P key={index}>{index === 0 ? <strong>{description}</strong> : description}</P>
      ))}

      <A href={service.email}>Let's get in contact!</A>
    </ServiceContent>
  );
};

export default Service;
