import React, { useEffect, useState } from 'react';

export default function useDeviceType() {
  const [deviceType, setDeviceType] = useState(null);

  useEffect(() => {
    if(typeof window !== 'undefined') {
      const getDeviceType = () => {
        var e = navigator.userAgent;
        return /(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(e) ? "Tablet" : /Mobile|iP(hone|od)|Android|BlackBerry|IEMobile|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(e) ? "Mobile" : "Desktop";
      }
  
      setDeviceType(getDeviceType());
    }
  }, []);

  return deviceType;
}