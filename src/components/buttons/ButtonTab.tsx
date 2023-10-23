import { ButtonLink } from './Buttons.styles';

type ButtonTabProps = {
  url: string | null;
  buttonText: string;
  disabled?: boolean;
};
const ButtonTab = ({ url, buttonText, disabled }: ButtonTabProps) => {
  const handleButtonClick = () => {
    const urlLocation = url; // Specify the URL you want to open
    urlLocation && window.open(urlLocation, '_blank');
  };

  return (
    <ButtonLink onClick={handleButtonClick} disabled={disabled}>
      {buttonText}
    </ButtonLink>
  );
};

export default ButtonTab;
