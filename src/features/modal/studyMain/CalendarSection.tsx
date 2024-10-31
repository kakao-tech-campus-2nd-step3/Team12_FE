import Container from '@components/container';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useState } from 'react';
import { css } from '@emotion/react';
import Switch from '@components/switch';
import colorTheme from '@styles/colors';
import { Controller, useForm } from 'react-hook-form';
import { Paragraph } from '@components/text';

export default function CalendarSection() {
  const [startDate, setStartDate] = useState<Date | null>(new Date());
  const [isChecked, setIsChecked] = useState(false);
  const methods = useForm();

  return (
    <Container
      direction="column"
      width="30%"
      cssOverride={calendarSection}
    >
      <DatePicker
        selected={startDate}
        onChange={(date: Date | null) => setStartDate(date)}
        inline
      />
      <Container
        width="70%"
        justify="flex-start"
        cssOverride={css`margin-top: 5px;`}
      >
        <Controller
          name="isOpen"
          control={methods.control}
          render={({ field }) => (
            <Switch
              checked={isChecked}
              name={field.name}
              onCheckedChange={({ checked }) => {
                setIsChecked(checked);
                field.onChange(checked);
              }}
            />
          )}
        />
        <Paragraph variant="small" css={{ marginLeft: '10px' }}>
          {isChecked ? '모집중' : '모집마감'}
        </Paragraph>

      </Container>

    </Container>
  );
}

const calendarSection = css`
    .react-datepicker {
        border: none;
        width: 240px;
    }

    .react-datepicker__header {
        background-color: white;
        border-bottom: none;
        font-weight: bold;
    }

    .react-datepicker__day-name,
    .react-datepicker__day {
        color: ${colorTheme.text.prominent};
    }

    .react-datepicker__day--selected,
    .react-datepicker__day--keyboard-selected,
    .react-datepicker__day--highlighted,
    .react-datepicker__day:hover,
    .react-datepicker__day--highlighted:hover,
    .react-datepicker__day--highlighted:focus {
        background-color: ${colorTheme.primary.lighten};
        color: white;
        border-radius: 50%;
    }
`;
