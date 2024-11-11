import { DefaultPaddedContainer } from '@components/container/variants';
import { useState, useEffect } from 'react';
import { Heading, Paragraph } from '@components/text';
import Container from '@components/container';
import Grid from '@components/grid';
import Button from '@components/button';
import NoticeItem from '@features/notice/NoticeItem';
import { NoticesResponse, Notice } from '@/types/notice';
import { getNoticeList } from '@/api/notice';

export default function NoticeList() {
  const [notices, setNotices] = useState<Notice[]>([]);
  const [paginationInfo, setPaginationInfo] = useState<Omit<NoticesResponse, 'notices'>>();
  const [currentPage, setCurrentPage] = useState(0);
  const pageSize = 5;

  useEffect(() => {
    const fetchNotices = async () => {
      try {
        const noticesInfo = await getNoticeList({ page: currentPage, size: pageSize });
        setNotices(noticesInfo.notices);
        setPaginationInfo({
          hasNextPage: noticesInfo.hasNextPage,
          currentPage: noticesInfo.currentPage,
          maxPage: noticesInfo.maxPage,
          totalItemCount: noticesInfo.totalItemCount,
        });
      } catch (e) {
        console.error('공지사항을 불러오는 데 실패했습니다:', e);
      }
    };

    fetchNotices();
  }, [currentPage]);

  const handleNextPage = () => {
    if (paginationInfo?.hasNextPage) {
      setCurrentPage((prev) => prev + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 0) {
      setCurrentPage((prev) => prev - 1);
    }
  };

  return (
    <DefaultPaddedContainer css={{ boxShadow: '0 2px 2px rgba(0, 0, 0, 0.1)' }}>
      <Container direction="column" padding="0 10px 50px 10px">
        <Container justify="flex-start" padding="15px">
          <Heading.H2 css={{ margin: '20px 20px' }}>공지사항</Heading.H2>
        </Container>
        <Container justify="space-between" padding="0 40px 20px 40px">
          <Paragraph>꼭 읽어주세요.</Paragraph>
          <Button variant="primary">글쓰기</Button>
        </Container>
        <Container direction="column" padding="10px 20px">
          <Container justify="space-between" padding="4px" cssOverride={{ borderBottom: '2px solid #EDEDED' }}>
            <Paragraph css={{ flex: 0.5, textAlign: 'center' }}>No.</Paragraph>
            <Paragraph css={{ flex: 5, textAlign: 'center' }}>제목</Paragraph>
            <Paragraph css={{ flex: 1, textAlign: 'center' }}>글쓴이</Paragraph>
            <Paragraph css={{ flex: 1, textAlign: 'center' }}>작성날짜</Paragraph>
          </Container>
          <Grid
            columns={{
              initial: 1,
              xs: 1,
              md: 1,
              lg: 1,
            }}
          >
            {
              notices.map((notice) => (
                <NoticeItem
                  key={`notice-item-${notice.id}`}
                  notice={notice}
                />
              ))
            }
          </Grid>
        </Container>

        <Container padding="20px" gap="12px">
          <Button
            variant="default"
            onClick={handlePreviousPage}
            disabled={currentPage === 0}
          >
            이전
          </Button>
          <Paragraph>{`${currentPage + 1} / ${paginationInfo?.maxPage}`}</Paragraph>
          <Button
            variant="default"
            onClick={handleNextPage}
            disabled={!paginationInfo?.hasNextPage}
          >
            다음
          </Button>
        </Container>
      </Container>
    </DefaultPaddedContainer>
  );
}
