import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { sendPlanChangeNotification, type PlanChangeEmailData } from "@/utils/emailService";
import { GLOBALS } from "@/config/globals";

export interface UserData {
  userId: string;
  userName: string;
  userEmail: string;
  customerEmail: string;
  companyName: string;
  companyCuit: string;
  userMessage?: string;
}

interface PlanRequestModalProps {
  isOpen: boolean;
  onClose: () => void;
  planName: string;
  currentPlan: string;
  userData: UserData;
}

export const PlanRequestModal = ({ isOpen, onClose, planName, currentPlan, userData }: PlanRequestModalProps) => {
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleConfirm = async () => {
    setIsLoading(true);
    
    try {
      const emailData: PlanChangeEmailData = {
        ...userData,
        currentPlan,
        newPlan: planName,
      };

      const success = await sendPlanChangeNotification(emailData);
      
      if (success) {
        toast({
          title: "¡Solicitud enviada!",
          description: `Tu solicitud de cambio al plan ${planName} ha sido enviada. Recibirás un correo de confirmación en los próximos minutos.`,
        });
        onClose();
      } else {
        toast({
          title: "Error",
          description: "Hubo un problema al enviar la solicitud. Por favor, intenta nuevamente.",
          variant: "destructive",
        });
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Hubo un problema al enviar la solicitud. Por favor, intenta nuevamente.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md bg-card border-border">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold text-accent flex items-center gap-2">
            🚀 ¿Querés avanzar con el cambio de plan?
          </DialogTitle>
        </DialogHeader>
        
        <div className="space-y-4">
          <p className="text-foreground">
            Estás por solicitar el cambio al plan <strong>{planName}</strong>.
          </p>
          
          <p className="text-muted-foreground text-sm">
            En los próximos minutos vas a recibir un correo de confirmación del nuevo plan.
          </p>
          
          <p className="text-sm text-muted-foreground">
            Si tenés alguna duda o querés hablar con alguien de nuestro equipo, podés contactarte con{" "}
            <a 
              href={GLOBALS.CUSTOMER_SUPPORT_URL} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-primary hover:text-primary/80 underline"
            >
              Atención al Cliente
            </a>.
          </p>
          
          <div className="flex gap-3 pt-4">
            <Button
              type="button"
              variant="outline"
              onClick={onClose}
              className="flex-1 border-border hover:bg-secondary"
              disabled={isLoading}
            >
              Cancelar
            </Button>
            <Button
              onClick={handleConfirm}
              className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground"
              disabled={isLoading}
            >
              {isLoading ? "Enviando..." : "Confirmar Solicitud"}
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};