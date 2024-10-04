interface UseSwitchHandlerProps {
  inputId: string;
}

function useSwitchHandler({ inputId }: UseSwitchHandlerProps) {
  const handleClick = () => {
    if (!document || !inputId) return;

    const domInput = document.getElementById(inputId) as HTMLInputElement;
    const checked = !domInput.checked;
    domInput.checked = checked;

    if (checked) {
      domInput.classList.add('switch-checked');

      return;
    }

    domInput.classList.remove('switch-checked');
  };

  return { handleClick };
}

export default useSwitchHandler;
