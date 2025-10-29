import { Switch, Route, Router, useLocation } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Home from "@/pages/Home";
import PrivacyPolicy from "@/pages/PrivacyPolicy";
import TermsOfService from "@/pages/TermsOfService";
import Support from "@/pages/Support";
import NotFound from "@/pages/not-found";

// Get base path - Vite sets this at build time
const BASE = import.meta.env.BASE_URL || '/';

// Create a location hook that strips the base path
function useBasePathLocation() {
  const [location, setLocation] = useLocation();
  
  // Strip base path from location
  const base = BASE.replace(/\/$/, ''); // Remove trailing slash
  const normalizedPath = location.startsWith(base) 
    ? location.slice(base.length) || '/' 
    : location;
  
  // Wrap setLocation to add base path when navigating
  const wrappedSetLocation = (newPath: string, replace = false) => {
    if (newPath.startsWith('/')) {
      setLocation(base + newPath, replace);
    } else {
      setLocation(newPath, replace);
    }
  };
  
  return [normalizedPath, wrappedSetLocation] as const;
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
