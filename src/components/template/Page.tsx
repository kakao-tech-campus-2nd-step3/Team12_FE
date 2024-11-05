import Header from '@components/header';
import Footer from '@components/footer';
import { ReactNode } from 'react';
import Container from '@components/container';
import { useTheme } from '@emotion/react';

interface PageProps {
  hideHeader?: boolean;
  hideFooter?: boolean;
  children?: ReactNode;
}
function Page({ hideHeader, hideFooter, children }: PageProps) {
  const theme = useTheme();
  return (
    <div css={{ backgroundColor: theme.colors.background.darken }}>
      { !hideHeader && (
        <Header />
      )}
      <Container direction="column" justify="flex-start">
        {children}
      </Container>
      { !hideFooter && (
        <Footer />
      )}
    </div>
  );
}

export default Page;
