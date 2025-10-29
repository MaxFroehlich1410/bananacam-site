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
import { useState, useEffect } from "react";

// Get base path - Vite sets this at build time
const BASE = import.meta.env.BASE_URL || '/';
const BASE_PATH = BASE.replace(/\/$/, ''); // Remove trailing slash

// Create a location hook that strips the base path
function useBasePathLocation() {
  const getPath = () => {
    const path = window.location.pathname;
    return path.startsWith(BASE_PATH) 
      ? path.slice(BASE_PATH.length) || '/' 
      : path;
  };

  const [path, setPath] = useState(getPath);

  useEffect(() => {
    const updatePath = () => setPath(getPath());
    
    // Listen to popstate for browser back/forward
    window.addEventListener('popstate', updatePath);
    
    // Listen to pushstate/replacestate
    const originalPushState = window.history.pushState;
    const originalReplaceState = window.history.replaceState;
    
    window.history.pushState = function(...args) {
      originalPushState.apply(window.history, args);
      updatePath();
    };
    
    window.history.replaceState = function(...args) {
      originalReplaceState.apply(window.history, args);
      updatePath();
    };

    return () => {
      window.removeEventListener('popstate', updatePath);
      window.history.pushState = originalPushState;
      window.history.replaceState = originalReplaceState;
    };
  }, []);

  const setLocation = (newPath: string, replace = false) => {
    const fullPath = newPath.startsWith('/') 
      ? BASE_PATH + newPath 
      : newPath;
    
    if (replace) {
      window.history.replaceState(null, '', fullPath);
    } else {
      window.history.pushState(null, '', fullPath);
    }
    
    const normalized = newPath.startsWith('/') ? newPath : getPath();
    setPath(normalized);
  };

  return [path, setLocation] as const;
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
