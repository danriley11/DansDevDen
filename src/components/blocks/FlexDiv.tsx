import { ReactNode } from 'react';
import { FlexDivContainer } from './FlexDiv.styles';

type FlexDivProps = {
  children: ReactNode;
};
const FlexDiv = ({ children }: FlexDivProps) => {
  return <FlexDivContainer>{children}</FlexDivContainer>;
};

export default FlexDiv;
