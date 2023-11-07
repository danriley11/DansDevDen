import styled, { css } from 'styled-components';
import { irisGreen } from '../core/colours';
import { rem } from '../core/styles';

type FlexDivProps = {
  flexWrap?: string;
  flexDirection?: string;
  justifyContent?: string;
  alignContent?: string;
  alignItems?: string;
  gap?: number;
  hasHover?: boolean;
};
export const FlexDiv = styled.div<FlexDivProps>`
  display: flex;
  box-sizing: border-box;
  flex-wrap: ${({ flexWrap = 'wrap' }) => flexWrap};
  flex-direction: ${({ flexDirection = 'column' }) => flexDirection};
  justify-content: ${({ justifyContent = 'inherit' }) => justifyContent};
  align-content: ${({ alignContent = 'inherit' }) => alignContent};
  align-items: ${({ alignItems = 'inherit' }) => alignItems};
  gap: ${({ gap = 0 }) => rem(gap)};

  ${({ hasHover = false }) =>
    hasHover &&
    css`
      & div:hover {
        cursor: pointer;
        background-color: ${irisGreen};
      }
    `}
`;
