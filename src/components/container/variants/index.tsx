import Container, { ContainerProps } from '@components/container';
import { css } from '@emotion/react';
import { rootWidth } from '@styles/length';

interface DefaultPaddedContainerProps extends ContainerProps {
}

// eslint-disable-next-line import/prefer-default-export
export function DefaultPaddedContainer(
  { children, cssOverride, ...rest }: DefaultPaddedContainerProps,
) {
  const paddedContainerStyle = css`
    box-sizing: border-box;
    flex-direction: column;
    align-items: center;
    padding: 0 20px;
    max-width: ${rootWidth};
  `;

  return (
    <Container cssOverride={css([paddedContainerStyle, cssOverride])} {...rest}>
      {children}
    </Container>
  );
}
