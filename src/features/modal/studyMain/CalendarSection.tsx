import Container from '@components/container';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useState } from 'react';
import { css } from '@emotion/react';
import Switch from '@components/switch';
import colorTheme from '@styles/colors';

export default function CalendarSection() {
  const [startDate, setStartDate] = useState<Date | null>(new Date());
  const [isChecked, setIsChecked] = useState(true); // 초기 스위치 상태

  const handleCheckChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newCheckedState = e.target.checked; // 새 체크 상태
    setIsChecked(newCheckedState); // 체크 상태 업데이트
    console.log('Checked state changed:', newCheckedState); // 체크 상태 출력
  };

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
        width="60%"
        justify="flex-start"
        cssOverride={css`margin-top: 5px;`}
      >
        <Switch
          type="checkbox"
          defaultChecked={isChecked} // 초기 체크 상태 설정
          onChange={handleCheckChange}
        />
        <span css={{ marginLeft: '8px' }}>
          {isChecked ? '모집 중' : '모집 마감'}
        </span>
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
