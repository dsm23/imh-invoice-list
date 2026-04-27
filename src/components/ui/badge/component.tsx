import type { FunctionComponent } from "react";
import { mergeProps } from "@base-ui/react/merge-props";
import { useRender } from "@base-ui/react/use-render";
import type { VariantProps } from "class-variance-authority";
import { cn } from "~/utils/class-names";
import badgeVariants from "./variants";

const Badge: FunctionComponent<
  useRender.ComponentProps<"span"> & VariantProps<typeof badgeVariants>
> = ({ className, variant = "default", render, ...props }) =>
  useRender({
    defaultTagName: "span",
    props: mergeProps<"span">(
      {
        className: cn(badgeVariants({ variant }), className),
      },
      props,
    ),
    render,
    state: {
      slot: "badge",
      variant,
    },
  });

export default Badge;
