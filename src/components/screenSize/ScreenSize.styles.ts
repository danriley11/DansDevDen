import styled from 'styled-components';
import { mediaUp } from '../core/styles';

export const IsMobile = styled.div`
  display: block;

  ${mediaUp.sm`
      display: none;
  `}
`;

export const LargerThanMobile = styled.div`
  display: none;

  ${mediaUp.sm`
      display: block;
  `}
`;

export const IsTablet = styled.div`
  display: block;

  ${mediaUp.md`
    display: none;
`}
`;

export const LargerThanTablet = styled.div`
  display: none;

  ${mediaUp.md`
    display: block;
    `}
`;

export const SmallerThanDesktop = styled.div`
  display: block;

  ${mediaUp.lg`
    display: none;
`}
`;

export const IsDesktop = styled.div`
  display: block;

  ${mediaUp.lg`
        display: none;
    `}
`;
