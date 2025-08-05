interface PlanChangeRequest {
  userId: number;
  currentPlan: string;
  requestedPlan: string;
  userMessage: string;
}

export const sendPlanChangeRequest = async (data: PlanChangeRequest): Promise<void> => {
  const url = `${window.location.origin}${window.location.pathname}?option=envioDeMail`;
  
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    throw new Error(`Error ${response.status}: ${response.statusText}`);
  }
};