import { Paragraph } from '@components/text';
import { CSSObject, useTheme } from '@emotion/react';
import Container from '@components/container';
import routePaths from '@constants/routePaths.ts';
import { Link } from 'react-router-dom';
import { Assignment } from '@/types/assignment';

interface AssignItemProps {
  assign: Assignment;
}

export default function AssignListItem({ assign }: AssignItemProps) {
  const theme = useTheme();
  const paragraphStyle: CSSObject = {
    flex: 0.5,
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis',
    textAlign: 'center',
    padding: '10px 0',
  };

  return (
    <Link
      to={routePaths.STUDY_ASSIGNMENT_DETAIL(assign.id)}
      css={{
        textDecoration: 'none',
        color: theme.colors.text.prominent,
      }}
    >
      <Container justify="space-between" padding="4px" cssOverride={{ borderBottom: '1px solid #EDEDED' }}>
        <Paragraph css={{ ...paragraphStyle, flex: 0.5 }}>{assign.id}</Paragraph>
        <Paragraph css={{ ...paragraphStyle, flex: 4 }}>{assign.title}</Paragraph>
        <Paragraph css={{ ...paragraphStyle, flex: 1 }}>{assign.created_at}</Paragraph>
        <Paragraph css={{ ...paragraphStyle, flex: 1 }}>{assign.deadline}</Paragraph>
      </Container>
    </Link>
  );
}
