import { getStudy, respondToInvitation } from "@/api/study";
import Container from "@/components/container";
import { Heading } from "@/components/text";
import AcceptInvitationModal from "@/features/modal/invite/AcceptInvitationModal";
import { Study } from "@/types/study";
import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { toast, Toaster } from "react-hot-toast";
import { AxiosError } from "axios";
import Button from "@/components/button";
import failureIcon from "@/assets/icons/failure.png";

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
    navigate('/');
  }

  async function acceptInvitation() {
    if (!studyId || !token) return;
  
    try {
      const response = await respondToInvitation(Number(studyId), token);
      setOpen(false);
      navigate('/', { state: { successMessage: response.data.message } });
    } catch (error) {
      const axiosError = error as AxiosError; 
      setOpen(false);
      setInviteFailed(true);
      toast.error(axiosError.response?.data as string || "초대 수락에 실패했습니다.");
    }
  }

  useEffect(() => {

    const fetchStudy = async () => {
        const data = await getStudy(Number(studyId));
        setStudy(data);
    };

    fetchStudy();
  }, [studyId]);

  return (
    <Container width="100vw" height="100vh">
      <Toaster position="bottom-center" reverseOrder={false} />
      {study && !inviteFailed ? (
        <AcceptInvitationModal
          open={open}
          onClose={onClose}
          study={study}
          acceptInvitation={acceptInvitation}
        />
      ) : (
        <Container justify="center" align="center" height="100%" direction="column" gap="30px">
          <img src={failureIcon} alt="failure" width={200} height={200}/>
          <Heading.H1>초대를 수락할 수 없습니다.</Heading.H1>
          <Button variant="primary" onClick={onClose}>메인으로</Button>
        </Container>
      )}
    </Container>
  );
}
