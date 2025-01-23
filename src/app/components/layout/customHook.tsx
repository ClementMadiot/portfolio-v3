import { useEffect, useState } from "react";

export const useIsDesktop = (): boolean => {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth > 768);
    };

    handleResize(); // Check on mount
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, [isDesktop]);

  return isDesktop;
};
