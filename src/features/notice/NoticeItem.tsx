import { Paragraph } from '@components/text';
import { CSSObject, useTheme } from '@emotion/react';
import Container from '@components/container';
import { Link } from 'react-router-dom';
import routePaths from '@constants/routePaths';
import { Notice } from '@/types/notice';

interface NoticeItemProps {
  notice: Notice;
}

export default function NoticeItem({ notice }: NoticeItemProps) {
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
      to={routePaths.STUDY_NOTICE_DETAIL(notice.id)}
      css={{
        textDecoration: 'none',
        color: theme.colors.text.prominent,
      }}
    >
      <Container justify="space-between" padding="4px" cssOverride={{ borderBottom: '1px solid #EDEDED' }}>
        <Paragraph css={{ ...paragraphStyle, flex: 0.5 }}>{notice.id}</Paragraph>
        <Paragraph css={{ ...paragraphStyle, flex: 5 }}>{notice.title}</Paragraph>
        <Paragraph css={{ ...paragraphStyle, flex: 1 }}>{notice.nickname}</Paragraph>
        <Paragraph css={{ ...paragraphStyle, flex: 1 }}>{notice.created_at}</Paragraph>
      </Container>
    </Link>
  );
}
