import styled from 'styled-components';
import { black, lightGreySolid } from '../../core/colours';
import { rem } from '../../core/styles';

export const FooterContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: ${rem(128)};
  background-color: ${black};

  p {
    color: ${lightGreySolid};
  }
`;
