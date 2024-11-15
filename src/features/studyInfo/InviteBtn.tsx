import Container from '@components/container';
import { css } from '@emotion/react';
import theme from '@styles/theme';
import { useContext, useState } from 'react';
import { StudyInfoContext } from '@providers/StudyInfoProvider';
import InviteToStudyModal from '@features/modal/invite/InviteToStudyModal';
import toast from 'react-hot-toast';

export function InviteBtn() {
  const { study } = useContext(StudyInfoContext);
  const [isInviteModalOpen, setIsInviteModalOpen] = useState(false);
  const studyId = study.id;
  const handleInviteClick = () => {
    setIsInviteModalOpen(true);
  };
  return (
    <>
      <Container
        direction="column"
        height="100%"
        padding="20px 20px 20px 26px"
        cssOverride={css`
        border-radius: ${theme.corners.big};
        box-shadow: 0 2px 2px rgba(0, 0, 0, 0.25);
        max-height: 290px;
        background-color: #E1E1E1;
        user-select: none;
        cursor: pointer;
      `}
        onClick={handleInviteClick}
      >
        <div css={css`
        font-size: 70px;
        font-weight: lighter;
        color: #ACACAC;`}
        >
          +
        </div>
        <div css={css`
        color: #B1B1B1;`}
        >
          스터디원 초대하기
        </div>
      </Container>
      {
        isInviteModalOpen
          && (
          <InviteToStudyModal
            open={isInviteModalOpen}
            onClose={() => setIsInviteModalOpen(false)}
            studyId={studyId}
            studyName={study.name}
            copyComplete={() => toast.success('링크가 복사되었습니다!')}
          />
          )
      }
    </>
  );
}
