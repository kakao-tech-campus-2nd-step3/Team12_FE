import { DefaultPaddedContainer } from '@components/container/variants';
import { useState, useEffect } from 'react';
import { Heading, Paragraph } from '@components/text';
import Container from '@components/container';
import Grid from '@components/grid';
import Button from '@components/button';
import AssignListItem from '@features/assignment/AssignListItem';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import Spacing from '@components/spacing';
import routePaths from '@constants/routePaths.ts';
import { Assignment, AssignsResponse } from '@/types/assignment';
import { getAssignList } from '@/api/assignment';

interface AssignListProps {
  studyId: number;
}

export default function AssignList({ studyId }: AssignListProps) {
  const [assigns, setAssigns] = useState<Assignment[]>([]);
  const [paginationInfo, setPaginationInfo] = useState<Omit<AssignsResponse, 'assignments'>>();
  const [currentPage, setCurrentPage] = useState(0);
  const pageSize = 5;
  const navigate = useNavigate();

  useEffect(() => {
    const fetchAssigns = async () => {
      try {
        const assignsInfo = await getAssignList({ page: currentPage, size: pageSize, studyId });
        setAssigns(assignsInfo.assignments);
        setPaginationInfo({
          has_next_page: assignsInfo.has_next_page,
          current_page: assignsInfo.current_page,
          max_page: assignsInfo.max_page,
          total_item_count: assignsInfo.total_item_count,
        });
      } catch (e) {
        toast.error('과제를 불러오는 데 실패했습니다.');
      }
    };

    fetchAssigns();
  }, [currentPage, studyId]);

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
    <>
      <Spacing height={40} />
      <DefaultPaddedContainer css={{ boxShadow: '0 2px 2px rgba(0, 0, 0, 0.1)', backgroundColor: 'white' }}>
        <Container direction="column" padding="0 10px 50px 10px">
          <Container justify="space-between" padding="15px">
            <Heading.H2 css={{ margin: '20px 20px' }} weight="bold">과제</Heading.H2>
            <Button
              variant="primary"
              onClick={() => {
                navigate(routePaths.STUDY_ASSIGNMENT_WRITE(studyId));
              }}
            >
              과제 생성하기
            </Button>
          </Container>
          <Container justify="flex-end" padding="0 40px 20px 40px" />
          <Container direction="column" padding="10px 20px">
            <Container justify="space-between" padding="4px 4px 12px 4px" cssOverride={{ borderBottom: '1px solid #EDEDED' }}>
              <Paragraph css={{ flex: 0.5, textAlign: 'center' }}>No.</Paragraph>
              <Paragraph css={{ flex: 4, textAlign: 'center' }}>제목</Paragraph>
              <Paragraph css={{ flex: 1, textAlign: 'center' }}>등록일</Paragraph>
              <Paragraph css={{ flex: 1, textAlign: 'center' }}>마감기한</Paragraph>
            </Container>
            <Grid
              columns={{
                initial: 1,
                xs: 1,
                md: 1,
                lg: 1,
              }}
              css={{ minHeight: '300px', gridTemplateRows: 'repeat(10, 1fr)' }}
            >
              {
                assigns.map((assign) => (
                  <AssignListItem
                    key={`assign-item-${assign.id}`}
                    assign={assign}
                  />
                ))
              }
            </Grid>
          </Container>
          <Container css={{ position: 'relative' }}>
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
            <Button
              css={{ position: 'absolute', right: 0 }}
              onClick={() => navigate(routePaths.STUDY_INFO(studyId))}
            >
              스터디 정보로 돌아가기
            </Button>
          </Container>
        </Container>
      </DefaultPaddedContainer>
      <Spacing height={40} />
    </>
  );
}
