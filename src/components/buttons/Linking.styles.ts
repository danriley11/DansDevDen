import styled from 'styled-components';
import {
  textDarkGreen,
  inactiveGreen,
  white,
  hoverGreenDark,
  hoverGreenLight,
  activeGreen,
  darkGrey,
  disabledGreen,
  black,
} from '../core/colours';
import { rem } from '../core/styles';
import { fontSize16, fontFamily, fontWeightSemiBold } from '../core/typography';

export const A = styled.a`
  display: flex;
  width: fit-content;

  color: ${textDarkGreen};
  background-color: ${inactiveGreen};

  border: 1px solid ${textDarkGreen};
  border-radius: ${rem(24)};

  padding: ${rem(12)};

  font-size: ${fontSize16};
  font-family: ${fontFamily};
  font-weight: ${fontWeightSemiBold};

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

  [aria-disabled='true'] {
    color: ${darkGrey};
    background-color: ${disabledGreen};
    border: 1px solid ${black};
    pointer-events: none;
    text-decoration: line-through;
  }
`;
