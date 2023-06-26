import HeroImage from '../../components/images/HeroImage';
import GrandFoyerImage from '../../assets/GrandFoyer.jpeg';
import { GrandFoyerHeading } from './GrandFoyer.styles';
import { Margin } from '../../components/core/spacing';

const GrandFoyer = () => {
  return (
    <div>
      <HeroImage imgSrc={GrandFoyerImage} alt={'temp'} width={'100%'} />

      <Margin smTop={64} mdTop={80} lgTop={128}>
        <GrandFoyerHeading>Hello, and welcome to the grand foyer.</GrandFoyerHeading>
      </Margin>
    </div>
  );
};

export default GrandFoyer;
