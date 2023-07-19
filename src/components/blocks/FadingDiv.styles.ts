import styled, { keyframes } from 'styled-components';

// type FadingDivType = {
//   fromUp?: boolean;
//   fromRight?: boolean;
//   fromDown?: boolean;
//   fromLeft?: boolean;
//   toUp?: boolean;
//   toRight?: boolean;
//   toDown?: boolean;
//   toLeft?: boolean;
//   alternatingLeftRight?: number;
// };
// export const FadingDiv = styled.div<FadingDivType>`
//     opacity: 1;

// `;

const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(5%);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const fadeInRight = keyframes`
  from {
    opacity: 0;
    transform: translateX(-5%);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

const fadeInLeft = keyframes`
  from {
    opacity: 1;
    transform: translateX(0);
  }
  to {
    opacity: 0;
    transform: translateX(5%);
  }
`;

const fadeFromLeft = keyframes`
  from {
    opacity: 1;
    transform: translateX(0);
  }
  to {
    opacity: 0;
    transform: translateX(5%);
  }
  `;

const fadeFromRight = keyframes`
  from {
    opacity: 1;
    transform: translateX(0);
  }
  to {
    opacity: 0;
    transform: translateX(-5%);
  }
`;

export const FadingDivUp = styled.div`
  opacity: 0;
  animation: 0.5s linear normal both running ${fadeInUp};
`;

export const FadingDivRight = styled.div`
  opacity: 1;
  transition: width 2s, height 2s;
  animation: 2s ease-in-out normal both running ${fadeInRight};
`;

export const FadingDivLeft = styled.div`
  opacity: 1;
  animation: 2s ease-in-out reverse both running ${fadeInLeft};
`;

type FadingDivAltXProps = {
  index: number;
};
export const FadingDivAltX = styled.div<FadingDivAltXProps>`
  animation: 2s ease-in-out reverse both running
    ${({ index }) => (index % 2 === 1 ? fadeFromRight : fadeFromLeft)};
`;