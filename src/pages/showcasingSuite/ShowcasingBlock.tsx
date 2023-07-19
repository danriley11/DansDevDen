import { Margin } from '../../components/core/spacing';
import { Heading4, P } from '../../components/core/typography';
import {
  ShowcasingBlockContent,
  ShowcasingBlockImg,
  ShowcasingContainer,
} from './Showcasing.styles';
import ButtonTab from '../../components/buttons/ButtonTab';
import { FadingDivLeft, FadingDivRight } from '../../components/blocks/FadingDiv.styles';

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
      <FadingDivRight>
        <ShowcasingBlockImg src={previewImage} alt={previewImageAlt} width={400} height={300} />
      </FadingDivRight>

      <FadingDivLeft>
        <ShowcasingBlockContent>
          <Heading4>{title}</Heading4>
          <Margin bottom={40}>
            <P>{description}</P>
          </Margin>
          <ButtonTab url={url} buttonText={title} />
        </ShowcasingBlockContent>
      </FadingDivLeft>
    </ShowcasingContainer>
  );
};

export default ShowcasingBlock;
