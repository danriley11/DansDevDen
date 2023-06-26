import { HeroImageContainer } from './HeroImage.styles';

type HeroImageProps = {
  imgSrc: string;
  alt: string;
  width: string | number;
  minWidth?: number;
};
const HeroImage = ({ imgSrc, alt, width, minWidth }: HeroImageProps) => {
  return (
    <HeroImageContainer minWidth={minWidth}>
      <img src={imgSrc} alt={alt} width={width} />
    </HeroImageContainer>
  );
};

export default HeroImage;
