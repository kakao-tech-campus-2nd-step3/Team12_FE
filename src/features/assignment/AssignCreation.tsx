import { DefaultPaddedContainer } from '@components/container/variants';
import Container from '@components/container';
import { Heading } from '@components/text';
import { Editor } from '@toast-ui/react-editor';
import '@toast-ui/editor/dist/toastui-editor.css';
import Button from '@components/button';
import { useRef, useState } from 'react';
import Input from '@components/input';
import AssignDeadline from '@features/assignment/AssignDeadline';
import toast from 'react-hot-toast';
import { css } from '@emotion/react';
import { createAssign } from '@/api/assignment';

export default function AssignCreation() {
  const editorRef = useRef<Editor>(null);
  const [title, setTitle] = useState('');
  const [deadline, setDeadline] = useState<string>(''); // deadline 상태 추가

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const handleDeadlineChange = (newDeadline: string) => {
    setDeadline(newDeadline);
  };

  const NoticeCreationBtn = async () => {
    if (!editorRef.current) return;

    const content = editorRef.current.getInstance().getMarkdown();

    try {
      await createAssign({
        studyId: 11, // 실제 사용할 studyId로 변경 필요
        title,
        content,
        deadline,
      });
      toast.success('과제가 성공적으로 작성되었습니다!');
    } catch (error) {
      toast.error('과제 작성 중 오류가 발생하였습니다.');
    }
  };

  return (
    <DefaultPaddedContainer css={{ boxShadow: '0 2px 2px rgba(0, 0, 0, 0.1)' }}>
      <Container direction="column" padding="60px" align="flex-start">
        <Container justify="flex-start" padding="20px 0">
          <Heading.H2 weight="bold">과제 등록하기</Heading.H2>
        </Container>
        <Container justify="space-between">
          <Container justify="flex-start" padding="0 0 20px 0">
            <Heading.H4>제목: </Heading.H4>
            <Input
              type="text"
              value={title}
              onChange={handleTitleChange}
              css={{ width: '300px', height: '30px', marginLeft: '15px' }}
            />
          </Container>
          <AssignDeadline onDeadlineChange={handleDeadlineChange} />
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
          <Button variant="primary" onClick={NoticeCreationBtn}>등록하기</Button>
        </Container>

      </Container>

    </DefaultPaddedContainer>
  );
}
