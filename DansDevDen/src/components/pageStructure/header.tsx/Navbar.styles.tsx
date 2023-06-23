import styled from 'styled-components';
import { softGrey } from '../../core/colours';

export const NavbarContainer = styled.div`
  display: flex;
  position: sticky;
  top: 0;
  justify-content: space-between;
  flex-wrap: nowrap;
  border-bottom: 1px solid ${softGrey};

  & > * {
    align-self: center;
  }
`;
