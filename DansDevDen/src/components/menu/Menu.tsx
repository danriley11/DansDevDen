import { useState } from 'react';
import { MenuIconContainer, XBar1, XBar2, XBar3 } from './Menu.styles';
import { MenuDropdownContainer, MenuDropdownItem } from './Menu-Dropdown.styles';

const NavToggle = () => {
  const [isX, setIsX] = useState(false);

  const toggleHamburger = () => {
    setIsX(!isX);
  };

  return (
    <>
      <MenuIconContainer className="nav-toggle" onClick={toggleHamburger}>
        <XBar1 isX={isX} />
        <XBar2 isX={isX} />
        <XBar3 isX={isX} />
      </MenuIconContainer>

      {isX && (
        <MenuDropdownContainer>
          <MenuDropdownItem>test</MenuDropdownItem>
          <MenuDropdownItem>test</MenuDropdownItem>
          <MenuDropdownItem>test</MenuDropdownItem>
          <MenuDropdownItem>test</MenuDropdownItem>
        </MenuDropdownContainer>
      )}
    </>
  );
};

export default NavToggle;
