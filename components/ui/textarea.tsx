import * as React from "react"

import { cn } from "@/lib/utils"

const Textarea = React.forwardRef<
  HTMLTextAreaElement,
  React.ComponentProps<"textarea">
>(({ className, ...props }, ref) => {
  return (
      <textarea
          className={cn(
              'border-0 border-b border-gray-400 bg-transparent focus:ring-0 focus:outline-none placeholder-shown:bg-transparent valid:bg-transparent autofill:bg-transparent autofill:border-transparent',
              className
          )}
          ref={ref}
          {...props}
      />
  );
})
Textarea.displayName = "Textarea"

export { Textarea }
