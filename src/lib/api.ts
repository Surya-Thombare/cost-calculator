// src/app/utils/api.ts

export const calculateProjectCost = async (selections: Record<number, string | string[]>) => {
  const prompt = {
    industry: selections[1],
    platform: selections[2],
    users: selections[3],
    thirdParty: Array.isArray(selections[4]) ? selections[4] : [selections[4]],
    uiDesign: selections[5],
    database: selections[6],
    security: selections[7],
    features: Array.isArray(selections[8]) ? selections[8] : [selections[8]],
  };

  const response = await fetch('/api/calculate-cost', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ prompt })
  });

  if (!response.ok) {
    throw new Error('Failed to calculate cost');
  }

  return response.json();
};