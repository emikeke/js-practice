import { Component } from "react";
import { Link, Redirect } from "react-router-dom";

class ErrorBoundary extends Component {
  // by default there is no error
  state = { hasError: false, redirect: false };
  static getDerivedStateFromError() {
    return { hasError: true };
  }
  componentDidCatch(error, info) {
    // log this to centry, or any error monitoring service
    console.error("errorBoundary caught in error", error, info);
    // for redirecting
    setTimeout(() => this.setState({ redirect: true }), 5000);
  }

  render() {
    if (this.state.redirect) {
      return <Redirect to="/" />;
    } else if (this.state.hasError) {
      return (
        <h2>
          This listing has an error.
          <Link to="/">Click here</Link> to go back to the home page or wait 5
          seconds.
        </h2>
      );
    }
    // whatever is inside ErrorBoundary gets passed to children
    return this.props.children;
  }
}

export default ErrorBoundary;
