import Container from '@components/container';
import Tag from '@components/tag';
import { Paragraph } from '@components/text';
import { useStudyItemStyles } from '@features/main/studyList/StudyList.styles';
import Avatar from '@components/avatar';
import { CSSObject, useTheme } from '@emotion/react';
import UserIcon from '@assets/icons/user.svg?react';
import { useNavigate } from 'react-router-dom';
import routePaths from '@constants/routePaths';
import { useContext, useState } from 'react';
import ApplyStudyJoinModal from '@features/modal/invite/ApplyStudyJoinModal';
import { MemberInfoContext } from '@providers/MemberInfoProvider';
import toast from 'react-hot-toast';
import { DetailedStudyInfo } from '@/types/study';
import { getMyRole } from '@/api/study';

interface StudyItemProps {
  study: DetailedStudyInfo;
}

function StudyItem(
  {
    study,
  }: StudyItemProps,
) {
  const { containerStyle } = useStudyItemStyles();
  const { isLoggedIn } = useContext(MemberInfoContext);
  const [isJoinModalOpen, setIsJoinModalOpen] = useState(false);
  const navigate = useNavigate();
  const theme = useTheme();
  const handleStudyItemClick = async () => {
    if (!isLoggedIn) {
      toast.error('로그인이 필요한 작업입니다. 먼저 로그인해주세요!');
      return;
    }
    const role = await getMyRole(study.id);
    if (role === '미가입') {
      setIsJoinModalOpen(true);
      return;
    }
    navigate(routePaths.STUDY_INFO(study.id));
  };

  const singleEllipsis: CSSObject = {
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
  };

  const doubleEllipsis: CSSObject = {
    ...singleEllipsis,
    whiteSpace: 'normal',
    wordBreak: 'break-all',
    lineHeight: '16px',
  };

  return (
    <>
      <Container
        direction="column"
        height="100%"
        align="flex-start"
        padding="20px 20px 20px 26px"
        cssOverride={containerStyle}
        onClick={handleStudyItemClick}
      >
        <Container justify="space-between" align="flex-start">
          <Container
            padding="8px 0"
            align="flex-start"
            width="150px"
            direction="column"
            gap="8px"
            cssOverride={singleEllipsis}
          >
            <Paragraph variant="large" weight="bold" css={{ ...singleEllipsis, width: '100%' }}>{study.name}</Paragraph>
            <Paragraph variant="small" color={theme.colors.text.subtle}>
              #
              {study.topic}
            </Paragraph>
          </Container>
          <Tag variant={study.is_open ? 'primary' : 'default'}>
            <Paragraph variant="small">
              {study.is_open ? '모집중' : '마감'}
            </Paragraph>
          </Tag>
        </Container>
        <Container justify="flex-start" align="flex-start" height="56px" padding="8px 0 0 0" cssOverride={doubleEllipsis}>
          <Paragraph variant="small" css={doubleEllipsis}>{study.description}</Paragraph>
        </Container>
        <Container padding="12px 0 0 0">
          <Container justify="flex-start" gap="13px" cssOverride={{ flexGrow: 1 }}>
            <Avatar size="small" src={study.study_leader_info.profile_image} />
            <Paragraph variant="small">{study.study_leader_info.nickname}</Paragraph>
          </Container>
          <Container
            justify="flex-start"
            padding="0 6px 0 0"
            gap="4px"
            cssOverride={{ flexGrow: 0, color: theme.colors.primary.darken }}
            width="auto"
          >
            <UserIcon stroke={theme.colors.primary.darken} />
            {study.study_leader_info.number_of_people}
          </Container>
        </Container>
      </Container>
      {isJoinModalOpen
        && (
        <ApplyStudyJoinModal
          studyId={study.id}
          open={isJoinModalOpen}
          onClose={() => setIsJoinModalOpen(false)}
        />
        )}
    </>
  );
}

export default StudyItem;
