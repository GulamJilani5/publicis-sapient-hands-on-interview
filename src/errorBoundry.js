import React from "react";

class ErrorBoundry extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
    };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  //componentDidCatch(error, info) {
  componentDidCatch(error, errorInfo) {
    console.log("error", error);
    console.log("errorInfo", errorInfo);
  }
  render() {
    if (this.state.hasError) {
      //   return this.props.fallback;
      return (
        <div>
          <h1>Something went wrong</h1>
          <a href="/"> Go to home page</a>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundry;
