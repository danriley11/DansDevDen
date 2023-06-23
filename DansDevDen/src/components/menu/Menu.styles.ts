import styled from 'styled-components';

export const MenuIconContainer = styled.a`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 22px;
  width: 22px;
  cursor: pointer;
`;

const MenuIconBar = styled.span`
  height: 3px;
  width: 100%;
  background-color: black;
  transition: all 100ms ease-in-out;
`;

type MenuIconBarProps = {
  isX: boolean;
};

export const XBar1 = styled(MenuIconBar)<MenuIconBarProps>`
  transition: all 100ms ease-in-out;
  transform-origin: top left;
  width: ${(props) => (props.isX ? '28px' : '100%')};
  transform: ${(props) => (props.isX ? 'rotate(45deg)' : 'rotate(0)')};
`;

export const XBar2 = styled(MenuIconBar)<MenuIconBarProps>`
  transition: all 100ms ease-in-out;
  transform-origin: center;
  width: ${(props) => (props.isX ? '0' : '100%')};
`;

export const XBar3 = styled(MenuIconBar)<MenuIconBarProps>`
  transition: all 100ms ease-in-out;
  transform-origin: bottom left;
  width: ${(props) => (props.isX ? '28px' : '100%')};
  transform: ${(props) => (props.isX ? 'rotate(-45deg)' : 'rotate(0)')};
`;
