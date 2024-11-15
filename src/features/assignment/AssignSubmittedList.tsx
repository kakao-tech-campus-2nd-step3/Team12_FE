import { DefaultPaddedContainer } from '@components/container/variants';
import { useState, useEffect } from 'react';
import { Heading, Paragraph } from '@components/text';
import Container from '@components/container';
import Grid from '@components/grid';
import AssignSubmittedListItem from '@features/assignment/AssignSubmittedListItem';
import Button from '@components/button';
import toast from 'react-hot-toast';
import { SubmittedAssign, SubmittedAssignList } from '@/types/assignment';
import { getSubmittedAssignList } from '@/api/assignment';
import { NoticesResponse } from '@/types/notice';

export default function AssignSubmittedList() {
  const [submittedAssigns, setSubmittedAssigns] = useState<SubmittedAssign[]>([]);
  const [paginationInfo, setPaginationInfo] = useState<Omit<NoticesResponse, 'notices'>>();
  const [currentPage, setCurrentPage] = useState(0);
  const pageSize = 5;
  const assignId = 1;

  useEffect(() => {
    const fetchSubmittedAssigns = async () => {
      try {
        // eslint-disable-next-line max-len
        const submittedAssignsInfo: SubmittedAssignList = await getSubmittedAssignList({
          page: currentPage,
          size: pageSize,
          assignId,
        });
        setSubmittedAssigns(submittedAssignsInfo.assignment_files);
        setPaginationInfo({
          has_next_page: submittedAssignsInfo.has_next_page,
          current_page: submittedAssignsInfo.current_page,
          max_page: submittedAssignsInfo.max_page,
          total_item_count: submittedAssignsInfo.total_item_count,
        });
      } catch (e) {
        toast.error('과제를 불러오는 데 실패했습니다.');
      }
    };

    fetchSubmittedAssigns();
  }, [currentPage, assignId]);

  const handleNextPage = () => {
    if (paginationInfo?.has_next_page) {
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
          <Heading.H2 css={{ margin: '20px 20px' }}>제출한 과제</Heading.H2>
        </Container>
        <Container justify="space-between" padding="0 40px 20px 40px">
          <Paragraph>제출한 과제입니다. 서로 과제를 보고 피드백해주세요.</Paragraph>
        </Container>
        <Container direction="column" padding="10px 20px">
          <Container justify="space-between" padding="4px" cssOverride={{ borderBottom: '2px solid #EDEDED' }}>
            <Paragraph css={{ flex: 1, textAlign: 'center' }}>No.</Paragraph>
            <Paragraph css={{ flex: 5, textAlign: 'center' }}>제목</Paragraph>
            <Paragraph css={{ flex: 1, textAlign: 'center' }}>제출자</Paragraph>
            <Paragraph css={{ flex: 1, textAlign: 'center' }}>다운로드</Paragraph>
          </Container>
          <Grid
            columns={{
              initial: 1,
              xs: 1,
              md: 1,
              lg: 1,
            }}
          >
            {submittedAssigns.map((submittedAssign) => (
              <AssignSubmittedListItem
                key={`submitted-item-${submittedAssign.file.id}`}
                submittedAssign={submittedAssign}
              />
            ))}
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
          <Paragraph>{`${currentPage + 1} / ${paginationInfo?.max_page}`}</Paragraph>
          <Button
            variant="default"
            onClick={handleNextPage}
            disabled={!paginationInfo?.has_next_page}
          >
            다음
          </Button>
        </Container>
      </Container>
    </DefaultPaddedContainer>
  );
}
