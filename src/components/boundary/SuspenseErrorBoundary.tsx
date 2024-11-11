import { ReactNode, Suspense } from 'react';
import ErrorBoundary from '@components/boundary/ErrorBoundary';
import Spinner from '@components/fallback/Spinner';

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
      <Suspense fallback={suspenseFallback || <Spinner />}>
        {children}
      </Suspense>
    </ErrorBoundary>
  );
}

export default SuspenseErrorBoundary;
