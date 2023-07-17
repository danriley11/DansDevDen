import { ButtonLink } from './Buttons.styles';

type ButtonTabProps = {
  url: string;
  buttonText: string;
};
const ButtonTab = ({ url, buttonText }: ButtonTabProps) => {
  const handleButtonClick = () => {
    const urlLocation = url; // Specify the URL you want to open
    window.open(urlLocation, '_blank');
  };

  return <ButtonLink onClick={handleButtonClick}>{buttonText}</ButtonLink>;
};

export default ButtonTab;
