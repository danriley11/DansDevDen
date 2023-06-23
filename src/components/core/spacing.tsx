import styled from 'styled-components';
import { mediaUp, rem } from './styles';

type SpacingValue = 0 | 4 | 8 | 10 | 12 | 16 | 20 | 24 | 32 | 40 | 48 | 56 | 64 | 72 | 80 | 128;

type MarginSpacingProps = {
  top?: SpacingValue;
  bottom?: SpacingValue;

  smTop?: SpacingValue;
  mdTop?: SpacingValue;
  lgTop?: SpacingValue;
  xlTop?: SpacingValue;

  smBottom?: SpacingValue;
  mdBottom?: SpacingValue;
  lgBottom?: SpacingValue;
  xlBottom?: SpacingValue;
};

export const Margin = styled.div<MarginSpacingProps>`
  ${({ top }) => typeof top === 'number' && `margin-top: ${rem(top)};`};
  ${({ bottom }) => typeof bottom === 'number' && `margin-bottom: ${rem(bottom)};`}

  ${({ smTop }) => typeof smTop === 'number' && mediaUp.sm`margin-top: ${rem(smTop)};`}
  ${({ mdTop }) => typeof mdTop === 'number' && mediaUp.md`margin-top: ${rem(mdTop)};`}
  ${({ lgTop }) => typeof lgTop === 'number' && mediaUp.lg`margin-top: ${rem(lgTop)};`}
  ${({ xlTop }) => typeof xlTop === 'number' && mediaUp.xl`margin-top: ${rem(xlTop)};`}

  ${({ smBottom }) => typeof smBottom === 'number' && mediaUp.sm`margin-bottom: ${rem(smBottom)};`}
  ${({ mdBottom }) => typeof mdBottom === 'number' && mediaUp.md`margin-bottom: ${rem(mdBottom)};`}
  ${({ lgBottom }) => typeof lgBottom === 'number' && mediaUp.lg`margin-bottom: ${rem(lgBottom)};`}
  ${({ xlBottom }) => typeof xlBottom === 'number' && mediaUp.xl`margin-bottom: ${rem(xlBottom)};`}
`;

type SpaceBetweenProps = {
  alignItems?: 'center' | 'baseline';
  $width?: string;
};
export const SpaceBetween = styled.div<SpaceBetweenProps>`
  display: flex;
  justify-content: space-between;

  ${({ alignItems = 'normal' }) => `align-items: ${alignItems}`};
  ${({ $width = 'auto' }) => `width: ${$width}`};
`;

export const CenterAlign = styled.div`
  display: flex;
  justify-content: center;
`;

export const RightAlign = styled.div`
  display: flex;
  justify-content: flex-end;
`;
