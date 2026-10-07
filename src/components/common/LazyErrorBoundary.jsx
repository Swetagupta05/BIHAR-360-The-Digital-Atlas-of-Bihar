import React, { Component } from 'react';
import { RefreshCw, AlertCircle } from 'lucide-react';

export class LazyErrorBoundary extends Component {
  state = {
    hasError: false,
    error: undefined
  };

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.warn('Lazy chunk load interruption:', error, errorInfo);
  }

  handleRetry = () => {
    if (this.props.onRetry) {
      this.props.onRetry();
    }
    this.setState({ hasError: false, error: undefined });
  };

  render() {
    if (this.state.hasError) {
      const title = this.props.fallbackTitle || 'Something interrupted this story.';
      const hindi = this.props.fallbackHindi || 'कथा में कोई व्यवधान आ गया।';
      const message =
        this.props.fallbackMessage ||
        'A network interruption prevented this section from loading. Check your connection and try again.';

      return (
        <div
          role="alert"
          aria-live="assertive"
          className="min-h-[45vh] w-full flex flex-col items-center justify-center p-8 my-8 text-center animate-in fade-in duration-300"
        >
          <div className="max-w-md w-full bg-white dark:bg-[#1A1D22] border border-[#EADBCE] dark:border-[#2E343B] rounded-3xl p-8 shadow-sm">
            <div className="w-12 h-12 rounded-full bg-[#C85A32]/10 dark:bg-[#C85A32]/20 text-[#C85A32] dark:text-[#E06C43] mx-auto flex items-center justify-center mb-4">
              <AlertCircle className="w-6 h-6" />
            </div>

            <h3 className="font-serif font-bold text-xl sm:text-2xl text-[#1E2124] dark:text-[#F5F1E8] mb-1">
              {title}
            </h3>

            <p className="font-hindi-text text-sm text-[#8C5B3E] dark:text-[#D4A373] mb-3">
              {hindi}
            </p>

            <p className="text-xs sm:text-sm text-[#2D3238]/80 dark:text-[#C8BFB4]/80 leading-relaxed mb-6">
              {message}
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <button
                type="button"
                onClick={this.handleRetry}
                className="w-full sm:w-auto px-5 py-2.5 rounded-full bg-[#C85A32] hover:bg-[#B34E2A] text-white text-xs font-semibold tracking-wide transition-colors flex items-center justify-center gap-2 shadow-sm"
              >
                <RefreshCw className="w-3.5 h-3.5" />
                <span>Retry Loading</span>
              </button>
              <button
                type="button"
                onClick={() => window.location.reload()}
                className="w-full sm:w-auto px-5 py-2.5 rounded-full bg-[#F5EFE6] dark:bg-[#252A30] hover:bg-[#EADBCE] dark:hover:bg-[#2E343B] text-[#2D3238] dark:text-[#E6DFD5] text-xs font-semibold tracking-wide transition-colors"
              >
                <span>Reload Page</span>
              </button>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
