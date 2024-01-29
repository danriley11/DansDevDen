import { Heading1, P } from '../../components/core/typography';
import { Container } from '../../components/pageStructure/Container.styles';
import { NavBacking } from '../../components/pageStructure/header/Navbar.styles';
import Service from './Service';
import SERVICES_LIST from './ServicesSuite.constants';
import ServicesSuiteWrapper from './ServicesSuite.styles';

const ServicesSuite = () => {
  return (
    <Container>
      <NavBacking />

      <Heading1>Services Suite</Heading1>

      <ServicesSuiteWrapper>
        <P>
          Explore the realm of tailored services designed just for you! Whether it's enhancing your website, resolving issues,
          or embarking on a digital journey for your business, you're in the right place. Discover the perfect service for your
          needs, and if you can't find what you're looking for, don't hesitate to reach out. Your unique requirements are at the
          heart of what I do!
        </P>

        {SERVICES_LIST.map((service, index) => (
          <Service service={service} key={index} />
        ))}
      </ServicesSuiteWrapper>
    </Container>
  );
};

export default ServicesSuite;
