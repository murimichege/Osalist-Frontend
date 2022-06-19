import "./App.css";
import AppRoutes from "./routing/AppsRoutes";
import { ErrorBoundary } from "react-error-boundary";

//import Layout from './components/layout/Layout';

function App() {
  function ErrorHandler({ error }) {
    return (
      <div role="alert">
        <p>An error occurred:</p>
        <pre>{error.message}</pre>
      </div>
    );
  }
  return (
    <ErrorBoundary FallbackComponent={ErrorHandler}>
      <div className="App">
        <AppRoutes />
      </div>
    </ErrorBoundary>
  );
}

export default App;
