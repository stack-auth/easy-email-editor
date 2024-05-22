import { useEffect, useState } from 'react';

export const useShowCommercialEditor = () => {
  const [featureEnabled, setFeatureEnabled] = useState(false);

  return { featureEnabled: featureEnabled || process.env.NODE_ENV === 'development' };
};
