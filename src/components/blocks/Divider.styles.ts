import styled, { css } from 'styled-components';
import { rem } from '../core/styles';

type DividerProps = {
  vertMargin?: number;
  horizMargin?: number;
};
export const Divider = styled.span<DividerProps>`
  display: flex;
  border: 1px solid black;

  ${({ vertMargin = 0, horizMargin = 0 }) =>
    css`
      margin: ${rem(vertMargin)} ${rem(horizMargin)};
    `};
`;
