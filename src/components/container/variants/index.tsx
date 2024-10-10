import Container, { ContainerProps } from '@components/container';
import { css } from '@emotion/react';

interface DefaultPaddedContainerProps extends ContainerProps {
}

// eslint-disable-next-line import/prefer-default-export
export function DefaultPaddedContainer(
  { children, ...rest }: DefaultPaddedContainerProps,
) {
  const paddedContainerStyle = css`
    box-sizing: border-box;
    flex-direction: column;
    align-items: center;
    padding: 0 20px;
  `;

  return (
    <Container {...rest} cssOverride={paddedContainerStyle}>
      {children}
    </Container>
  );
}
