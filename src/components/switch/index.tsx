import {
  forwardRef, InputHTMLAttributes, useRef, useState,
} from 'react';
import { CSSObject } from '@emotion/react';
import useSwitchHandler from '@components/switch/useSwitchHandler';
import useSwitchStyle from '@components/switch/useSwitchStyle';
import { generateRandomId } from '@/utils';

interface SwitchProps extends InputHTMLAttributes<HTMLInputElement> {
  type?: 'checkbox';
  wrapperCss?: CSSObject;
  circleCss?: CSSObject;
  checked?: boolean;
  onCheckedChange: ({ checked }: { checked: boolean }) => void;
}

const Switch = forwardRef<HTMLInputElement, SwitchProps>(({
  type = 'checkbox', wrapperCss, circleCss, checked, onCheckedChange, ...rest
}, ref) => {
  const inputIdRef = useRef(generateRandomId());
  const [isChecked, setIsChecked] = useState(!!checked);
  const { handleClick } = useSwitchHandler(
    {
      inputId: inputIdRef.current, onCheckedChange, isChecked, setIsChecked,
    },
  );
  const { switchWrapperStyle, switchCircleStyle, switchInputStyle } = useSwitchStyle();

  // TODO: 하드코딩된 className 처리
  return (
    <div>
      <input type={type} ref={ref} css={switchInputStyle} id={inputIdRef.current} className={isChecked ? 'switch-checked' : ''} {...rest} />
      <div css={[switchWrapperStyle, wrapperCss]} onClick={handleClick} role="presentation">
        <div css={[switchCircleStyle, circleCss]} />
      </div>
    </div>
  );
});

export default Switch;
