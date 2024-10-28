import Header from '@components/header';
import Footer from '@components/footer';
import { ReactNode } from 'react';
import Container from '@components/container';

interface PageProps {
  hideHeader?: boolean;
  hideFooter?: boolean;
  children?: ReactNode;
}
function Page({ hideHeader, hideFooter, children }: PageProps) {
  return (
    <>
      { !hideHeader && (
        <Header />
      )}
      <Container direction="column" justify="flex-start">
        {children}
      </Container>
      { !hideFooter && (
        <Footer />
      )}
    </>
  );
}

export default Page;
