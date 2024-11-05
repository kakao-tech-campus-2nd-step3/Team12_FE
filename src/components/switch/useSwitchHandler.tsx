import { Dispatch, SetStateAction } from 'react';

interface UseSwitchHandlerProps {
  inputId: string;
  onCheckedChange: ({ checked }: { checked:boolean }) => void;
  isChecked: boolean;
  setIsChecked: Dispatch<SetStateAction<boolean>>;
}

function useSwitchHandler({
  inputId, onCheckedChange, isChecked, setIsChecked,
}: UseSwitchHandlerProps) {
  const handleClick = () => {
    if (!document || !inputId) return;

    const domInput = document.getElementById(inputId) as HTMLInputElement;
    const nextCheckedStatus = !isChecked;
    domInput.checked = nextCheckedStatus;
    setIsChecked(nextCheckedStatus);
    onCheckedChange({ checked: nextCheckedStatus });

    if (nextCheckedStatus) {
      domInput.classList.add('switch-checked');

      return;
    }

    domInput.classList.remove('switch-checked');
  };

  return { handleClick };
}

export default useSwitchHandler;
