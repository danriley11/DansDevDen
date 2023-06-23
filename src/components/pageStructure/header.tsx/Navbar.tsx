import { useNavigate } from 'react-router';
import { GRAND_FOYER } from '../../../routes/routes';
import { Heading1 } from '../../core/typography';
import { LogoContainer, NavbarContainer } from './Navbar.styles';
import NavigationMenu from './NavigationMenu';

export const Navbar = () => {
  const navigate = useNavigate();

  return (
    <>
      <NavbarContainer>
        <LogoContainer onClick={() => navigate(GRAND_FOYER)}>
          <Heading1>Dans Dev Den</Heading1>
        </LogoContainer>
        <NavigationMenu />
      </NavbarContainer>
    </>
  );
};
