import styled, { css } from 'styled-components';
import {
  activeGreen,
  black,
  darkGrey,
  disabledGreen,
  hoverGreenDark,
  hoverGreenLight,
  inactiveGreen,
  textDarkGreen,
  white,
} from '../core/colours';
import { rem } from '../core/styles';
import { fontFamily, fontSize16, fontWeightSemiBold } from '../core/typography';

type ButtonLinkProps = {
  fontWeight?: number;
  disabled?: boolean;
};
export const ButtonLink = styled.button<ButtonLinkProps>`
  display: flex;
  width: fit-content;

  color: ${textDarkGreen};
  background-color: ${inactiveGreen};

  border: 1px solid ${textDarkGreen};
  border-radius: ${rem(24)};

  padding: ${rem(12)};

  font-size: ${fontSize16};
  font-family: ${fontFamily};
  font-weight: ${({ fontWeight = fontWeightSemiBold }) => fontWeight};

  &:hover {
    color: ${white};
    background-color: ${hoverGreenDark};
    box-shadow: 0 0 16px ${hoverGreenLight};
    cursor: pointer;
  }

  &:active {
    color: ${white};
    background-color: ${activeGreen};
    box-shadow: 0 0 16px ${hoverGreenLight};
    cursor: pointer;
  }

  ${({ disabled = false }) =>
    disabled &&
    css`
      color: ${darkGrey};
      background-color: ${disabledGreen};
      border: 1px solid ${black};
      pointer-events: none;
      text-decoration: line-through;
    `}
`;
