import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface PlanCardProps {
  title: string;
  subtitle: string;
  features: string[];
  badge?: string;
  badgeColor?: "popular" | "recommended";
  isCurrentPlan?: boolean;
  onSelect: () => void;
}

export const PlanCard = ({ 
  title, 
  subtitle, 
  features, 
  badge, 
  badgeColor = "popular",
  isCurrentPlan = false,
  onSelect 
}: PlanCardProps) => {
  return (
    <div className="relative">
      {badge && (
        <div className={cn(
          "absolute -top-3 -right-3 z-10 px-3 py-1 text-xs font-bold rounded-full rotate-12 transform",
          badgeColor === "popular" ? "bg-primary text-primary-foreground" : "bg-accent text-accent-foreground"
        )}>
          {badge}
        </div>
      )}
      
      <Card className={cn(
        "relative h-full p-6 border-2 transition-all duration-300 hover:scale-[1.02]",
        "bg-gradient-to-br from-card to-card/80 backdrop-blur-sm",
        isCurrentPlan ? "border-accent ring-2 ring-accent/50" : "border-border hover:border-accent/50"
      )}>
        <div className="space-y-6">
          {/* Header */}
          <div className="space-y-2">
            <h3 className="text-xl font-bold text-accent">PLAN: {title}</h3>
            <p className="text-sm text-foreground opacity-90">{subtitle}</p>
          </div>

          {/* Features */}
          <div className="space-y-3">
            <div className="bg-success/20 p-2 rounded">
              <p className="text-success font-semibold text-sm">
                {title === "Órbita" ? "Incluye todo lo anterior, y además:" : 
                 title === "Galaxia" ? "Incluye todo lo anterior, y además:" :
                 title === "Interestelar" ? "Incluye todo lo anterior, y además:" :
                 "Incluye:"}
              </p>
            </div>
            
            <ul className="space-y-3">
              {features.map((feature, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-5 h-5 bg-success rounded-full flex items-center justify-center mt-0.5">
                    <Check className="w-3 h-3 text-success-foreground" />
                  </div>
                  <span className="text-sm text-foreground/90 leading-relaxed">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Footer */}
          <div className="pt-4 space-y-3">
            {isCurrentPlan && (
              <div className="text-center p-2 bg-accent/20 rounded-lg">
                <span className="text-sm font-semibold text-accent">Plan Actual</span>
              </div>
            )}
            
            <Button 
              onClick={onSelect}
              className={cn(
                "w-full font-semibold transition-all duration-300",
                isCurrentPlan 
                  ? "bg-secondary text-secondary-foreground hover:bg-secondary/80" 
                  : "bg-primary text-primary-foreground hover:bg-primary/90"
              )}
              disabled={isCurrentPlan}
            >
              {isCurrentPlan ? "Plan Activo" : "Solicitar Plan"}
            </Button>
          </div>
        </div>
      </Card>
    </div>
  );
};