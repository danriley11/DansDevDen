import { useState } from 'react';
import { useNavigate } from 'react-router';
import { HOUSEKEEPING } from '../../../routes/routes';
import { MenuIconContainer, XBar1, XBar2, XBar3 } from '../../menu/Menu.styles';
import { MenuDropdownContainer, MenuDropdownItem } from '../../menu/MenuDropdown.styles';
import { P } from '../../core/typography';

const NavigationMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navigate = useNavigate();

  const toggleHamburger = () => {
    setIsOpen(!isOpen);
  };

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
            onClick={() => {
              toggleHamburger();
              navigate(HOUSEKEEPING);
            }}>
            <P>Housekeeping</P>
          </MenuDropdownItem>
        </MenuDropdownContainer>
      )}
    </>
  );
};

export default NavigationMenu;
