import { ErrorText } from '@components/text';
import { ErrorMessage } from '@hookform/error-message';
import { FieldErrors } from 'react-hook-form';
import { css } from '@emotion/react';

interface FormErrorMessageProps {
  errors: FieldErrors;
  name: string;
}

export function FormErrorMessage({ errors, name }: FormErrorMessageProps) {
  return (
    <ErrorMessage
      name={name}
      errors={errors}
      render={({ message }) => (
        <div css={messageContainerStyle}>
          <ErrorText variant="small">{message}</ErrorText>
        </div>
      )}
    />
  );
}

const messageContainerStyle = css`
  padding-top: 3px;
`;
