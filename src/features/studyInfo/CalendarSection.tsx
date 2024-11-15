import Container from '@components/container';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useContext, useState } from 'react';
import { css } from '@emotion/react';
import colorTheme from '@styles/colors';
import { Paragraph } from '@components/text';
import StudyEditModal from '@features/modal/studyEdit/StudyEditModal';
import { StudyInfoContext } from '@providers/StudyInfoProvider';

export default function CalendarSection() {
  const [startDate, setStartDate] = useState<Date | null>(new Date());
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const handleEditClick = () => {
    setIsEditModalOpen(true);
  };
  const { study } = useContext(StudyInfoContext);

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
      />
      {
        study.my_role === '스터디장'
        && (
        <Paragraph
          variant="small"
          css={{ textDecoration: 'underline', cursor: 'pointer' }}
          onClick={handleEditClick}
        >
          스터디 정보 수정하기
        </Paragraph>
        )
      }
      {
        isEditModalOpen
        && (
        <StudyEditModal
          studyId={study.id}
          open={isEditModalOpen}
          onClose={() => setIsEditModalOpen(false)}
        />
        )
      }
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
