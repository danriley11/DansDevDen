import { Heading1 } from '../../components/core/typography';
import { Container } from '../../components/pageStructure/Container.styles';
import { NavBacking } from '../../components/pageStructure/header/Navbar.styles';

const ServicesSuite = () => {
  return (
    <Container>
      <NavBacking />

      <Heading1>Services Suite</Heading1>
    </Container>
  );
};

export default ServicesSuite;
