import { cn } from "@/lib/utils";

function LoadingSpinner({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      className={cn(
        `size-4 border-2 border-primary border-t-accent rounded-full animate-spin ${className}`,
      )}
      {...props}
    />
  );
}

export { LoadingSpinner };
