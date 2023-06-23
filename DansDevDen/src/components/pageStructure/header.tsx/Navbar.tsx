import { Heading1 } from '../../core/typography';
import { Menu } from './Menu';
import { NavbarContainer } from './Navbar.styles';

export const Navbar = () => {
  return (
    <NavbarContainer>
      <Heading1>Dans Dev Den</Heading1>
      <Menu />
    </NavbarContainer>
  );
};
