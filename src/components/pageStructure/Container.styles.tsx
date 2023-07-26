import styled from 'styled-components';
import { mediaUp, rem } from '../core/styles';

export const Container = styled.div`
  box-sizing: border-box;
  min-width: ${rem(370)};

  ${mediaUp.xs`
    padding: 0 ${rem(16)}
  `};

  ${mediaUp.md`
    padding: 0 ${rem(24)}
  `};

  ${mediaUp.lg`
    padding: 0 ${rem(40)}
  `};
`;
