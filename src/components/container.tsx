import { cn } from "@/lib/utils";

function Container({
  children,
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      {...props}
      className={cn(`container mx-auto px-4 sm:px-0 ${className}`)}
    >
      {children}
    </div>
  );
}

export { Container };
