import { GLOBALS } from "@/config/globals";

export interface PlanChangeEmailData {
  // User data from Java integration
  userId: string;
  userName: string;
  userEmail: string;
  customerEmail: string;
  companyName: string;
  companyCuit: string;
  userMessage?: string;
  
  // Plan data
  currentPlan: string;
  newPlan: string;
}

export const sendPlanChangeNotification = async (data: PlanChangeEmailData): Promise<boolean> => {
  try {
    const requestDate = new Date().toLocaleString('es-AR', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
      hour12: false
    });

    const emailContent = `
Hola,

Se ha registrado una nueva solicitud de cambio de plan de membresía en la plataforma.

Datos de la solicitud:

Usuario: ${data.userName}

Email: ${data.userEmail}

Empresa: ${data.companyCuit}-${data.companyName}

Plan actual: ${data.currentPlan}

Nuevo plan solicitado: ${data.newPlan}

Mensaje enviado: ${data.userMessage || 'Sin mensaje adicional'}

Fecha de solicitud: ${requestDate}

El equipo de Bipolos revisará la solicitud y, en caso de ser necesario, se comunicará con el cliente para validar la información.

Gracias por seguir confiando en nosotros.

Saludos,
Equipo de Bipolos

Este correo fue enviado automáticamente por la plataforma.
Si tenés alguna duda, podés responder directamente a este mensaje o comunicarte con nosotros a través de ${GLOBALS.CUSTOMER_SUPPORT_URL}.
    `.trim();

    // Email data structure for sending
    const emailData = {
      to: GLOBALS.NOTIFICATION_EMAIL,
      cc: data.customerEmail,
      subject: `Nueva solicitud de cambio de plan - ${data.userName}`,
      text: emailContent,
      html: emailContent.replace(/\n/g, '<br>')
    };

    // TODO: Integrate with actual email service (Supabase Edge Function, SendGrid, etc.)
    console.log('Email to be sent:', emailData);
    
    // For now, simulate successful email sending
    // In production, this would integrate with your email service
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    return true;
  } catch (error) {
    console.error('Error sending plan change notification:', error);
    return false;
  }
};