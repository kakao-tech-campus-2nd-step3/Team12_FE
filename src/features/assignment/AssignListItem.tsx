import { Paragraph } from '@components/text';
import { CSSObject } from '@emotion/react';
import Container from '@components/container';
import { Assignment } from '@/types/assignment';

interface AssignItemProps {
  assign: Assignment;
}

export default function AssignListItem({ assign }: AssignItemProps) {
  const paragraphStyle: CSSObject = {
    flex: 0.5,
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis',
    textAlign: 'center',
    padding: '10px 0',
  };

  return (
    <Container justify="space-between" padding="4px" cssOverride={{ borderBottom: '1px solid #EDEDED' }}>
      <Paragraph css={{ ...paragraphStyle, flex: 0.5 }}>{assign.id}</Paragraph>
      <Paragraph css={{ ...paragraphStyle, flex: 4 }}>{assign.title}</Paragraph>
      <Paragraph css={{ ...paragraphStyle, flex: 1 }}>{assign.created_at}</Paragraph>
      <Paragraph css={{ ...paragraphStyle, flex: 1 }}>{assign.deadline}</Paragraph>
    </Container>
  );
}
