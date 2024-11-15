import { useState, useEffect } from 'react';
import { DefaultPaddedContainer } from '@components/container/variants';
import Container from '@components/container';
import { Heading, Paragraph } from '@components/text';
import Avatar from '@components/avatar';
import Button from '@components/button';
import Input from '@components/input';
import { css } from '@emotion/react';
import theme from '@styles/theme';
import toast from 'react-hot-toast';
import Checkbox from '@components/checkbox';
import { editStudyInfo, editStudyProfile, getStudyInfo } from '@/api/study';

interface StudyEditSectionProps {
  studyId: number;
  onClose: () => void;
}

export default function StudyEditSection({ studyId, onClose }: StudyEditSectionProps) {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [isOpen, setIsOpen] = useState<boolean>(true);
  const [topic, setTopic] = useState('');
  const [profileImage, setProfileImage] = useState('');
  const [file, setFile] = useState<File | null>(null);

  useEffect(() => {
    const fetchStudy = async () => {
      const data = await getStudyInfo(studyId);
      setName(data.name || '');
      setDescription(data.description || '');
      setIsOpen(data.is_open);
      setTopic(data.topic || '');
      setProfileImage(data.profile_image || '');
    };
    fetchStudy();
  }, [studyId]);

  const handleSave = async () => {
    const updatedData = {
      name,
      description,
      is_open: isOpen,
      topic,
    };

    try {
      const formData = new FormData();
      if (file) {
        formData.append('profile_image', file);
      } else {
        const defaultImage = await fetch(profileImage);
        const blob = await defaultImage.blob();
        formData.append('profile_image', new Blob([blob], { type: 'multipart/form-data' }));
      }
      await editStudyProfile(studyId, formData);
      await editStudyInfo(studyId, updatedData);
      toast.success('스터디 정보가 수정되었습니다.');
      onClose();
    } catch (error) {
      toast.error('스터디 정보 저장에 실패했습니다.');
    }
  };

  const handleStudyOpenChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsOpen(e.target.checked);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile) {
      setFile(selectedFile);
      setProfileImage(URL.createObjectURL(selectedFile)); // 이미지 URL로 변경
    }
  };

  return (
    <DefaultPaddedContainer>
      <Container direction="column" padding="30px 10px 30px 10px">
        <Container justify="flex-start" align="flex-start" padding="0 0 15px 0">
          <Heading.H3 weight="bold">스터디 정보 수정</Heading.H3>
        </Container>
        <Container direction="column" gap="8px">
          <Avatar size="large" src={profileImage} css={{ marginBottom: '10px' }} />
          <Container direction="column" gap="8px" css={{ marginBottom: '10px' }}>
            <Paragraph weight="bold">프로필 이미지</Paragraph>
            <input
              type="file"
              accept="image/*"
              onChange={handleFileChange}
              css={{ marginLeft: '30%' }}
            />
          </Container>
        </Container>

        <Input
          type="text"
          placeholder={name}
          value={name}
          label="스터디명"
          onChange={(e) => setName(e.target.value)}
          css={{ marginBottom: '10px', width: '100%' }}
        />

        <Input
          type="text"
          value={description}
          label="스터디 설명"
          onChange={(e) => setDescription(e.target.value)}
          placeholder={description}
          css={{ marginBottom: '10px' }}
        />
        <Container gap="8px" cssOverride={{ marginBottom: '10px' }}>
          <Paragraph>스터디 모집 여부</Paragraph>
          <Checkbox
            checked={isOpen}
            onChange={handleStudyOpenChange}
            css={checkboxStyle}
          />
        </Container>

        <Input
          type="text"
          value={topic}
          label="스터디 주제"
          onChange={(e) => setTopic(e.target.value)}
          placeholder={topic}
          width="100%"
        />

        <Container justify="flex-end" padding="20px">
          <Button onClick={handleSave}>저장</Button>
        </Container>
      </Container>
    </DefaultPaddedContainer>
  );
}

const checkboxStyle = css`
  width: 18px;
  height: 18px;
  accent-color: ${theme.colors.primary.main};
  border: 2px solid ${theme.colors.border.prominent};
`;
