import { cn } from "@/lib/utils";

function Section({
  children,
  className,
  ...props
}: React.ComponentProps<"section">) {
  return (
    <section {...props} className={cn(`pt-[80px] pb-[128px] ${className}`)}>
      {children}
    </section>
  );
}

export { Section };
