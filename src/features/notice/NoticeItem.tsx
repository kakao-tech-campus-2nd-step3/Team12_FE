import { Paragraph } from '@components/text';
import { CSSObject } from '@emotion/react';
import Container from '@components/container';
import { Notice } from '@/types/notice';

interface NoticeItemProps {
  notice: Notice;
}

export default function NoticeItem({ notice }: NoticeItemProps) {
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
      <Paragraph css={{ ...paragraphStyle, flex: 0.5 }}>{notice.id}</Paragraph>
      <Paragraph css={{ ...paragraphStyle, flex: 5 }}>{notice.title}</Paragraph>
      <Paragraph css={{ ...paragraphStyle, flex: 1 }}>{notice.nickname}</Paragraph>
      <Paragraph css={{ ...paragraphStyle, flex: 1 }}>{notice.created_at}</Paragraph>
    </Container>
  );
}
