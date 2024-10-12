import Spacing from '@components/spacing';
import { ErrorText } from '@components/text';
import { ErrorMessage } from '@hookform/error-message';
import { FieldErrors } from 'react-hook-form';

interface FormErrorMessageProps {
  errors: FieldErrors;
  name: string;
}

// eslint-disable-next-line
export function FormErrorMessage({ errors, name }: FormErrorMessageProps) {
  return (
    <>
      <Spacing height={2} />
      <ErrorMessage
        name={name}
        errors={errors}
        render={({ message }) => <ErrorText.Small>{message}</ErrorText.Small>}
      />
    </>
  );
}
