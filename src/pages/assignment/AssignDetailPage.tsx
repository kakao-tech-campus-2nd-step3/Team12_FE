import { useEffect, useState } from 'react';
import Container from '@components/container';
import { Heading, Paragraph } from '@components/text';
import { DefaultPaddedContainer } from '@components/container/variants';
import Spinner from '@components/fallback/Spinner';
import { css, useTheme } from '@emotion/react';
import Button from '@components/button';
import { Viewer } from '@toast-ui/react-editor';
import '@toast-ui/editor/dist/toastui-editor-viewer.css';
import toast from 'react-hot-toast';
import { useNavigate, useParams } from 'react-router-dom';
import routePaths from '@constants/routePaths.ts';
import Page from '@components/template/Page';
import Spacing from '@components/spacing';
import { AssignDetail } from '@/types/assignment';
import { deleteAssign, getAssignDetail } from '@/api/assignment';
import { isIntegerString } from '@/utils';

export default function AssignDetailPage() {
  const { assignId } = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    if (!assignId || !isIntegerString(assignId)) {
      navigate(routePaths.MAIN);
    }
  }, [navigate, assignId]);
  const [assign, setAssign] = useState<AssignDetail | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const theme = useTheme();

  useEffect(() => {
    if (!assignId) return;

    const fetchAssignDetail = async () => {
      try {
        const data = await getAssignDetail(assignId);
        setAssign(data);
      } catch (error) {
        toast.error('과제를 불러오는 데 실패했습니다.');
      } finally {
        setLoading(false);
      }
    };
    fetchAssignDetail();
  }, [assignId]);

  const handleDelete = async () => {
    if (!assignId) return;
    if (window.confirm('정말로 이 과제를 삭제하시겠습니까?')) {
      try {
        await deleteAssign(assignId);
        toast.success('과제가 성공적으로 삭제되었습니다.');
      } catch (deleteError) {
        toast.error('과제 삭제 중 오류가 발생했습니다.');
      }
    }
  };

  if (loading) {
    return <Spinner />;
  }

  return (
    <Page>
      <Spacing height={40} />
      <DefaultPaddedContainer css={{ boxShadow: '0 2px 2px rgba(0, 0, 0, 0.1)', backgroundColor: 'white' }}>
        <Container direction="column" padding="60px 20px 40px 20px">
          {assign ? (
            <>
              <Container
                padding="12px 0"
                cssOverride={css`
                    background-color: ${theme.colors.primary.passive};
                    border-top: 1px solid #000;
                    border-bottom: 1px solid ${theme.colors.border.prominent};`}
              >
                <Heading.H4>{assign.title}</Heading.H4>
              </Container>
              <Container padding="8px 20px" justify="space-between" cssOverride={{ borderBottom: `1px solid ${theme.colors.border.prominent}` }}>
                <Paragraph variant="small">
                  등록일:
                  {' '}
                  {assign.created_at}
                </Paragraph>
                <Paragraph variant="small">
                  마감일:
                  {' '}
                  {assign.deadline}
                </Paragraph>
              </Container>
              <Container
                justify="flex-start"
                align="flex-start"
                padding="8px 20px"
                cssOverride={{ borderBottom: `1px solid ${theme.colors.border.prominent}`, minHeight: '300px' }}
              >
                <Viewer initialValue={assign.content} />
              </Container>
            </>
          ) : (
            <Paragraph>해당 과제를 찾을 수 없습니다.</Paragraph>
          )}
          <Container justify="flex-end" padding="10px 8px" gap="8px">
            <Button
              onClick={() => navigate(routePaths.STUDY_ASSIGNMENT_EDIT(assign?.id as number))}
            >
              수정
            </Button>
            <Button
              variant="default"
              css={deleteBtnStyle}
              onClick={handleDelete}
            >
              삭제
            </Button>
            <Button
              variant="primary"
              onClick={() => navigate(-1)}
            >
              이전으로
            </Button>
          </Container>
        </Container>
      </DefaultPaddedContainer>
      <Spacing height={40} />
    </Page>
  );
}

const deleteBtnStyle = css`
  color: #FF5F5F;
  border: 1px solid #FF5F5F;
  :hover {
    color: #FF5F5F;
    border: 1px solid #FF5F5F;
  }
`;
