import { Margin } from '../../components/core/spacing';
import { P } from '../../components/core/typography';
import { Container } from '../../components/pageStructure/Container.styles';
import { NavBacking } from '../../components/pageStructure/header/Navbar.styles';
import { PageHeader } from '../../components/pageStructure/header/PageHeading.styles';
import Service from './Service';
import SERVICES_LIST from './ServicesSuite.constants';
import ServicesSuiteWrapper, { ServiceWrapper } from './ServicesSuite.styles';

const ServicesSuite = () => {
  return (
    <Container>
      <NavBacking />

      <PageHeader>Services Suite</PageHeader>

      <ServicesSuiteWrapper>
        <Margin bottom={40}>
          <P>
            Explore the realm of tailored services designed just for you! Whether it's enhancing your website, resolving issues,
            or embarking on a digital journey for your business, you're in the right place. Discover the perfect service for
            your needs, and if you can't find what you're looking for, don't hesitate to reach out. Your unique requirements are
            at the heart of what I do!
          </P>
        </Margin>

        <ServiceWrapper>
          {SERVICES_LIST.map((service, index) => (
            <Service service={service} key={index} />
          ))}
        </ServiceWrapper>
      </ServicesSuiteWrapper>
    </Container>
  );
};

export default ServicesSuite;
