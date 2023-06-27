import { ReactNode } from 'react';
import { Navbar } from '../components/pageStructure/header/Navbar';
import Footer from '../components/pageStructure/footer/Footer';

type RouteWrapperProps = {
  children: ReactNode;
};
const DefaultRouteWrapper = ({ children }: RouteWrapperProps) => {
  return (
    <div>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default DefaultRouteWrapper;
