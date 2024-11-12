import { DefaultPaddedContainer } from '@components/container/variants';
import Container from '@components/container';
import { Heading } from '@components/text';
import { Editor } from '@toast-ui/react-editor';
import '@toast-ui/editor/dist/toastui-editor.css';
import Button from '@components/button';
import { useRef, useState } from 'react';
import Input from '@components/input';
import AssignDeadline from '@features/assignment/AssignDeadline';
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

    console.log(content);
    try {
      await createAssign({
        studyId: 11, // 실제 사용할 studyId로 변경 필요
        title,
        content,
        deadline,
      });
      console.log('과제가 성공적으로 작성되었습니다.');
      alert('과제가 성공적으로 작성되었습니다!');
    } catch (error) {
      console.error('과제 작성 중 오류 발생:', error);
    }
  };

  return (
    <DefaultPaddedContainer css={{ boxShadow: '0 2px 2px rgba(0, 0, 0, 0.1)' }}>
      <Container direction="column" padding="0 10px 50px 10px">
        <Container justify="flex-start" padding="15px">
          <Heading.H2 css={{ margin: '20px 20px' }}>과제 등록하기</Heading.H2>
        </Container>
        <Container justify="flex-start">
          <Heading.H4 css={{ padding: '20px 15px 20px 40px' }}>제목: </Heading.H4>
          <Input
            type="text"
            value={title}
            onChange={handleTitleChange}
            css={{ width: '300px', height: '30px' }}
          />
        </Container>
        <AssignDeadline onDeadlineChange={handleDeadlineChange} />
        <Editor
          ref={editorRef}
          previewStyle="vertical"
          height="400px"
          initialEditType="markdown"
          useCommandShortcut={false}
          hideModeSwitch={true}
        />
        <Container justify="flex-end" padding="20px 60px">
          <Button variant="primary" onClick={NoticeCreationBtn}>등록하기</Button>
        </Container>

      </Container>

    </DefaultPaddedContainer>
  );
}
