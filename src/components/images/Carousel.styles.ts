import styled from 'styled-components';
import { irisGreen, emeraldGreen } from '../core/colours';
import { mediaUp } from '../core/styles';

export const CarouselWrapper = styled.div`
  position: relative;

  &:hover {
    button {
      display: block;
    }
  }
`;

export const CarouselContainer = styled.div`
  display: flex;
  transition: transform 0.3s ease-in-out;

  ${mediaUp.xs`
   width: 100%;
   height: 100%;

   img {
    width: 100vh;
   }
  `}

  ${mediaUp.sm`
   width: 100%;
   height: 100%;

   img {
    width: 120vh;
   }
  `}

  ${mediaUp.md`
   width: 100%;
   height: 100%;

   img {
    width: 160vh;
   }
  `}

  ${mediaUp.lg`
   width: 100%;
   height: 100%;

   img {
    width: 250vh;
   }
  `}

  img {
    aspect-ratio: 8 / 5;
  }
`;

export const CarouselSlide = styled.div`
  flex: 0 1 auto;
  transition: transform 0.3s ease-in-out;
`;

type CarouselButtonProps = {
  leftSide?: boolean;
};
export const CarouselButton = styled.button<CarouselButtonProps>`
  display: none;
  position: absolute;
  top: 50%;
  transform: translate(0, -50%);
  border: none;
  height: 100%;
  background-color: ${irisGreen};
  z-index: 1;

  ${({ leftSide = false }) => (leftSide ? `left: 0` : `right: 0`)};

  &:hover {
    background-color: ${irisGreen};
    cursor: pointer;
  }

  &:active {
    background-color: ${emeraldGreen};
  }
`;
