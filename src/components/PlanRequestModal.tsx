import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { GLOBALS } from "@/config/globals";
import { sendPlanChangeRequest } from "@/utils/httpService";

interface PlanRequestModalProps {
  isOpen: boolean;
  onClose: () => void;
  planName: string;
  currentPlan: string;
}

export const PlanRequestModal = ({ isOpen, onClose, planName, currentPlan }: PlanRequestModalProps) => {
  const [userMessage, setUserMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleConfirm = async () => {
    setIsLoading(true);
    
    try {
      await sendPlanChangeRequest({
        option: "envioDeMail",
        currentPlan,
        requestedPlan: planName,
        userMessage,
      });
      
      toast({
        title: "¡Solicitud enviada!",
        description: `Tu solicitud de cambio al plan ${planName} ha sido enviada exitosamente.`,
      });
      onClose();
    } catch (error) {
      toast({
        title: "Error al enviar solicitud",
        description: "Ocurrió un error al procesar tu solicitud. Por favor, intenta nuevamente.",
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
          
          <div className="space-y-3">
            <div>
              <label htmlFor="user-message" className="text-sm text-muted-foreground block mb-2">
                Mensaje adicional (opcional):
              </label>
              <Textarea
                id="user-message"
                placeholder="Escribí un mensaje adicional si querés..."
                value={userMessage}
                onChange={(e) => {
                  if (e.target.value.length <= 300) {
                    setUserMessage(e.target.value);
                  }
                }}
                maxLength={300}
                className="min-h-[80px] resize-none"
              />
              <div className="text-xs text-muted-foreground mt-1 text-right">
                {userMessage.length}/300 caracteres
              </div>
            </div>
          </div>
          
          <div className="flex gap-3 pt-4">
            <Button
              type="button"
              variant="outline"
              onClick={onClose}
              className="flex-1 border-border hover:bg-secondary"
            >
              Cancelar
            </Button>
            <Button
              onClick={handleConfirm}
              disabled={isLoading}
              className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground disabled:opacity-50"
            >
              {isLoading ? "Enviando..." : "Confirmar Solicitud"}
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};