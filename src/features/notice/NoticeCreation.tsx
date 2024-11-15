import { DefaultPaddedContainer } from '@components/container/variants';
import Container from '@components/container';
import { Heading } from '@components/text';
import { Editor } from '@toast-ui/react-editor';
import '@toast-ui/editor/dist/toastui-editor.css';
import Button from '@components/button';
import { useRef, useState } from 'react';
import Input from '@components/input';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import routePaths from '@constants/routePaths';
import { css } from '@emotion/react';
import { createNotice } from '@/api/notice';

interface NoticeCreationProps {
  studyId: number;
}

export default function NoticeCreation({ studyId }: NoticeCreationProps) {
  const editorRef = useRef<Editor>(null);
  const [title, setTitle] = useState('');
  const navigate = useNavigate();

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const handleNoticeButtonClick = async () => {
    if (!editorRef.current) return;

    const content = editorRef.current.getInstance().getMarkdown();
    try {
      await createNotice({
        studyId,
        title,
        content,
      });
      toast.success('공지사항이 성공적으로 작성되었습니다!');
      navigate(routePaths.STUDY_NOTICE(studyId));
    } catch (error) {
      toast.error('공지사항 저장에 실패했습니다.');
    }
  };

  return (
    <DefaultPaddedContainer css={{ boxShadow: '0 2px 2px rgba(0, 0, 0, 0.1)', backgroundColor: 'white' }}>
      <Container direction="column" padding="60px" align="flex-start">
        <Container justify="flex-start" padding="20px 0">
          <Heading.H2 weight="bold">공지 작성하기</Heading.H2>
        </Container>
        <Container justify="flex-start" padding="0 0 20px 0">
          <Heading.H4 css={{ padding: '' }}>제목: </Heading.H4>
          <Input
            type="text"
            value={title}
            onChange={handleTitleChange}
            css={{ width: '300px', height: '30px', marginLeft: '15px' }}
          />
        </Container>
        <Container css={css`
            & > div {
              width: 100%;
            }
          `}
        >

          <Editor
            ref={editorRef}
            previewStyle="vertical"
            height="400px"
            initialEditType="markdown"
            useCommandShortcut={false}
            hideModeSwitch={true}
          />
        </Container>
        <Container justify="flex-end" padding="20px 0">
          <Button variant="primary" onClick={handleNoticeButtonClick}>제출하기</Button>
        </Container>

      </Container>

    </DefaultPaddedContainer>
  );
}
