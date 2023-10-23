import { Margin } from '../../components/core/spacing';
import { Heading3, Heading4, P } from '../../components/core/typography';
import { ShowcasingBlockContent, ShowcasingBlockFooter, ShowcasingBlockImg, ShowcasingContainer } from './Showcasing.styles';
import ButtonTab from '../../components/buttons/ButtonTab';
import IntersectionWrapper from '../../components/inViewport/InView';

type ShowcasingBlockProps = {
  title: string;
  websiteUrl: string;
  githubUrl: string | null;
  description: string;
  previewImage: string;
  previewImageAlt: string;
  techStack: string[];
  howIKnow: string;
  launchDate: string;
  authors: string[];
};
const ShowcasingBlock = ({
  title,
  websiteUrl,
  githubUrl,
  description,
  previewImage,
  previewImageAlt,
  techStack,
  howIKnow,
  launchDate,
  authors,
}: ShowcasingBlockProps) => {
  console.log(techStack);

  return (
    <ShowcasingContainer>
      <IntersectionWrapper
        fadeRight
        children={<ShowcasingBlockImg src={previewImage} alt={previewImageAlt} width={400} height={300} />}
      />

      <IntersectionWrapper
        fadeUp
        children={
          <>
            <ShowcasingBlockContent>
              <Heading3>{title}</Heading3>
              <Margin bottom={40}>
                <P margin={0}>{description}</P>
              </Margin>
              <Margin bottom={16}>
                <ButtonTab url={websiteUrl} buttonText={title} disabled={websiteUrl === null} />
              </Margin>
              {githubUrl && (
                <Margin bottom={40}>
                  <br />
                  <ButtonTab url={githubUrl} buttonText="Github repository" />
                </Margin>
              )}
            </ShowcasingBlockContent>
          </>
        }
      />

      <IntersectionWrapper
        fadeLeft
        children={
          <ShowcasingBlockContent>
            <Heading4>Tech stack</Heading4>
            <P>{techStack.join(', ')}</P>
            <br />

            <Heading4>How did I learn to build this?</Heading4>
            <P>{howIKnow}</P>
            <br />

            <ShowcasingBlockFooter>
              {launchDate && (
                <div>
                  <Heading4>Launch Date</Heading4>
                  <P>{launchDate}</P>
                </div>
              )}
              {authors && (
                <div>
                  <Heading4>Author{authors.length === 1 ? '' : 's'}</Heading4>
                  <P>{authors.join(', ')}</P>
                </div>
              )}
            </ShowcasingBlockFooter>
          </ShowcasingBlockContent>
        }
      />
    </ShowcasingContainer>
  );
};

export default ShowcasingBlock;
