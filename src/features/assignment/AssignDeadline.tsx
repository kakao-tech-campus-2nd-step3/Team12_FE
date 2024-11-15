import ReactDatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useRef, useState } from 'react';
import Container from '@components/container';
import { css, useTheme } from '@emotion/react';
import { addMonths } from 'date-fns';
import { Paragraph } from '@components/text';

interface AssignCreationDateProps {
  onDeadlineChange: (deadline: string) => void;
}

export default function AssignDeadline({ onDeadlineChange }: AssignCreationDateProps) {
  const datepickerRef = useRef<ReactDatePicker>(null);
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());
  const theme = useTheme();

  const handleDateTimeChange = (date: Date) => {
    setSelectedDate(date);
    const formattedDeadline = `${date.getFullYear()}-${(date.getMonth() + 1).toString().padStart(2, '0')}-${date.getDate().toString().padStart(2, '0')} ${date.getHours().toString().padStart(2, '0')}:${date.getMinutes().toString().padStart(2, '0')}`;
    onDeadlineChange(formattedDeadline);
  };

  const calendarSection = css`

    .react-datepicker__input-container input {
      height: 20px;
      padding: 8px;
      font-size: 15px;
      border-radius: 5px;
      border: 1px solid #ccc;
    }
    
  .react-datepicker-popper {
    margin: 0;
  }

  .react-datepicker__day:hover,
  .react-datepicker__day--selected,
  .react-datepicker__day--keyboard-selected,
  li.react-datepicker__time-list-item--selected {
    background-color: ${theme.colors.primary.main} !important;
    color: white !important;
  }
`;

  return (
    <Container direction="column" justify="flex-end" width="auto" align="flex-end" gap="5px" padding="10px 10px">
      <Paragraph>마감 기한</Paragraph>
      <Container gap="5px" justify="flex-end" align="flex-end" cssOverride={calendarSection}>
        <ReactDatePicker
          ref={datepickerRef}
          shouldCloseOnSelect
          placeholderText="선택하세요"
          selected={selectedDate}
          showTimeSelect
          timeIntervals={30}
          timeCaption="Time"
          dateFormat="yyyy-MM-dd HH:mm"
          minDate={new Date()}
          maxDate={addMonths(new Date(), 1)}
          onChange={(date) => handleDateTimeChange(date as Date)}
        />
      </Container>
    </Container>
  );
}
