import { useState, useContext } from 'react';
import { DefaultPaddedContainer } from '@components/container/variants';
import Container from '@components/container';
import { Heading, Paragraph } from '@components/text';
import Avatar from '@components/avatar';
import Button from '@components/button';
import { MemberInfoContext } from '@providers/MemberInfoProvider.tsx';
import Input from '@components/input';
import toast from 'react-hot-toast';
import { editMyInfo } from '@/api/member';
import { EditMemberRequestBody } from '@/types/member';

export default function UserInfoEditSection() {
  const { memberInfo } = useContext(MemberInfoContext);

  const [name, setName] = useState(memberInfo?.name || '');
  const [nickname, setNickname] = useState(memberInfo?.nickname || '');
  const [contact, setContact] = useState(memberInfo?.contact || '');
  const [description, setDescription] = useState(memberInfo?.description || '');

  const handleSave = async () => {
    const updatedData: EditMemberRequestBody = {};

    if (name !== memberInfo?.name) updatedData.name = name;
    if (nickname !== memberInfo?.nickname) updatedData.nickname = nickname;
    if (contact !== memberInfo?.contact) updatedData.contact = contact;
    if (description !== memberInfo?.description) updatedData.description = description;

    try {
      await editMyInfo(updatedData);
    } catch (error) {
      toast.error('정보 저장에 실패했습니다.');
    }
  };

  return (
    <DefaultPaddedContainer css={{ boxShadow: '0 2px 2px rgba(0, 0, 0, 0.1)' }}>
      <Container direction="column" padding="0 10px 50px 10px">
        <Container justify="flex-start" padding="15px">
          <Heading.H2 css={{ margin: '20px 20px' }}>회원 정보 수정</Heading.H2>
        </Container>
        <Container direction="column" gap="8px">
          <Avatar size="large" src={memberInfo?.profile_image} css={{ marginBottom: '10px' }} />

          <Paragraph weight="bold">이름</Paragraph>
          <Input
            type="text"
            placeholder={memberInfo?.name}
            value={name}
            onChange={(e) => setName(e.target.value)}
            css={{ marginBottom: '10px' }}
          />

          <Paragraph weight="bold">닉네임</Paragraph>
          <Input
            type="text"
            value={nickname}
            onChange={(e) => setNickname(e.target.value)}
            placeholder={memberInfo?.nickname}
            css={{ marginBottom: '10px' }}
          />

          <Paragraph weight="bold">이메일</Paragraph>
          <Paragraph css={{ marginBottom: '10px' }}>{memberInfo?.email}</Paragraph>

          <Paragraph weight="bold">연락처</Paragraph>
          <Input
            type="text"
            value={contact}
            onChange={(e) => setContact(e.target.value)}
            placeholder={memberInfo?.contact}
            css={{ marginBottom: '10px' }}
          />

          <Paragraph weight="bold">자기소개</Paragraph>
          <Input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder={memberInfo?.description}
          />
        </Container>

        <Container justify="flex-end" padding="20px">
          <Button onClick={handleSave}>저장</Button>
        </Container>
      </Container>
    </DefaultPaddedContainer>
  );
}
