import { useEffect, useState } from 'react';
import Container from '@components/container';
import { Heading, Paragraph } from '@components/text';
import { DefaultPaddedContainer } from '@components/container/variants';
import Spinner from '@components/fallback/Spinner';
import { css } from '@emotion/react';
import Button from '@components/button';
import { Viewer } from '@toast-ui/react-editor';
import { NoticeDetail } from '@/types/notice';
import { deleteNotice, getNoticeDetail } from '@/api/notice';
import '@toast-ui/editor/dist/toastui-editor-viewer.css';

export default function NoticeDetailPage() {
  const noticeId = '21'; // 임의로 설정
  const [notice, setNotice] = useState<NoticeDetail | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    if (noticeId) {
      const fetchNoticeDetail = async () => {
        try {
          const data = await getNoticeDetail(noticeId);
          setNotice(data);
        } catch (error) {
          console.log('error: ', error);
          alert('공지사항을 불러오는 데 실패했습니다.');
        } finally {
          setLoading(false);
        }
      };
      fetchNoticeDetail();
    }
  }, [noticeId]);

  const handleDelete = async () => {
    if (!noticeId) return;
    if (window.confirm('정말로 이 공지사항을 삭제하시겠습니까?')) {
      try {
        await deleteNotice(noticeId);
        alert('공지사항이 성공적으로 삭제되었습니다.');
      } catch (deleteError) {
        console.error('삭제 중 오류 발생:', deleteError);
        alert('공지사항 삭제 중 오류가 발생했습니다.');
      }
    }
  };

  if (loading) {
    return <Spinner />;
  }

  return (
    <DefaultPaddedContainer css={{ boxShadow: '0 2px 2px rgba(0, 0, 0, 0.1)' }}>
      <Container direction="column" padding="20px">
        {notice ? (
          <>
            <Container
              padding="12px 0"
              cssOverride={css`
                  background-color: #e6e9ec;
                  border-top: 2px solid #000;
                  border-bottom: 1px solid #b4b8bc;`}
            >
              <Heading.H4>{notice.title}</Heading.H4>
            </Container>
            <Container padding="8px 20px" justify="space-between" cssOverride={{ borderBottom: '1px solid #b4b8bc' }}>
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
            <Container justify="flex-start" align="flex-start" padding="8px 20px" cssOverride={{ borderBottom: '1px solid #b4b8bc', minHeight: '300px' }}>
              <Viewer initialValue={notice.content} />
            </Container>
          </>
        ) : (
          <Paragraph>해당 공지사항을 찾을 수 없습니다.</Paragraph>
        )}
        <Container justify="flex-end" padding="10px 8px" gap="8px">
          <Button>수정</Button>
          <Button
            variant="default"
            css={deleteBtnStyle}
            onClick={handleDelete}
          >
            삭제
          </Button>
          <Button variant="primary">목록 보기</Button>
        </Container>
      </Container>
    </DefaultPaddedContainer>
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
