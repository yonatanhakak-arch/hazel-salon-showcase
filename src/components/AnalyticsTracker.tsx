import { useEffect } from "react";

const GA_MEASUREMENT_ID = "G-RS03YX9XWP";

declare global {
  interface Window {
    __hazlerGaInitialized?: boolean;
  }
}

export function AnalyticsTracker() {
  useEffect(() => {
    if (typeof window === "undefined") return;

    let disposed = false;

    const sendPageView = async () => {
      const { default: ReactGA } = await import("react-ga4");
      if (disposed) return;

      if (!window.__hazlerGaInitialized) {
        ReactGA.initialize(GA_MEASUREMENT_ID);
        window.__hazlerGaInitialized = true;
      }

      ReactGA.send({
        hitType: "pageview",
        page: `${window.location.pathname}${window.location.search}`,
      });
    };

    const notifyLocationChange = () => {
      void sendPageView();
    };

    const patchHistoryMethod = (method: "pushState" | "replaceState") => {
      const original = window.history[method];

      window.history[method] = function patchedHistoryMethod(...args) {
        const result = original.apply(this, args);
        window.dispatchEvent(new Event("hazler-location-change"));
        return result;
      };

      return () => {
        window.history[method] = original;
      };
    };

    const restorePushState = patchHistoryMethod("pushState");
    const restoreReplaceState = patchHistoryMethod("replaceState");

    window.addEventListener("popstate", notifyLocationChange);
    window.addEventListener("hazler-location-change", notifyLocationChange);

    notifyLocationChange();

    return () => {
      disposed = true;
      restorePushState();
      restoreReplaceState();
      window.removeEventListener("popstate", notifyLocationChange);
      window.removeEventListener("hazler-location-change", notifyLocationChange);
    };
  }, []);

  return null;
}