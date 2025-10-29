import { Switch, Route, Router } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Home from "@/pages/Home";
import PrivacyPolicy from "@/pages/PrivacyPolicy";
import TermsOfService from "@/pages/TermsOfService";
import Support from "@/pages/Support";
import NotFound from "@/pages/not-found";
import { useEffect, useState } from "react";

// Detect base path from import.meta.env.BASE_URL or window location
const getBasePath = () => {
  // In production build, Vite sets import.meta.env.BASE_URL
  if (import.meta.env.BASE_URL && import.meta.env.BASE_URL !== '/') {
    return import.meta.env.BASE_URL.replace(/\/$/, ''); // Remove trailing slash
  }
  // Fallback: detect from current pathname
  const pathname = window.location.pathname;
  if (pathname.startsWith('/bananacam-site')) {
    return '/bananacam-site';
  }
  return '';
};

const basePath = getBasePath();

// Create a location hook that strips the base path
function useBasePathLocation() {
  const [pathname, setPathname] = useState(() => {
    const path = window.location.pathname;
    return path.startsWith(basePath) 
      ? path.slice(basePath.length) || '/' 
      : path;
  });

  useEffect(() => {
    const updateLocation = () => {
      const path = window.location.pathname;
      const normalized = path.startsWith(basePath) 
        ? path.slice(basePath.length) || '/' 
        : path;
      setPathname(normalized);
    };

    // Listen to popstate (back/forward)
    window.addEventListener('popstate', updateLocation);
    
    // Listen to custom location changes
    const handleLocationChange = () => updateLocation();
    window.addEventListener('locationchange', handleLocationChange);

    return () => {
      window.removeEventListener('popstate', updateLocation);
      window.removeEventListener('locationchange', handleLocationChange);
    };
  }, []);

  const setLocation = (newLocation: string, replace = false) => {
    const fullPath = newLocation.startsWith('/') 
      ? basePath + newLocation 
      : newLocation;
    
    if (replace) {
      window.history.replaceState(null, '', fullPath);
    } else {
      window.history.pushState(null, '', fullPath);
    }
    
    setPathname(newLocation.startsWith('/') ? newLocation : pathname);
    
    // Dispatch custom event for listener
    window.dispatchEvent(new Event('locationchange'));
  };

  return [pathname, setLocation] as const;
}

function AppRouter() {
  return (
    <Router hook={useBasePathLocation}>
      <Switch>
        <Route path="/" component={Home}/>
        <Route path="/privacy-policy" component={PrivacyPolicy} />
        <Route path="/terms-of-service" component={TermsOfService} />
        <Route path="/support" component={Support} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <AppRouter />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
