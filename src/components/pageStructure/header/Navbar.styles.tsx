import styled from 'styled-components';
import { darkGrey, softGrey, white } from '../../core/colours';
import { MENU_Z_INDEX } from '../../core/z-index';
import { mediaUp, rem } from '../../core/styles';

type NavbarContainerProps = {
  isScrolled: boolean;
};
export const NavbarContainer = styled.div<NavbarContainerProps>`
  display: flex;
  position: sticky;
  top: 0;
  justify-content: space-between;
  flex-wrap: nowrap;
  border-bottom: 1px solid ${softGrey};
  z-index: ${MENU_Z_INDEX};

  background-color: ${({ isScrolled }) => (isScrolled ? darkGrey : 'transparent')};

  & > * {
    align-self: center;

    ${mediaUp.xs`
    margin: 0 ${rem(8)};
  `};

    ${mediaUp.sm`
    margin: 0 ${rem(16)};
  `};

    ${mediaUp.md`
    margin: 0 ${rem(24)};
  `};

    ${mediaUp.lg`
    margin: 0 ${rem(40)};
  `};
  }
`;

export const LogoContainer = styled.div`
  cursor: pointer;

  h1 {
    color: ${white};
  }
`;
