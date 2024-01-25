import styled from 'styled-components';
import { activeGreen, textLightGreen, lightGrey, hoverGreenLight, inactiveGreen } from '../../core/colours';
import { mediaUp, rem } from '../../core/styles';

export const FooterContainer = styled.div`
  position: relative;
  overflow-x: hidden;
  padding: 0 ${rem(30)};
  background-color: ${activeGreen};
  box-shadow: 0 0 ${rem(32)} ${activeGreen};

  h4 {
    color: ${textLightGreen};
    margin-bottom: ${rem(12)};
  }

  p {
    color: ${textLightGreen};
  }

  .footer-top {
    position: relative;
    display: grid;
    border-bottom: ${rem(2)} solid ${lightGrey};
    padding-bottom: ${rem(24)};

    a {
      display: grid;
      grid-template-columns: repeat(1, 1fr);
      color: ${inactiveGreen};
      text-decoration: none;
      padding: 4px;
      border-radius: 12px;

      &:hover {
        cursor: pointer;
        color: ${hoverGreenLight};
        box-shadow: 0 0 4px ${hoverGreenLight};
      }

      &:active {
        cursor: pointer;
        color: ${activeGreen};
        background-color: ${textLightGreen};
      }
    }

    div {
      display: grid;
      gap: ${rem(10)};
      text-align: center;
      justify-items: center;
    }

    [aria-disabled='true'] {
      color: grey;
      text-decoration: line-through;

      &:hover {
        color: grey;
        cursor: not-allowed;
        box-shadow: none;
      }

      &:active {
        color: grey;
        cursor: not-allowed;
        box-shadow: none;
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
