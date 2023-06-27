import styled from 'styled-components';
import { lightGreySolid } from '../../core/colours';
import { rem } from '../../core/styles';

export const FooterContainer = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  height: ${rem(128)};
  background-color: black;
  text-align: center;

  p {
    color: ${lightGreySolid};
    line-height: ${rem(104)};
  }
`;
