import styled from 'styled-components';

export const FadingDivRight = styled.div`
  opacity: 1;
  animation: 2s ease-in-out 1s normal both running fadeInRight;

  @keyframes fadeInRight {
    from {
      opacity: 0;
      transform: translateX(-5%);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }
`;

export const FadingDivLeft = styled.div`
  opacity: 1;
  animation: 2s ease-in-out 1s reverse both running fadeInLeft;

  @keyframes fadeInLeft {
    from {
      opacity: 1;
      transform: translateX(0);
    }
    to {
      opacity: 0;
      transform: translateX(5%);
    }
  }
`;
