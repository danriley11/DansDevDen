import { Heading1 } from '../../core/typography';
import { NavbarContainer } from './Navbar.styles';
import NavigationMenu from './Navigation-Menu';

export const Navbar = () => {
  return (
    <>
      <NavbarContainer>
        <Heading1>Dans Dev Den</Heading1>
        <NavigationMenu />
      </NavbarContainer>
    </>
  );
};
