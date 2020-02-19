import { storiesOf } from '@storybook/react';
import { theme } from '../../theme';
import { hostDecorator } from '../../utils';
import * as React from 'react';
import { Timeline, TimelineEvent as TimelineEventType } from './Timeline';
import { TimelineEvent } from './TimelineEvent';
import { StatusComponent } from './Status';
import { Content } from './Content';

const COLOR_GREEN = theme.palette.signal.greenDark;
const COLOR_ORANGE = theme.palette.signal.orangeDark;

const DESCRIPTION =
  'Misalignment, continues the paper, exists when the centre lines of two neighbouring machines deviate from each other.';

const BASE_PROP_EVENTS = {
  domId: '1',
  content: {
    title: 'Misalignment',
    timestamp: 1519223596657,
    description: DESCRIPTION
  }
};

const baseProps: {
  events: ReadonlyArray<TimelineEventType>;
  scrollToLast: boolean;
} = {
  events: [
    {
      color: COLOR_ORANGE,
      arrangement: 'start',
      title: 'Improper or inadequate maintenance',
      timestamp: 1519296926000,
      description:
        'Error in machine maintenance, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla varius felis fringilla felis volutpat volutpat. Nunc felis mi, placerat vitae posuere nec, condimentum in lectus.'
    },
    {
      color: COLOR_ORANGE,
      arrangement: 'continue',
      title: 'Assembly errors',
      timestamp: 1519300526000,
      description:
        'Mechanical error on the assembly line, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla varius felis fringilla felis volutpat volutpat. Nunc felis mi, placerat vitae posuere nec, condimentum in lectus.'
    },
    {
      color: COLOR_ORANGE,
      arrangement: 'end',
      title: 'Assembly errors',
      timestamp: 1519304126000,
      description: 'Calibration error on the assembly line.'
    },
    {
      color: COLOR_GREEN,
      arrangement: 'single',
      title: 'Resolved',
      timestamp: 1519307726000
    }
  ],
  scrollToLast: true
};

const intervalsProps: {
  events: ReadonlyArray<TimelineEventType>;
  scrollToLast: boolean;
} = {
  events: [
    {
      color: COLOR_ORANGE,
      arrangement: 'start',
      title: 'Improper or inadequate maintenance',
      timestamp: 1517448369000,
      description:
        'Error in machine maintenance, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla varius felis fringilla felis volutpat volutpat. Nunc felis mi, placerat vitae posuere nec, condimentum in lectus.'
    },
    {
      color: COLOR_ORANGE,
      arrangement: 'continue',
      title: 'Assembly errors',
      timestamp: 1517451969000,
      description:
        'Mechanical error on the assembly line, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla varius felis fringilla felis volutpat volutpat. Nunc felis mi, placerat vitae posuere nec, condimentum in lectus.'
    },
    {
      color: COLOR_ORANGE,
      arrangement: 'end',
      title: 'Assembly errors',
      timestamp: 1517455569000,
      description: 'Calibration error on the assembly line.'
    },
    {
      color: COLOR_GREEN,
      arrangement: 'single',
      title: 'Resolved',
      timestamp: 1517459169000
    },
    {
      color: COLOR_ORANGE,
      arrangement: 'start',
      title: 'Improper or inadequate maintenance',
      timestamp: 1517462769000,
      description:
        'Error in machine maintenance, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla varius felis fringilla felis volutpat volutpat. Nunc felis mi, placerat vitae posuere nec, condimentum in lectus.'
    },
    {
      color: COLOR_ORANGE,
      arrangement: 'end',
      title: 'Assembly errors',
      timestamp: 1517466369000,
      description: 'Calibration error on the assembly line.'
    },
    {
      color: COLOR_GREEN,
      arrangement: 'single',
      title: 'Resolved',
      timestamp: 1517469969000
    },
    {
      color: COLOR_ORANGE,
      arrangement: 'single',
      title: 'Assembly errors',
      timestamp: 1517473569000
    },
    {
      color: COLOR_GREEN,
      arrangement: 'single',
      title: 'Resolved',
      timestamp: 1517477169000
    }
  ],
  scrollToLast: true
};

storiesOf('Components|Timeline', module)
  .addDecorator(hostDecorator({}))
  .add('Base', () => <Timeline {...baseProps} />)
  .add('Intervals', () => <Timeline {...intervalsProps} />)
  .add('Part: Event single', () => {
    const props = {
      domId: '1',
      content: {
        title: 'Resumed',
        timestamp: 1519297197594
      },
      status: { color: COLOR_GREEN, arrangement: 'single' as 'single' }
    };
    return <TimelineEvent {...props} />;
  })
  .add('Part: Event start', () => {
    const props = {
      ...BASE_PROP_EVENTS,
      status: { color: COLOR_ORANGE, arrangement: 'start' as 'start' }
    };
    return <TimelineEvent {...props} />;
  })
  .add('Part: Event continue', () => {
    const props = {
      ...BASE_PROP_EVENTS,
      status: { color: COLOR_ORANGE, arrangement: 'continue' as 'continue' }
    };
    return <TimelineEvent {...props} />;
  })
  .add('Part: Event end', () => {
    const props = {
      ...BASE_PROP_EVENTS,
      status: { color: COLOR_ORANGE, arrangement: 'end' as 'end' }
    };
    return <TimelineEvent {...props} />;
  })
  .add('Part: Status single', () => (
    <StatusComponent color={theme.color.activeGreen} arrangement="single" />
  ))
  .add('Part: Status start', () => (
    <StatusComponent color={theme.palette.signal.orangeDark} arrangement="start" />
  ))
  .add('Part: Status middle', () => (
    <StatusComponent color={theme.palette.signal.orangeDark} arrangement="continue" />
  ))
  .add('Part: Status end', () => (
    <StatusComponent color={theme.palette.signal.orangeDark} arrangement="end" />
  ))
  .add('Part: Content base', () => <Content title="Misalignment" timestamp={1519223596657} />)
  .add('Part: Content description', () => {
    const props = {
      title: 'Misalignment',
      timestamp: 1519223596657,
      description:
        'Misalignment, continues the paper, exists when the centre lines of two neighbouring machines deviate from each other.'
    };
    return <Content {...props} />;
  });
