import React from "react";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null, errorInfo: null };
  }

  static getDerivedStateFromError(error) {
    // Met à jour l’état pour afficher le fallback UI
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    // Enregistre les détails de l’erreur
    this.setState({ error, errorInfo });
    console.error("Error caught by ErrorBoundary:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="card my-5 p-3 bg-light border-danger">
          <h3 className="text-danger">⚠️ An error has occurred in this component.</h3>
          <button className="btn btn-primary my-2" onClick={() => window.location.reload()}>
            Reload this page
          </button>
          <details style={{ whiteSpace: "pre-wrap" }}>
            {this.state.error && this.state.error.toString()}
            <br />
            {this.state.errorInfo?.componentStack}
          </details>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
