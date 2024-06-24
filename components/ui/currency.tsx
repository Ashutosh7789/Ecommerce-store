'use client';

import { cn } from "@/lib/utils";
import React from "react";

export const formatter = new Intl.NumberFormat("en-us",{
  style: 'currency',
  currency: 'INR',
});

interface CurrencyProps{
  value?: string | number,
  className?: string,
  style? : React.CSSProperties,
};

const Currency: React.FC<CurrencyProps> = ({
  value,className,style
}) => {

  const [isMounted, setIsMounted] = React.useState(false);

  React.useEffect(() => {
    setIsMounted(true);
  },[]);

  if(!isMounted) return null;


  return ( 
    <div className={cn(`font-semibold`,className)}
      style={style}
    >
      {formatter.format(Number(value))}
    </div>
   );
}
 
export default Currency;