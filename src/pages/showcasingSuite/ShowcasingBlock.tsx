import { Margin } from '../../components/core/spacing';
import { Heading4, P } from '../../components/core/typography';
import {
  ShowcasingBlockContent,
  ShowcasingBlockImg,
  ShowcasingContainer,
} from './Showcasing.styles';
import ButtonTab from '../../components/buttons/ButtonTab';
import IntersectionWrapper from '../../components/inViewport/InView';

type ShowcasingBlockProps = {
  title: string;
  url: string;
  description: string;
  previewImage: string;
  previewImageAlt: string;
};
const ShowcasingBlock = ({
  title,
  url,
  description,
  previewImage,
  previewImageAlt,
}: ShowcasingBlockProps) => {
  return (
    <ShowcasingContainer>
      <IntersectionWrapper
        fadeRight
        children={
          <ShowcasingBlockImg src={previewImage} alt={previewImageAlt} width={400} height={300} />
        }
      />

      <IntersectionWrapper
        fadeLeft
        children={
          <ShowcasingBlockContent>
            <Heading4>{title}</Heading4>
            <Margin bottom={40}>
              <P>{description}</P>
            </Margin>
            <ButtonTab url={url} buttonText={title} />
          </ShowcasingBlockContent>
        }
      />
    </ShowcasingContainer>
  );
};

export default ShowcasingBlock;
