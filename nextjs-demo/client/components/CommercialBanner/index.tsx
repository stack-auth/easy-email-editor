import { useShowCommercialEditor } from '@/client/hooks/useShowCommercialEditor';
import { useShowLiveChat } from '@/client/hooks/useShowLiveChat';
import { Alert } from '@arco-design/web-react';

import React, { useEffect } from 'react';
import { useSessionStorage } from 'react-use';

export const CommercialBanner = ({ page }: { page: 'HOME' | 'EDITOR' }) => {
  const [visible, setVisible] = useSessionStorage(
    'commercialEmailEditorBannerVisible',
    true,
  );

  const { featureEnabled } = useShowCommercialEditor();

  const { showLiveChat } = useShowLiveChat();

  if (!visible || !featureEnabled) return null;
  return (
    <Alert
      style={{
        alignItems: 'flex-start',
      }}
      banner
      content={
        <div>
          <div>
            <strong>
              Business Edition Email Editor on sale - Enjoy 50% off Premium and Enterprise
              plans. Don't miss out on this limited-time offer!&nbsp;
              <a
                target='_blank'
                href='https://demo.easyemail.pro/full?utm_source=easyemail'
                style={{ fontSize: 16 }}
              >
                Get Started Now!
              </a>
            </strong>
          </div>
        </div>
      }
    ></Alert>
  );
};
