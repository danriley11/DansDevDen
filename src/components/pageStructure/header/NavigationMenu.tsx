import { useState } from 'react';
import { useNavigate } from 'react-router';
import { GRAND_FOYER, HOUSEKEEPING, LEARNING, SERVICES, /*PLANNING,*/ SHOWCASING } from '../../../routes/routes';
import { MenuIconContainer, XBar1, XBar2, XBar3 } from '../../menu/Menu.styles';
import { MenuDropdownContainer, MenuDropdownItem } from '../../menu/MenuDropdown.styles';
import { P } from '../../core/typography';
import { useLocation } from 'react-router-dom';

const NavigationMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  const toggleHamburger = () => {
    setIsOpen(!isOpen);
  };

  function pathMatch(path: string): boolean {
    if (path === location.pathname) {
      return true;
    } else {
      return false;
    }
  }

  return (
    <>
      <MenuIconContainer className="nav-toggle" onClick={toggleHamburger}>
        <XBar1 isOpen={isOpen} />
        <XBar2 isOpen={isOpen} />
        <XBar3 isOpen={isOpen} />
      </MenuIconContainer>

      {isOpen && (
        <MenuDropdownContainer>
          <MenuDropdownItem
            isPath={pathMatch(GRAND_FOYER)}
            onClick={() => {
              toggleHamburger();
              navigate(GRAND_FOYER);
            }}>
            <P>Grand foyer</P>
          </MenuDropdownItem>

          <MenuDropdownItem
            isPath={pathMatch(LEARNING)}
            onClick={() => {
              toggleHamburger();
              navigate(LEARNING);
            }}>
            <P>Learning suite</P>
          </MenuDropdownItem>

          <MenuDropdownItem
            isPath={pathMatch(SHOWCASING)}
            onClick={() => {
              toggleHamburger();
              navigate(SHOWCASING);
            }}>
            <P>Showcasing suite</P>
          </MenuDropdownItem>

          {/* <MenuDropdownItem
            isPath={pathMatch(PLANNING)}
            onClick={() => {
              toggleHamburger();
              navigate(PLANNING);
            }}>
            <P>Planning suite</P>
          </MenuDropdownItem> */}

          <MenuDropdownItem
            isPath={pathMatch(HOUSEKEEPING)}
            onClick={() => {
              toggleHamburger();
              navigate(HOUSEKEEPING);
            }}>
            <P>Housekeepers lodge</P>
          </MenuDropdownItem>

          <MenuDropdownItem
            isPath={pathMatch(SERVICES)}
            onClick={() => {
              toggleHamburger();
              navigate(SERVICES);
            }}>
            <P>Services suite</P>
          </MenuDropdownItem>
        </MenuDropdownContainer>
      )}
    </>
  );
};

export default NavigationMenu;
