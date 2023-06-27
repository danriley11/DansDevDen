import styled from 'styled-components';
import { lightGreySolid } from '../../core/colours';

export const FooterContainer = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  height: 128px;
  background-color: black;
  text-align: center;

  p {
    color: ${lightGreySolid};
    line-height: 104px;
  }
`;
