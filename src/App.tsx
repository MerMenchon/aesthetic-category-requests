import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Index from "./pages/Index";

const queryClient = new QueryClient();

const forcedProps = {
  priceLevel: "1",
  activePlan: "2",
  wslink: "https://wa.me/5492494521359",
};

interface AppProps {
  priceLevel?: string;
  activePlan?: string;
  wslink?: string;
}

const App = (props: AppProps = forcedProps) => {
  const { priceLevel, activePlan, wslink } = props;

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Index
          priceLevel={priceLevel}
          activePlan={activePlan}
          wslink={wslink}
        />
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
