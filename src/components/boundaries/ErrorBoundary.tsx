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
  render() {
    const fallback = this.props.fallback || <Container>{this.state.errorMessage}</Container>;
    return this.state.hasError ? fallback : this.props.children;
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
}

export default ErrorBoundary;
