import React from "react";

import cn from "@/lib/utils/cn";

function Label({
  children,
  className,
  ...props
}: React.LabelHTMLAttributes<HTMLLabelElement>) {
  return (
    <label
      className={cn("flex items-center gap-x-2 text-sm font-medium", className)}
      {...props}
    >
      {children}
    </label>
  );
}

export default Label;
