import { Margin } from '../../components/core/spacing';
import { Heading4, P } from '../../components/core/typography';
import {
  ShowcasingBlockContent,
  ShowcasingBlockImg,
  ShowcasingContainer,
} from './Showcasing.styles';
import ButtonTab from '../../components/buttons/ButtonTab';

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
      <ShowcasingBlockImg src={previewImage} alt={previewImageAlt} width={400} height={300} />

      <ShowcasingBlockContent>
        <Heading4>{title}</Heading4>
        <Margin bottom={40}>
          <P>{description}</P>
        </Margin>
        <ButtonTab url={url} buttonText={title} />
      </ShowcasingBlockContent>
    </ShowcasingContainer>
  );
};

export default ShowcasingBlock;
