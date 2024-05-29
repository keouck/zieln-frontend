"use client";
import { usePathname } from "next/navigation";
import { IStaticMethods } from "preline";
import { HSStaticMethods } from "preline/preline";
import { useEffect } from "react";

declare global {
  interface Window {
    HSStaticMethods: IStaticMethods;
  }
}

export default function PrelineScript() {
  const path = usePathname();

  useEffect(() => {
    const loadPreline = async () => {
      await import('preline/preline');
      HSStaticMethods.autoInit();
      window.HSStaticMethods.autoInit();
    };

    loadPreline();
  }, [path]);

  return null;
}
