import { ReactNode } from 'react';
import { Container } from '../components/pageStructure/Container.styles';
import { Navbar } from '../components/pageStructure/header.tsx/Navbar';

type RouteWrapperProps = {
  children: ReactNode;
};
const DefaultRouteWrapper = ({ children }: RouteWrapperProps) => {
  return (
    <Container>
      <Navbar />
      {children}
    </Container>
  );
};

export default DefaultRouteWrapper;
