import { useEffect, useState } from "react";

export const useMobile = (width: number = 630) => {
  const [isMobile, setIsMobile] = useState<boolean>(window.innerWidth <= width);

  const handlerSetIsMobile = () => {
    setIsMobile(window.innerWidth <= width);
  };

  useEffect(() => {
    window.addEventListener("resize", handlerSetIsMobile);

    return () => {
      window.removeEventListener("resize", handlerSetIsMobile);
    };
  });
  return { isMobile };
};
