import { useEffect, useState } from 'react';

export const useShowLiveChat = () => {
  const [featureEnabled, setFeatureEnabled] = useState(false);

  return { showLiveChat: featureEnabled };
};
