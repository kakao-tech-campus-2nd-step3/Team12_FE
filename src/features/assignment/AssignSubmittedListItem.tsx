import { Paragraph } from '@components/text';
import { CSSObject } from '@emotion/react';
import Container from '@components/container';
import Button from '@components/button';
import toast from 'react-hot-toast';
import { SubmittedAssign } from '@/types/assignment';
import { downloadAssign } from '@/api/assignment';

interface AssignItemProps {
  submittedAssign: SubmittedAssign;
}

export default function AssignSubmittedListItem({ submittedAssign }: AssignItemProps) {
  const paragraphStyle: CSSObject = {
    flex: 0.5,
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis',
    textAlign: 'center',
    padding: '10px 0',
  };

  const handleDownload = async (fileId: number) => {
    try {
      await downloadAssign(fileId);
      toast.success('파일을 성공적으로 다운록드하였습니다!');
    } catch (error) {
      toast.error('파일을 다운로드하는 데 실패했습니다.');
    }
  };

  return (
    <Container justify="space-between" padding="4px" cssOverride={{ borderBottom: '1px solid #EDEDED' }}>
      <Paragraph css={{ ...paragraphStyle, flex: 1 }}>{submittedAssign.file.id}</Paragraph>
      <Paragraph css={{ ...paragraphStyle, flex: 5 }}>{submittedAssign.file.file_name}</Paragraph>
      <Paragraph css={{ ...paragraphStyle, flex: 1 }}>{submittedAssign.nickname}</Paragraph>
      <Container cssOverride={{ flex: 1 }}>
        <Button variant="primary" onClick={() => handleDownload(submittedAssign.file.id)}>다운 받기</Button>
      </Container>
    </Container>
  );
}
