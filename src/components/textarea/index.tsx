import {
  forwardRef,
  HTMLAttributes,
  useRef,
} from 'react';
import { CSSObject } from '@emotion/react';
import useTextAreaStyle from '@components/textarea/useTextAreaStyle';
import Label from '@components/label';
import { generateRandomId } from '@/utils';

export interface TextareaProps extends HTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  css?: CSSObject;
  rows?: number;
  cols?: number;
  maxLength?: number;
  resize?: 'vertical' | 'horizontal' | 'none' | 'both';
}

const TextArea = forwardRef<HTMLTextAreaElement, TextareaProps>(({
  onChange, label, css, rows = 4, cols = 50, maxLength, resize = 'both', ...rest
}, ref) => {
  const textareaId = useRef(generateRandomId());
  const { textAreaStyle } = useTextAreaStyle({ resize });

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
        onChange={onChange}
        {...rest}
      />
    </>
  );
});

export default TextArea;
