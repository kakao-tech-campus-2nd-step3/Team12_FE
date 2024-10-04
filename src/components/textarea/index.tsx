import {
  forwardRef,
  HTMLAttributes,
  useRef,
} from 'react';
import { CSSObject } from '@emotion/react';
import useTextAreaStyle from '@components/textarea/useTextAreaStyle';
import Label from '@components/label';
import { generateRandomId } from '@/utils';

interface TextareaProps extends HTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  css?: CSSObject;
  rows?: number;
  cols?: number;
  maxLength?: number;
}

const TextArea = forwardRef<HTMLTextAreaElement, TextareaProps>(({
  onChange, label, css, rows = 4, cols = 50, maxLength, ...rest
}, ref) => {
  const textareaId = useRef(generateRandomId());
  const { textAreaStyle } = useTextAreaStyle();

  return (
    <>
      {
        label
          ? (
            <Label htmlFor={textareaId.current}>
              <p>{label}</p>
            </Label>
          )
          : null
      }
      <textarea
        id={textareaId.current}
        css={[textAreaStyle, css]}
        rows={rows}
        cols={cols}
        maxLength={maxLength}
        ref={ref}
        {...rest}
      />
    </>
  );
});

export default TextArea;
