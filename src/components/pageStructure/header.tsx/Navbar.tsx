import { useNavigate } from 'react-router';
import { GRAND_FOYER } from '../../../routes/routes';
import { Heading1 } from '../../core/typography';
import { LogoContainer, NavbarContainer } from './Navbar.styles';
import NavigationMenu from './NavigationMenu';
import { useEffect, useState } from 'react';

export const Navbar = () => {
  const navigate = useNavigate();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      console.log('scrollTop', scrollTop);

      setIsScrolled(!!scrollTop);
    };

    window.addEventListener(`scroll`, handleScroll);

    return () => {
      window.removeEventListener(`scroll`, handleScroll);
    };
  }, []);

  return (
    <NavbarContainer isScrolled={isScrolled}>
      <LogoContainer onClick={() => navigate(GRAND_FOYER)}>
        <Heading1>Dans Dev Den</Heading1>
      </LogoContainer>
      <NavigationMenu />
    </NavbarContainer>
  );
};
