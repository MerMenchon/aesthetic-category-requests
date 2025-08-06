import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Index from "./pages/Index";

const queryClient = new QueryClient();

interface AppProps {
  priceLevel?: string;
  activePlan?: string;
  wslink?: string;
}

const App = ({ priceLevel, activePlan, wslink }: AppProps) => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Index priceLevel={priceLevel} activePlan={activePlan} wslink={wslink}/>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
