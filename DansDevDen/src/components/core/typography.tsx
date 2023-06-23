import styled from 'styled-components';
import { rem } from './styles';

export const fontFamily = `'League Spartan', sans-serif`;

export const fontWeightRegular = 400;
export const fontWeightMedium = 500;
export const fontWeightSemiBold = 600;
export const fontWeightBold = 700;

type Alignments = 'left' | 'center' | 'right';

const weights = {
  regular: fontWeightRegular,
  medium: fontWeightMedium,
  semiBold: fontWeightSemiBold,
  bold: fontWeightBold,
};

export const fontSize12 = rem(12);
export const fontSize13 = rem(13);
export const fontSize14 = rem(14);
export const fontSize16 = rem(16);
export const fontSize18 = rem(18);
export const fontSize20 = rem(20);
export const fontSize24 = rem(24);
export const fontSize28 = rem(28);
export const fontSize32 = rem(32);
export const fontSize40 = rem(40);
export const fontSize64 = rem(64);

export const fontSize13LineHeight = rem(16);
export const fontSize14LineHeight = rem(20);
export const fontSize16LineHeight = rem(24);
export const fontSize18LineHeight = rem(24);
export const fontSize24LineHeight = rem(32);
export const fontSize28LineHeight = rem(32);

export const Heading1 = styled.h1`
  font-size: ${fontSize32};
  font-weight: ${weights.semiBold};
  line-height: ${fontSize24LineHeight};
  font-family: ${fontFamily};
`;

export const Heading2 = styled.h2`
  font-size: ${fontSize24};
  font-weight: ${weights.semiBold};
  line-height: ${fontSize24LineHeight};
  font-family: ${fontFamily};
`;

export const Heading3 = styled.h3`
  font-size: ${fontSize20};
  font-weight: ${weights.semiBold};
  line-height: ${fontSize24LineHeight};
  font-family: ${fontFamily};
`;

export const Heading4 = styled.h4`
  font-size: ${fontSize16};
  font-weight: ${weights.semiBold};
  line-height: ${fontSize24LineHeight};
  font-family: ${fontFamily};
`;

export const P = styled.p`
  font-size: ${fontSize16};
  font-family: ${fontFamily};
  font-weight: ${weights.regular};
  line-height: ${fontSize24};
`;
