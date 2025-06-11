import { onCLS, onFCP, onLCP, onTTFB, onINP } from 'web-vitals/attribution';

// Define a type for the metrics handler
type MetricHandler = (metric: { name: string; value: number; delta?: number; id?: string; }) => void;

// Function to report vitals to your analytics provider
// Update this to send to your analytics service
const reportToAnalytics = (metric: { name: string; value: number; delta?: number; id?: string; navigationType?: string }): void => {
  // Example: sending to console in development
  if (import.meta.env.DEV) {
    console.log(metric);
  }
  
  // In production, you would send to your analytics service
  // For example:
  // if (import.meta.env.PROD) {
  //   fetch('/api/vitals', {
  //     method: 'POST',
  //     body: JSON.stringify(metric),
  //     headers: { 'Content-Type': 'application/json' },
  //   });
  // }
};

export function reportWebVitals(onPerfEntry?: MetricHandler): void {
  if (onPerfEntry && typeof onPerfEntry === 'function') {
    // Initialize web vitals measurement
    // Use v5.0.2 compatible metrics - INP replaced FID in web-vitals v5
    onCLS(onPerfEntry);
    onINP(onPerfEntry);  // INP replaced FID in Web Vitals v5.0
    onFCP(onPerfEntry);
    onLCP(onPerfEntry);
    onTTFB(onPerfEntry);
  }
}

export default function initWebVitals(): void {
  // Initialize web vitals reporting with a slight delay
  // to avoid competing with initial rendering
  setTimeout(() => {
    reportWebVitals(reportToAnalytics);
  }, 100);
} 