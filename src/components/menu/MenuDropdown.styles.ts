import { styled } from 'styled-components';
import { rem } from '../core/styles';
import { MENU_DROPDOWN_Z_INDEX } from '../core/z-index';
import { deepGreen, emeraldGreen, white, darkGrey, lightGrey } from '../core/colours';

export const MenuDropdownContainer = styled.div`
  position: absolute;
  right: 0;
  top: 100%;
  z-index: ${MENU_DROPDOWN_Z_INDEX};
  width: ${rem(200)};
  background-color: ${emeraldGreen};
  border: 1px solid ${lightGrey};
  overflow-y: auto;
  border-radius: ${rem(16)} 0 ${rem(16)} ${rem(16)};
  margin-top: ${rem(0.5)};

  & div:first-child {
    border-top: none;
  }
`;

type MenuItemProps = {
  isPath: boolean;
};
export const MenuDropdownItem = styled.div<MenuItemProps>`
  padding: ${rem(8)} ${rem(12)};
  cursor: pointer;

  &:hover {
    background-color: ${deepGreen};
    color: ${white};
  }

  ${({ isPath }) =>
    isPath &&
    `
    background-color: ${darkGrey};
    color: ${white};
    cursor: not-allowed;

    &:hover {
      background-color: ${darkGrey};
      color: ${white};
      cursor: not-allowed;
    }
  `}
`;
