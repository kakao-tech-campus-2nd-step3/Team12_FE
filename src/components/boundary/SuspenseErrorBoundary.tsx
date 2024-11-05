import { ReactNode, Suspense } from 'react';
import ErrorBoundary from '@components/boundary/ErrorBoundary';

interface SuspenseErrorBoundaryProps {
  suspenseFallback?: ReactNode;
  errorFallback?: ReactNode;
  children?: ReactNode;
}

function SuspenseErrorBoundary({
  suspenseFallback,
  errorFallback,
  children,
}: SuspenseErrorBoundaryProps) {
  return (
    <ErrorBoundary fallback={errorFallback}>
      <Suspense fallback={suspenseFallback}>
        {children}
      </Suspense>
    </ErrorBoundary>
  );
}

export default SuspenseErrorBoundary;
