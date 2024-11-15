import { DefaultPaddedContainer } from '@components/container/variants';
import Container from '@components/container';
import { Heading } from '@components/text';
import { Editor } from '@toast-ui/react-editor';
import '@toast-ui/editor/dist/toastui-editor.css';
import Button from '@components/button';
import { useEffect, useRef, useState } from 'react';
import Input from '@components/input';
import AssignDeadline from '@features/assignment/AssignDeadline';
import Spinner from '@components/fallback/Spinner';
import toast from 'react-hot-toast';
import { useNavigate, useParams } from 'react-router-dom';
import routePaths from '@constants/routePaths.ts';
import Spacing from '@components/spacing';
import Page from '@components/template/Page';
import { css } from '@emotion/react';
import { editAssign, getAssignDetail } from '@/api/assignment';
import { isIntegerString } from '@/utils';

export default function AssignEditPage() {
  const { assignId } = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    if (!assignId || !isIntegerString(assignId)) {
      navigate(routePaths.MAIN);
    }
  }, [navigate, assignId]);
  const editorRef = useRef<Editor>(null);
  const [title, setTitle] = useState('');
  const [deadline, setDeadline] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchAssignDetail = async () => {
      if (!assignId) return;
      try {
        const data = await getAssignDetail(assignId);
        setTitle(data.title);
        setDeadline(data.deadline);
        if (editorRef.current) {
          editorRef.current.getInstance().setMarkdown(data.content);
        }
      } catch (error) {
        toast.error('과제를 불러오는데에 실패했습니다.');
      } finally {
        setLoading(false);
      }
    };
    fetchAssignDetail();
  }, [assignId]);

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const handleDeadlineChange = (newDeadline: string) => {
    setDeadline(newDeadline);
  };

  const handleAssignEdit = async () => {
    if (!editorRef.current || !assignId) return;

    const content = editorRef.current.getInstance().getMarkdown();

    try {
      await editAssign({
        assignId,
        title,
        content,
        deadline,
      });
      toast.success('과제가 성공적으로 수정되었습니다.');
      navigate(-1);
    } catch (error) {
      toast.error('과제 수정 중 오류가 발생했습니다.');
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
            <Heading.H2 weight="bold">과제 수정</Heading.H2>
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
            <Button variant="primary" onClick={handleAssignEdit}>수정하기</Button>
          </Container>

        </Container>
      </DefaultPaddedContainer>
      <Spacing height={40} />
    </Page>
  );
}
