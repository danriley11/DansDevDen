import dayjs from 'dayjs';
import { Container } from '../../components/pageStructure/Container.styles';
import { PageHeader } from '../../components/pageStructure/header/PageHeading.styles';
import { DayDate, GridContainer, GridItem, DayGoals } from './PlanningSuite.styles';
import { Heading4 } from '../../components/core/typography';
import { CenterAlign, Margin } from '../../components/core/spacing';
import { NavBacking } from '../../components/pageStructure/header/Navbar.styles';
import { JULY_PLANNING_GOALS } from './PlanningSuite.constants';

const PlanningSuite = () => {
  const date = dayjs();
  const startOfMonth = date.startOf('month');
  const endOfMonth = date.endOf('month');
  const daysInMonth = endOfMonth.diff(startOfMonth, 'day') + 1;
  const daysArray = Array.from({ length: daysInMonth }, (_, index) => {
    const day = startOfMonth.add(index, 'day');
    return {
      date: day,
      goals: JULY_PLANNING_GOALS[index % JULY_PLANNING_GOALS.length],
    };
  });
  const currentDate = dayjs();

  return (
    <>
      <NavBacking />

      <Margin bottom={128}>
        <PageHeader>Planning Suite</PageHeader>

        <Container>
          <CenterAlign>
            <Heading4>{date.format('MMMM YYYY')}</Heading4>
          </CenterAlign>

          <GridContainer>
            {daysArray.map((day, i) => (
              <div key={i}>
                <GridItem key={day.date.format('YYYY-MM-DD')} isCurrentDay={day.date.isSame(currentDate, 'day')}>
                  <DayDate>{day.date.format('D ddd')}</DayDate>
                  <ul>
                    {day.goals.map((goal, i) => (
                      <li key={i}>
                        <DayGoals key={i}>{goal}</DayGoals>
                      </li>
                    ))}
                  </ul>
                </GridItem>
              </div>
            ))}
          </GridContainer>
        </Container>
      </Margin>
    </>
  );
};

export default PlanningSuite;
