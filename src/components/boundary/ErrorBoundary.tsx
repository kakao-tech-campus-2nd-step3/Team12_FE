import { Component, ReactNode } from 'react';
import { isAxiosError } from 'axios';
import {
  defaultErrorMessage, defaultFetchErrorMessage,
  fetchErrorMessages,
} from '@constants/errorMessages';
import Container from '@components/container';

interface FetchErrorBoundaryProps {
  children?: ReactNode;
  fallback?: ReactNode;
}

interface FetchErrorBoundaryState {
  hasError: boolean;
  errorMessage?: string;
}

class ErrorBoundary extends Component<FetchErrorBoundaryProps, FetchErrorBoundaryState> {
  constructor(props: FetchErrorBoundaryProps) {
    super(props);
    this.state = {
      hasError: false,
      errorMessage: undefined,
    };
  }

  componentDidCatch(error: Error) {
    console.error(error);
  }

  static getDerivedStateFromError(error: Error) {
    if (!isAxiosError(error)) {
      return {
        hasError: true,
        errorMessage: defaultErrorMessage,
      };
    }
    const errorStatus = error.response?.status;
    const errorMessage = !errorStatus || !(errorStatus in fetchErrorMessages)
      ? defaultFetchErrorMessage
      : fetchErrorMessages[errorStatus];
    return {
      hasError: true,
      errorMessage,
    };
  }

  render() {
    const { props, state } = this;
    const fallback = props.fallback || <Container padding="20px 0">{state.errorMessage}</Container>;
    return state.hasError ? fallback : props.children;
  }
}

export default ErrorBoundary;
