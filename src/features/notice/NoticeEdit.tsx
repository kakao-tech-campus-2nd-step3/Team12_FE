import { DefaultPaddedContainer } from '@components/container/variants';
import Container from '@components/container';
import { Heading } from '@components/text';
import { Editor } from '@toast-ui/react-editor';
import '@toast-ui/editor/dist/toastui-editor.css';
import Button from '@components/button';
import { useEffect, useRef, useState } from 'react';
import Input from '@components/input';
import Spinner from '@components/fallback/Spinner';
import { editNotice, getNoticeDetail } from '@/api/notice';

export default function NoticeEdit() {
  const editorRef = useRef<Editor>(null);
  const [title, setTitle] = useState('');
  const noticeId = '21'; // 임의로 설정한 공지 ID, 실제 데이터에 맞게 수정 필요
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchNoticeDetail = async () => {
      try {
        const data = await getNoticeDetail(noticeId);
        setTitle(data.title);
        if (editorRef.current) {
          editorRef.current.getInstance().setMarkdown(data.content);
        }
      } catch (error) {
        console.error('공지사항 불러오기 실패:', error);
        alert('공지사항을 불러오는 데 실패했습니다.');
      } finally {
        setLoading(false);
      }
    };
    fetchNoticeDetail();
  }, [noticeId]);

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const NoticeEditBtn = async () => {
    if (!editorRef.current) return;

    const content = editorRef.current.getInstance().getMarkdown(); // 마크다운 형식으로 저장

    try {
      await editNotice({
        noticeId,
        title,
        content,
      });
      alert('공지사항이 성공적으로 수정되었습니다.');
    } catch (error) {
      console.error('공지사항 수정 중 오류 발생:', error);
      alert('공지사항 수정 중 오류가 발생했습니다.');
    }
  };

  if (loading) {
    return <Spinner />;
  }

  return (
    <DefaultPaddedContainer css={{ boxShadow: '0 2px 2px rgba(0, 0, 0, 0.1)' }}>
      <Container direction="column" padding="0 10px 50px 10px">
        <Container justify="flex-start" padding="15px">
          <Heading.H2 css={{ margin: '20px 20px' }}>공지 수정</Heading.H2>
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
          <Button variant="primary" onClick={NoticeEditBtn}>수정하기</Button>
        </Container>

      </Container>

    </DefaultPaddedContainer>
  );
}
