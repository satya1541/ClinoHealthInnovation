import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";
import Careers from "@/pages/Careers";
import About from "@/pages/About";
import Teams from "@/pages/Teams";
import Products from "@/pages/Products";
import Store from "@/pages/Store";
import Privacy from "@/pages/Privacy";
import Terms from "@/pages/Terms";
import Cancellation from "@/pages/Cancellation";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/teams" component={Teams} />
      <Route path="/careers" component={Careers} />
      <Route path="/products" component={Products} />
      <Route path="/store" component={Store} />
      <Route path="/privacy" component={Privacy} />
      <Route path="/terms" component={Terms} />
      <Route path="/cancellation" component={Cancellation} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
