import { cn } from "@/lib/utils";

function Section({
  children,
  className,
  ...props
}: React.ComponentProps<"section">) {
  return (
    <section {...props} className={cn(`pt-[48px] pb-[96px] ${className}`)}>
      {children}
    </section>
  );
}

export { Section };
