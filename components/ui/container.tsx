import React from "react";
import { cn } from "@/lib/utils";

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement>{
  children?: React.ReactNode,
};

const Container: React.FC<ContainerProps> = ({
  children,
  className,
}) => {
  return (
    <div className={cn(`mx-auto max-w-7xl`,className)}>
      {children}
    </div>
  );
};

export { Container };
