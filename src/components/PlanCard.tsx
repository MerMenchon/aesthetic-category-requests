import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
interface PlanCardProps {
  title: string;
  subtitle: string;
  price: string;
  discountedPrice?: string | null;
  priceLevel?: number;
  features: string[];
  notIncluded?: string[];
  setupCosts?: string[];
  details: {
    discount: string;
    subscription: string;
    bonus: string;
  };
  badge?: string;
  badgeColor?: "popular" | "recommended";
  isCurrentPlan?: boolean;
  onSelect: () => void;
}
export const PlanCard = ({
  title,
  subtitle,
  price,
  discountedPrice,
  priceLevel,
  features,
  notIncluded,
  setupCosts,
  details,
  badge,
  badgeColor = "popular",
  isCurrentPlan = false,
  onSelect
}: PlanCardProps) => {
  return <div className="relative">
      {badge && <div className={cn("absolute -top-3 -right-3 z-10 px-3 py-1 text-xs font-bold rounded-full rotate-12 transform", badgeColor === "popular" ? "bg-primary text-primary-foreground" : "bg-accent text-accent-foreground")}>
          {badge}
        </div>}
      
      <Card className={cn("relative h-full p-6 border-2 transition-all duration-300 hover:scale-[1.02]", "bg-gradient-to-br from-card to-card/80 backdrop-blur-sm", isCurrentPlan ? "border-accent ring-2 ring-accent/50" : "border-border hover:border-accent/50")}>
        <div className="space-y-4">
          {/* Header */}
          <div className="space-y-2">
            <h3 className="text-lg font-bold text-accent">{title}</h3>
            <p className="text-sm text-foreground opacity-90">"{subtitle}"</p>
          </div>

          {/* Price */}
          <div className="text-center py-3 bg-primary/10 rounded-lg border border-primary/20">
            <p className="text-sm text-muted-foreground">Suscripción mensual:</p>
            <p className="text-xl font-bold text-primary">{price}</p>
            {discountedPrice && (priceLevel === 2 || priceLevel === 3) && (
              <div className="mt-2 text-sm">
                <p className="text-muted-foreground">
                  Descuento primeros suscriptores -{priceLevel === 2 ? "50%" : "35%"}
                </p>
                <p className="text-lg font-bold text-green-600">{discountedPrice}</p>
              </div>
            )}
          </div>

          {/* Includes */}
          <div className="space-y-3">
            <div className="bg-success/20 p-2 rounded">
              <p className="text-success font-semibold text-sm">Incluye:</p>
            </div>
            
            <ul className="space-y-2">
              {features.map((feature, index) => <li key={index} className="text-sm text-foreground/90 leading-relaxed">
                  {feature}
                </li>)}
            </ul>
          </div>

          {/* Not Included */}
          {notIncluded && notIncluded.length > 0 && <div className="space-y-3">
              <div className="bg-destructive/20 p-2 rounded">
                <p className="text-destructive font-semibold text-sm">No incluye:</p>
              </div>
              
              <ul className="space-y-2">
                {notIncluded.map((item, index) => <li key={index} className="text-sm text-foreground/90 leading-relaxed">
                    {item}
                  </li>)}
              </ul>
            </div>}

          {/* Setup Costs */}
          {setupCosts && setupCosts.length > 0 && <div className="space-y-3">
              <div className="bg-accent/20 p-2 rounded">
                <p className="text-accent font-semibold text-sm">Setup único (se realiza el pago por única vez):</p>
              </div>
              
              <ul className="space-y-2">
                {setupCosts.map((cost, index) => <li key={index} className="text-sm text-foreground/90 leading-relaxed">
                    {cost}
                  </li>)}
              </ul>
            </div>}

          {/* Details */}
          <div className="space-y-2 p-3 bg-muted/50 rounded-lg border">
            <div className="text-xs text-muted-foreground space-y-1">
              <p><span className="font-medium">Descuento por pago anticipado (anual):</span> {details.discount}</p>
              <p><span className="font-medium">Suscripción mínima:</span> {details.subscription}</p>
              <p><span className="font-medium">Bonificación:</span> {details.bonus}</p>
            </div>
          </div>

          {/* Footer */}
          <div className="pt-2 space-y-3">
            {isCurrentPlan}
            
            <Button onClick={onSelect} className={cn("w-full font-semibold transition-all duration-300", isCurrentPlan ? "bg-secondary text-secondary-foreground hover:bg-secondary/80" : "bg-primary text-primary-foreground hover:bg-primary/90")} disabled={isCurrentPlan}>
              {isCurrentPlan ? "Plan Activo" : "Solicitar Plan"}
            </Button>
          </div>
        </div>
      </Card>
    </div>;
};