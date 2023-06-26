import styled, { css } from 'styled-components';
import { rem } from '../core/styles';

export const MenuIconContainer = styled.a`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: ${rem(22)};
  width: ${rem(22)};
  cursor: pointer;
`;

const MenuIconBar = styled.span`
  height: ${rem(3)};
  width: 100%;
  background-color: white;
  transition: all 100ms ease-in-out;
`;

type MenuIconBarProps = {
  isOpen: boolean;
};

export const XBar1 = styled(MenuIconBar)<MenuIconBarProps>`
  transition: all 100ms ease-in-out;
  transform-origin: top left;

  ${({ isOpen }) =>
    isOpen
      ? css`
          width: ${rem(28)};
          transform: rotate(45deg);
        `
      : css`
          width: 100%;
          transform: rotate(0);
        `}
`;

export const XBar2 = styled(MenuIconBar)<MenuIconBarProps>`
  transition: all 100ms ease-in-out;
  transform-origin: center;

  ${({ isOpen }) => (isOpen ? `width: 0` : `width: 100%`)}
`;

export const XBar3 = styled(MenuIconBar)<MenuIconBarProps>`
  transition: all 100ms ease-in-out;
  transform-origin: bottom left;

  ${({ isOpen }) =>
    isOpen
      ? css`
          width: ${rem(28)};
          transform: rotate(-45deg);
        `
      : css`
          width: 100%;
          transform: rotate(0);
        `}
`;
