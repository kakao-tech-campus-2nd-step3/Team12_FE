import { useEffect, useCallback } from 'react';

interface UseDebounceProps {
  func: Function;
  delay: number;
  deps?: any[];
}

function useDebounce({ func, delay, deps = [] }: UseDebounceProps) {
  const debouncedFunction = useCallback(func, [func, ...deps]);

  useEffect(() => {
    const timer = setTimeout(() => {
      debouncedFunction();
    }, delay);

    return () => clearTimeout(timer);
  }, [delay, debouncedFunction]);
}

export default useDebounce;
