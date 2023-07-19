import {
  FadingDivLeft,
  FadingDivRight,
  FadingDivUp,
} from '../../components/blocks/FadingDiv.styles';
import { Margin } from '../../components/core/spacing';
import { Heading4, P } from '../../components/core/typography';
import { IsTablet, LargerThanTablet } from '../../components/screenSize/ScreenSize.styles';
import {
  HousekeepingAlternatingDivContainer,
  HousekeepingContentContainer,
} from './HousekeepersLodge.styles';

type HousekeepingContentProps = {
  title: string;
  text: string[] | null;
  list: string[] | null;
};
const HousekeepingContent = ({ title, text, list }: HousekeepingContentProps) => (
  <HousekeepingContentContainer>
    <Heading4>{title}</Heading4>
    {text &&
      text.map((t, i) => (
        <div key={i}>
          <P>{t}</P>
        </div>
      ))}
    {list && (
      <ol>
        {list.map((l, i) => (
          <li key={i}>
            <P>{l}</P>
          </li>
        ))}
      </ol>
    )}
  </HousekeepingContentContainer>
);

type HousekeepingAlternativeDivProps = {
  index: number;
  imageSource: string;
  imageAlt: string;
} & HousekeepingContentProps;
const HousekeepingAlternatingDiv = ({
  index,
  title,
  imageSource,
  imageAlt,
  text,
  list,
}: HousekeepingAlternativeDivProps & HousekeepingContentProps) => {
  return (
    <>
      <IsTablet>
        <Margin bottom={40}>
          <div>
            <img src={imageSource} alt={imageAlt} width="100%" />
          </div>
          <FadingDivUp>
            <HousekeepingContent title={title} text={text} list={list} />
          </FadingDivUp>
        </Margin>
      </IsTablet>

      <LargerThanTablet>
        <HousekeepingAlternatingDivContainer>
          {index % 2 === 1 ? (
            <>
              <FadingDivRight>
                <HousekeepingContent title={title} text={text} list={list} />
              </FadingDivRight>
              <div>
                <img src={imageSource} alt={imageAlt} width={'100%'} height={'100%'} />
              </div>
            </>
          ) : (
            <>
              <div>
                <img src={imageSource} alt={imageAlt} width={'100%'} height={'100%'} />
              </div>
              <FadingDivLeft>
                <HousekeepingContent title={title} text={text} list={list} />
              </FadingDivLeft>
            </>
          )}
        </HousekeepingAlternatingDivContainer>
      </LargerThanTablet>
    </>
  );
};

export default HousekeepingAlternatingDiv;
