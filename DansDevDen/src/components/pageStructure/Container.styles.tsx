import styled from 'styled-components';
import { mediaUp, rem } from '../core/styles';

export const Container = styled.div`
  min-width: 390px;

  ${mediaUp.sm`
    margin: 0 ${rem(16)}
  `};

  ${mediaUp.md`
    margin: 0 ${rem(24)}
  `};

  ${mediaUp.lg`
    margin: 0 ${rem(40)}
  `};
`;
