import { DefaultPaddedContainer } from '@components/container/variants';
import Container from '@components/container';
import { Heading } from '@components/text';
import { Editor } from '@toast-ui/react-editor';
import '@toast-ui/editor/dist/toastui-editor.css';
import Button from '@components/button';
import { useEffect, useRef, useState } from 'react';
import Input from '@components/input';
import Spinner from '@components/fallback/Spinner';
import toast from 'react-hot-toast';
import routePaths from '@constants/routePaths';
import { useNavigate, useParams } from 'react-router-dom';
import Page from '@components/template/Page';
import Spacing from '@components/spacing';
import { css } from '@emotion/react';
import { editNotice, getNoticeDetail } from '@/api/notice';
import { isIntegerString } from '@/utils';

export default function NoticeEditPage() {
  const { noticeId } = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    if (!noticeId || !isIntegerString(noticeId)) {
      navigate(routePaths.MAIN);
    }
  }, [navigate, noticeId]);
  const editorRef = useRef<Editor>(null);
  const [title, setTitle] = useState('');
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchNoticeDetail = async () => {
      if (!noticeId) return;
      try {
        const data = await getNoticeDetail(noticeId);
        setTitle(data.title);
        if (editorRef.current) {
          editorRef.current.getInstance().setMarkdown(data.content);
        }
      } catch (error) {
        toast.error('공지사항을 불러오는 데 실패했습니다.');
      } finally {
        setLoading(false);
      }
    };
    fetchNoticeDetail();
  }, [noticeId]);

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const handleNoticeEdit = async () => {
    if (!editorRef.current || !noticeId) return;

    const content = editorRef.current.getInstance().getMarkdown(); // 마크다운 형식으로 저장

    try {
      await editNotice({
        noticeId,
        title,
        content,
      });
      toast.success('공지사항이 성공적으로 수정되었습니다.');
      navigate(-1);
    } catch (error) {
      toast.error('공지사항 수정 중 오류가 발생했습니다.');
    }
  };

  if (loading) {
    return <Spinner />;
  }

  return (
    <Page>
      <Spacing height={40} />
      <DefaultPaddedContainer css={{ boxShadow: '0 2px 2px rgba(0, 0, 0, 0.1)', backgroundColor: 'white' }}>
        <Container direction="column" padding="60px" align="flex-start">
          <Container justify="flex-start" padding="20px 0">
            <Heading.H2 weight="bold">공지 수정</Heading.H2>
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
            <Button variant="primary" onClick={handleNoticeEdit}>수정하기</Button>
          </Container>

        </Container>
      </DefaultPaddedContainer>
      <Spacing height={40} />
    </Page>
  );
}
