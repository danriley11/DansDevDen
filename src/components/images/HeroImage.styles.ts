import { styled } from 'styled-components';
import { rem } from '../core/styles';
import { GRAND_FOYER_HERO_IMAGE_Z_INDEX } from '../core/z-index';

type HeroImageContainerProps = {
  minWidth?: number;
};
export const HeroImageContainer = styled.div<HeroImageContainerProps>`
  position: static;
  margin-top: -76px;
  z-index: ${GRAND_FOYER_HERO_IMAGE_Z_INDEX};
  overflow: hidden;
  filter: brightness(80%);

  ${({ minWidth }) => minWidth && `min-width: ${rem(minWidth)}`}
`;
