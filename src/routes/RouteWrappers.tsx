import { ReactNode } from 'react';
import { Navbar } from '../components/pageStructure/header.tsx/Navbar';

type RouteWrapperProps = {
  children: ReactNode;
};
const DefaultRouteWrapper = ({ children }: RouteWrapperProps) => {
  return (
    <div>
      <Navbar />
      {children}
    </div>
  );
};

export default DefaultRouteWrapper;
