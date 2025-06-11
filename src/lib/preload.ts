/**
 * Utility for preloading critical assets
 */

/**
 * Preload an image
 */
export const preloadImage = (src: string): Promise<HTMLImageElement> => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve(img);
    img.onerror = reject;
    img.src = src;
  });
};

/**
 * Preload a font
 */
export const preloadFont = (fontFamily: string, options: FontFaceDescriptors = {}): Promise<FontFace> => {
  const font = new FontFace(fontFamily, `local(${fontFamily})`, options);
  return font.load().then((loadedFont) => {
    document.fonts.add(loadedFont);
    return loadedFont;
  });
};

/**
 * Preload a script
 */
export const preloadScript = (src: string): Promise<Event> => {
  return new Promise((resolve, reject) => {
    const script = document.createElement('script');
    script.src = src;
    script.async = true;
    script.onload = resolve;
    script.onerror = reject;
    document.head.appendChild(script);
  });
};

/**
 * Preload a stylesheet
 */
export const preloadStylesheet = (href: string): Promise<Event> => {
  return new Promise((resolve, reject) => {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = href;
    link.onload = resolve;
    link.onerror = reject;
    document.head.appendChild(link);
  });
};

/**
 * Preload next page (useful for anticipated navigation)
 */
export const preloadRoute = (path: string): void => {
  const link = document.createElement('link');
  link.rel = 'prefetch';
  link.href = path;
  document.head.appendChild(link);
};

/**
 * DNS prefetch for third-party domains
 */
export const prefetchDomain = (domain: string): void => {
  const link = document.createElement('link');
  link.rel = 'dns-prefetch';
  link.href = domain;
  document.head.appendChild(link);
}; 