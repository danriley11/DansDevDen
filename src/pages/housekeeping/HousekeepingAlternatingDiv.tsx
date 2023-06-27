import { Heading4, P } from '../../components/core/typography';
import { HousekeepingAlternatingDivContainer } from './Housekeeping.styles';

type Props = {
  index: number;
  title: string;
  imageSource: string;
  imageAlt: string;
  text: string[] | null;
  list: string[] | null;
};
const HousekeepingAlternatingDiv = ({ index, title, imageSource, imageAlt, text, list }: Props) => {
  return (
    <HousekeepingAlternatingDivContainer>
      {index % 2 === 1 ? (
        <>
          <div>
            <Heading4>{title}</Heading4>

            {text &&
              text.map((t) => (
                <div>
                  <P>{t}</P>
                </div>
              ))}

            {list && (
              <ol>
                {list.map((l) => (
                  <li>
                    <P>{l}</P>
                  </li>
                ))}
              </ol>
            )}
          </div>

          <div>
            <img src={imageSource} alt={imageAlt} />
          </div>
        </>
      ) : (
        <>
          <div>
            <img src={imageSource} alt={imageAlt} />
          </div>

          <div>
            <Heading4>{title}</Heading4>
            {text &&
              text.map((t) => (
                <div>
                  <P>{t}</P>
                </div>
              ))}

            {list && (
              <>
                <ol>
                  {list.map((l) => (
                    <li>
                      <P>{l}</P>
                    </li>
                  ))}
                </ol>
              </>
            )}
          </div>
        </>
      )}
    </HousekeepingAlternatingDivContainer>
  );
};

export default HousekeepingAlternatingDiv;
