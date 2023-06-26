import { styled } from 'styled-components';
import { rem } from '../core/styles';
import { GRAND_FOYER_HERO_IMAGE_Z_INDEX } from '../core/z-index';

type HeroImageContainerProps = {
  minWidth?: number;
};
export const HeroImageContainer = styled.div<HeroImageContainerProps>`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  z-index: ${GRAND_FOYER_HERO_IMAGE_Z_INDEX};
  filter: brightness(80%);

  ${({ minWidth }) => minWidth && `min-width: ${rem(minWidth)}`}

  & > img {
    max-height: 800px;
  }
`;
