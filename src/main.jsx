import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// Optimize root creation and rendering
const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error('Root element not found');
}

const root = createRoot(rootElement);

// Use requestIdleCallback for better performance if available
const renderApp = () => {
  root.render(
    <StrictMode>
      <App />
    </StrictMode>
  );
};

if ('requestIdleCallback' in window) {
  requestIdleCallback(renderApp);
} else {
  // Fallback for browsers that don't support requestIdleCallback
  setTimeout(renderApp, 0);
}
