import { useEffect, useState } from 'react';
import Container from '@components/container';
import { Heading, Paragraph } from '@components/text';
import { DefaultPaddedContainer } from '@components/container/variants';
import Spinner from '@components/fallback/Spinner';
import { css, useTheme } from '@emotion/react';
import Button from '@components/button';
import { Viewer } from '@toast-ui/react-editor';
import routePaths from '@constants/routePaths';
import { useNavigate, useParams } from 'react-router-dom';
import toast from 'react-hot-toast';
import Page from '@components/template/Page';
import Spacing from '@components/spacing';
import { NoticeDetail } from '@/types/notice';
import { deleteNotice, getNoticeDetail } from '@/api/notice';
import '@toast-ui/editor/dist/toastui-editor-viewer.css';
import { isIntegerString } from '@/utils';

export default function NoticeDetailPage() {
  const { noticeId } = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    if (!noticeId || !isIntegerString(noticeId)) {
      navigate(routePaths.MAIN);
    }
  }, [navigate, noticeId]);
  const [notice, setNotice] = useState<NoticeDetail | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const theme = useTheme();

  useEffect(() => {
    if (!noticeId) return;

    const fetchNoticeDetail = async () => {
      try {
        const data = await getNoticeDetail(noticeId);
        setNotice(data);
      } catch (error) {
        toast.error('공지사항을 불러오는 데 실패했습니다.');
      } finally {
        setLoading(false);
      }
    };
    fetchNoticeDetail();
  }, [noticeId]);

  const handleDelete = async () => {
    if (!noticeId) return;
    if (window.confirm('정말로 이 공지사항을 삭제하시겠습니까?')) {
      try {
        await deleteNotice(noticeId);
        toast.success('공지사항이 성공적으로 삭제되었습니다.');
        navigate(-1);
      } catch (deleteError) {
        toast.error('공지사항 삭제 중 오류가 발생했습니다.');
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
          {notice ? (
            <>
              <Container
                padding="12px 0"
                cssOverride={css`
                  background-color: ${theme.colors.primary.passive};
                  border-top: 1px solid #000;
                  border-bottom: 1px solid ${theme.colors.border.prominent};`}
              >
                <Heading.H4>{notice.title}</Heading.H4>
              </Container>
              <Container padding="8px 20px" justify="space-between" cssOverride={{ borderBottom: `1px solid ${theme.colors.border.prominent}` }}>
                <Paragraph variant="small">
                  작성자:
                  {' '}
                  {notice.nickname}
                </Paragraph>
                <Paragraph variant="small">
                  작성일:
                  {' '}
                  {notice.created_at}
                </Paragraph>
              </Container>
              <Container
                justify="flex-start"
                align="flex-start"
                padding="8px 20px"
                cssOverride={{ borderBottom: `1px solid ${theme.colors.border.prominent}`, minHeight: '300px' }}
              >
                <Viewer initialValue={notice.content} />
              </Container>
            </>
          ) : (
            <Paragraph>해당 공지사항을 찾을 수 없습니다.</Paragraph>
          )}
          <Container justify="flex-end" padding="10px 8px" gap="8px">
            <Button
              onClick={() => navigate(routePaths.STUDY_NOTICE_EDIT(notice?.id as number))}
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
