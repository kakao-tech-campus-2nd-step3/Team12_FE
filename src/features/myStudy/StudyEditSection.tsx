import { useState, useEffect } from 'react';
import { DefaultPaddedContainer } from '@components/container/variants';
import Container from '@components/container';
import { Heading, Paragraph } from '@components/text';
import Avatar from '@components/avatar';
import Button from '@components/button';
import Input from '@components/input';
import { css } from '@emotion/react';
import theme from '@styles/theme';
import { editStudyInfo, editStudyProfile, getStudyInfo } from '@/api/study';

export default function StudyEditSection() {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [isOpen, setIsOpen] = useState<boolean>(true);
  const [topic, setTopic] = useState('');
  const [profileImage, setProfileImage] = useState('');
  const [file, setFile] = useState<File | null>(null);
  const studyId = 57;

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
      }
      await editStudyProfile(studyId, formData);
      await editStudyInfo(studyId, updatedData);
      alert('스터디 정보가 수정되었습니다.');
    } catch (error) {
      alert('스터디 정보 저장에 실패했습니다.');
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
    <DefaultPaddedContainer css={{ boxShadow: '0 2px 2px rgba(0, 0, 0, 0.1)' }}>
      <Container direction="column" padding="0 10px 50px 10px">
        <Container justify="flex-start" padding="15px">
          <Heading.H2 css={{ margin: '20px 20px' }}>스터디 정보 수정</Heading.H2>
        </Container>
        <Container direction="column" gap="8px">
          <Avatar size="large" src={profileImage} css={{ marginBottom: '10px' }} />
          <Container direction="column" gap="8px" cssOverride={{ marginBottom: '10px' }}>
            <Paragraph weight="bold">프로필 이미지</Paragraph>
            <input
              type="file"
              accept="image/*"
              onChange={handleFileChange}
              css={{ marginLeft: '10%' }}
            />
          </Container>
        </Container>

        <Paragraph weight="bold">스터디명</Paragraph>
        <Input
          type="text"
          placeholder={name}
          value={name}
          onChange={(e) => setName(e.target.value)}
          css={{ marginBottom: '10px' }}
        />

        <Paragraph weight="bold">스터디 설명</Paragraph>
        <Input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder={description}
          css={{ marginBottom: '10px' }}
        />
        <Container gap="8px" cssOverride={{ marginBottom: '10px' }}>
          <Paragraph weight="bold">스터디 모집 여부</Paragraph>
          <input
            type="checkbox"
            checked={isOpen}
            onChange={handleStudyOpenChange}
            css={checkboxStyle}
          />
        </Container>

        <Paragraph weight="bold">스터디 주제</Paragraph>
        <Input
          type="text"
          value={topic}
          onChange={(e) => setTopic(e.target.value)}
          placeholder={topic}
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
