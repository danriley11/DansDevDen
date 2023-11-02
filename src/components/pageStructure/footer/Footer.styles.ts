import styled from 'styled-components';
import { darkGreen, greenAccent1, greenAccent2, lightGrey } from '../../core/colours';
import { mediaUp, rem } from '../../core/styles';

export const FooterContainer = styled.div`
  position: relative;
  padding: 0 ${rem(30)};
  background-color: ${darkGreen};
  box-shadow: 0 0 ${rem(32)} ${darkGreen};

  h4 {
    color: ${greenAccent1};
    margin-bottom: ${rem(12)};
  }
  p {
    color: ${greenAccent2};
  }

  .footer-top {
    position: relative;
    display: grid;
    border-bottom: ${rem(2)} solid ${lightGrey};
    padding-bottom: ${rem(24)};

    a {
      display: grid;
      grid-template-columns: repeat(1, 1fr);
      justify-items: center;
      color: ${greenAccent2};
      text-decoration: none;

      &:hover {
        cursor: pointer;
        color: ${greenAccent1};
      }
    }

    div {
      display: grid;
      gap: ${rem(10)};
      text-align: center;
    }

    [aria-disabled='true'] {
      color: grey;
      text-decoration: line-through;

      &:hover {
        color: grey;
        cursor: not-allowed;
      }
    }

    ${mediaUp.sm`
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      justify-content: center;
      align-items: start;

      .footer-socials {
        display: flex;
        flex-direction: row;
        justify-content: center;
      }
    `}
  }

  .footer-bottom {
    display: grid;
    justify-content: center;
  }
`;
