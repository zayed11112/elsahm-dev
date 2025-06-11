import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import initWebVitals from './lib/webVitals';
import { detectScriptInjection } from './lib/scriptDetector';

// Initialize script detector in development mode
if (import.meta.env.DEV) {
  console.log("🔍 Development mode detected. Initializing script monitoring.");
  detectScriptInjection();
}

// Initialize the React app
createRoot(document.getElementById("root")!).render(<App />);

// Initialize web vitals monitoring
initWebVitals();
