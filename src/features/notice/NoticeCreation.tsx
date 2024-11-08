import { DefaultPaddedContainer } from '@components/container/variants';
import Container from '@components/container';
import { Heading } from '@components/text';
import { Editor } from '@toast-ui/react-editor';
import '@toast-ui/editor/dist/toastui-editor.css';
import Button from '@components/button';
import { useCallback, useRef } from 'react';

export default function NoticeCreation() {
  const editorRef = useRef<Editor>(null);

  const NoticeCreationBtn = useCallback(() => {
    console.log('click');
    if (!editorRef.current) return;
    const markdown = editorRef.current.getInstance().getMarkdown();
    const html = editorRef.current.getInstance().getHTML();
    console.log('markdown', markdown);
    console.log('html', html);
  }, []);

  return (
    <DefaultPaddedContainer css={{ boxShadow: '0 2px 2px rgba(0, 0, 0, 0.1)' }}>
      <Container direction="column" padding="0 10px 50px 10px">
        <Container justify="flex-start" padding="15px">
          <Heading.H2 css={{ margin: '20px 20px' }}>공지 쓰기</Heading.H2>
        </Container>
        <Editor
          initialValue="공지사항 내용 작성해주세요."
          previewStyle="vertical"
          height="600px"
          initialEditType="markdown"
          useCommandShortcut={false}
          hideModeSwitch={true}
        />
        <Container justify="flex-end">
          <Button variant="primary" onClick={NoticeCreationBtn}>제출하기</Button>
        </Container>

      </Container>

    </DefaultPaddedContainer>
  );
}
