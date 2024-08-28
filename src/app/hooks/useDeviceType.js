"use client";
import { useEffect, useState } from "react";
import UAParser from "ua-parser-js";

export const useDeviceType = () => {
  const [deviceType, setDeviceType] = useState("desktop");

  useEffect(() => {
    const userAgent = navigator.userAgent;
    const parser = new UAParser();
    parser.setUA(userAgent);
    const result = parser.getResult();
    const type = (result.device && result.device.type) || "desktop";
    setDeviceType(type);
  }, []);

  return deviceType;
};
