import styled from '@emotion/styled';
import Modal from '@/components/modal';
import Text, { Heading } from '@/components/text';
import Grid from '@/components/grid';
import AttendanceInfo from '@/features/modal/attendance/AttendanceInfo';
import Container from '@/components/container';
import Spacing from '@/components/spacing';
import Button from '@/components/button';
import theme from '@/styles/theme';

interface AcceptInvitationProps {
  open: boolean;
  onClose: () => void;
}

const HorizontalLine = styled.hr`
  width: 100%;
  border: 1px solid #C8C8C8;
`;

export default function AttendanceCheckModal({ open, onClose }: AcceptInvitationProps) {
  return (
    <Modal open={open} onClose={onClose} width="447px" height="623px">
      <Container padding="40px" direction="column" align="flex-start">
        <Spacing height={20} />
        <Heading.H1 weight="bold">출석조회</Heading.H1>
        <Spacing height={12} />
        <Text fontSize="15px">누가누가 잘하나 (a.k.a. 온사람)</Text>
        <Spacing height={23} />
        <Container gap="23px" justify="flex-start">
          <div style={{ width: '30px', height: '30px' }} />
          <Grid
            columns={3}
            style={{
              gridTemplateColumns: '0.4fr 1.8fr 1fr',
              alignItems: 'center',
              justifyItems: 'center',
            }}
          >
            <Text fontSize="15px">이름</Text>
            <Text fontSize="15px">출석 시간</Text>
            <Text fontSize="15px">출석 현황</Text>
          </Grid>
        </Container>
        <HorizontalLine />
        <Container css={{ overflowY: 'scroll', height: '300px' }} direction="column" justify="flex-start">
          <AttendanceInfo name="차조장" time="12:07:00" status={true} imageUrl="https://picsum.photos/200" />
          <AttendanceInfo name="삼세형" time="12:08:09" status={false} imageUrl="https://picsum.photos/201" />
          <AttendanceInfo name="일민경" time="12:09:00" status={true} imageUrl="https://picsum.photos/202" />
        </Container>
        <Button
          variant="primary"
          css={{
            width: '366px',
            borderRadius: theme.corners.medium,
            position: 'absolute',
            bottom: '40px',
          }}
          onClick={onClose} // 버튼 클릭 시 handleAccept 호출
        >
          수정완료
        </Button>
      </Container>
    </Modal>
  );
}