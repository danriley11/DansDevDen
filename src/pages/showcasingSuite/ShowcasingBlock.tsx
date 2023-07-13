import { Margin } from '../../components/core/spacing';
import { Heading4, P } from '../../components/core/typography';
import {
  ShowcasingBlockContent,
  ShowcasingBlockImg,
  ShowcasingContainer,
} from './Showcasing.styles';
import { ButtonLink } from '../../components/buttons/Buttons.styles';

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
    <Margin bottom={64}>
      <ShowcasingContainer>
        <ShowcasingBlockImg src={previewImage} alt={previewImageAlt} width={400} height={300} />

        <ShowcasingBlockContent>
          <Heading4>{title}</Heading4>
          <Margin bottom={40}>
            <P>{description}</P>
          </Margin>
          <ButtonLink target="_blank" href={url}>
            {title}
          </ButtonLink>
        </ShowcasingBlockContent>
      </ShowcasingContainer>
    </Margin>
  );
};

export default ShowcasingBlock;