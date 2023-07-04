import { styled } from 'styled-components';
import { rem } from '../core/styles';
import { MENU_DROPDOWN_Z_INDEX } from '../core/z-index';
import { deepGreen, emeraldGreen, softGrey, white } from '../core/colours';

export const MenuDropdownContainer = styled.div`
  position: absolute;
  right: 0;
  top: 100%;
  z-index: ${MENU_DROPDOWN_Z_INDEX};
  width: ${rem(200)};
  max-height: ${rem(200)};
  background-color: ${emeraldGreen};
  border: 1px solid ${softGrey};
  overflow-y: auto;
  border-radius: ${rem(16)} 0 ${rem(16)} ${rem(16)};
`;

export const MenuDropdownItem = styled.div`
  padding: ${rem(8)} ${rem(12)};
  cursor: pointer;

  &:hover {
    background-color: ${deepGreen};
    color: ${white};
  }
`;
