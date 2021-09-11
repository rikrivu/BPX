import { useState, useRef, useCallback, useEffect, SetStateAction, Dispatch } from "react";

export const useStickyHeader = (defaultSticky = false) => {
    const [isSticky, setIsSticky]: [boolean, Dispatch<SetStateAction<boolean>>] = useState<boolean>(defaultSticky);
    const tableRef = useRef<any>(null);
  
    const handleScrollCallback = useCallback(({ top, bottom }) => {
      if (top <= 0 && bottom > 2 * 125) {
        !isSticky && setIsSticky(true);
      } else {
        isSticky && setIsSticky(false);
      }
    }, [isSticky]);
  
    useEffect(() => {
      const handleScroll = () => {
        handleScrollCallback(tableRef.current.getBoundingClientRect());
      };
      window.addEventListener("scroll", handleScroll);
  
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }, [handleScrollCallback]);
  
    return { tableRef, isSticky };
};