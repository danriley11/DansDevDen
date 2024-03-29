import styled from 'styled-components';
import { hoverGreenLight, textDarkGreen, white } from '../../components/core/colours';
import { mediaUp, rem } from '../../components/core/styles';

const ServicesSuiteWrapper = styled.div`
  color: ${textDarkGreen};
`;

type ServiceContentProps = {
  isPopular: boolean;
  isAvailable: boolean;
};

export const ServiceContent = styled.div<ServiceContentProps>`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  padding: ${rem(16)};
  border-radius: ${rem(24)};
  border: 1px solid ${textDarkGreen};
  position: relative;
  overflow: hidden;
  box-shadow: 0 0 8px ${textDarkGreen};

  h3 {
    margin: ${rem(8)} 0;
  }

  p {
    margin: 0 0 ${rem(16)} 0;
  }

  &:hover {
    background-color: ${hoverGreenLight};
    box-shadow: none;
  }

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
    box-shadow: 0 0 ${rem(8)} inset;
    border-radius: ${rem(24)};
    background: linear-gradient(to right, ${textDarkGreen}, ${white});
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  &:hover:before {
    opacity: 0.7;
  }
`;

export const ServiceWrapper = styled.div`
  display: grid;
  gap: 24px;
  margin-bottom: 48px;

  ${mediaUp.md`
    grid-template-columns: 1fr 1fr;

    a {
      width: auto;
      justify-content: center;
    }
  `}
`;

export default ServicesSuiteWrapper;
