import { useCallback, useEffect, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import { AxiosError } from 'axios';
import routePaths from '@constants/routePaths';
import { getStudyInfo, respondToInvitation } from '@/api/study';
import Container from '@/components/container';
import { Heading } from '@/components/text';
import AcceptInvitationModal from '@/features/modal/invite/AcceptInvitationModal';
import { Study } from '@/types/study';
import Button from '@/components/button';
import failureIcon from '@/assets/icons/failure.png';

export default function JoinStudyPage() {
  const [searchParams] = useSearchParams();
  const studyId = searchParams.get('study_id');
  const token = searchParams.get('token');
  const [open, setOpen] = useState(true);
  const [study, setStudy] = useState<Study | null>(null);
  const [inviteFailed, setInviteFailed] = useState(false);
  const navigate = useNavigate();

  const onClose = () => {
    setOpen(false);
    navigate(routePaths.MAIN);
  };

  const acceptInvitation = useCallback(async () => {
    if (!studyId || !token) return;

    try {
      await respondToInvitation(Number(studyId), token);
      setOpen(false);
      navigate(routePaths.STUDY_INFO(studyId), { state: { message: '스터디에 가입되었습니다!' } }); // 나중에 경로 수정
    } catch (error) {
      const axiosError = error as AxiosError;
      setOpen(false);
      setInviteFailed(true);
      toast.error(axiosError.response?.data as string || '초대 수락에 실패했습니다.');
    }
  }, [studyId, token, navigate]);

  useEffect(() => {
    const fetchStudy = async () => {
      const data = await getStudyInfo(Number(studyId));
      setStudy(data);
    };

    fetchStudy();
  }, [studyId]);

  return (
    <Container width="100vw" height="100vh">
      {study && !inviteFailed ? (
        <AcceptInvitationModal
          open={open}
          onClose={onClose}
          study={study}
          acceptInvitation={acceptInvitation}
        />
      ) : (
        <Container justify="center" align="center" height="100%" direction="column" gap="30px">
          <img src={failureIcon} alt="failure" width={200} height={200} />
          <Heading.H1>초대를 수락할 수 없습니다.</Heading.H1>
          <Button variant="primary" onClick={onClose}>메인으로</Button>
        </Container>
      )}
    </Container>
  );
}
