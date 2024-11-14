import { DefaultPaddedContainer } from '@components/container/variants';
import Container from '@components/container';
import { Heading } from '@components/text';
import { Editor } from '@toast-ui/react-editor';
import '@toast-ui/editor/dist/toastui-editor.css';
import Button from '@components/button';
import { useRef, useState } from 'react';
import Input from '@components/input';
import toast from 'react-hot-toast';
import { createNotice } from '@/api/notice';

export default function NoticeCreation() {
  const editorRef = useRef<Editor>(null);
  const [title, setTitle] = useState('');

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const NoticeCreationBtn = async () => {
    if (!editorRef.current) return;

    const content = editorRef.current.getInstance().getMarkdown();
    try {
      await createNotice({
        studyId: 5, // 실제 사용할 studyId로 변경 필요
        title,
        content,
      });
      toast.success('공지사항이 성공적으로 작성되었습니다!');
    } catch (error) {
      toast.error('공지사항 저장에 실패했습니다.');
    }
  };

  return (
    <DefaultPaddedContainer css={{ boxShadow: '0 2px 2px rgba(0, 0, 0, 0.1)' }}>
      <Container direction="column" padding="0 10px 50px 10px">
        <Container justify="flex-start" padding="15px">
          <Heading.H2 css={{ margin: '20px 20px' }}>공지 쓰기</Heading.H2>
        </Container>
        <Container justify="flex-start">
          <Heading.H4 css={{ padding: '20px 15px 20px 70px' }}>제목: </Heading.H4>
          <Input
            type="text"
            value={title}
            onChange={handleTitleChange}
            css={{ width: '300px', height: '30px' }}
          />
        </Container>
        <Editor
          ref={editorRef}
          previewStyle="vertical"
          height="400px"
          initialEditType="markdown"
          useCommandShortcut={false}
          hideModeSwitch={true}
        />
        <Container justify="flex-end" padding="20px 60px">
          <Button variant="primary" onClick={NoticeCreationBtn}>제출하기</Button>
        </Container>

      </Container>

    </DefaultPaddedContainer>
  );
}
