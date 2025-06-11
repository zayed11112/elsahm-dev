import { ComponentType, Suspense, lazy, LazyExoticComponent } from "react";

interface LazyLoadProps {
  importFunc: () => Promise<{ default: ComponentType<any> }>;
  fallback?: React.ReactNode;
  props?: Record<string, any>;
}

// Helper for dynamically importing components with improved loading
export function LazyLoad({ importFunc, fallback, props }: LazyLoadProps) {
  const LazyComponent = lazy(importFunc);

  return (
    <Suspense fallback={fallback || <div className="flex h-screen items-center justify-center">Loading...</div>}>
      <LazyComponent {...props} />
    </Suspense>
  );
}

// Export a factory function to create preloaded lazy components
export function createLazyComponent<T>(
  importFunc: () => Promise<{ default: ComponentType<T> }>
): {
  Component: LazyExoticComponent<ComponentType<T>>;
  preload: () => void;
} {
  const Component = lazy(importFunc);
  const preload = () => importFunc();

  return { Component, preload };
} 