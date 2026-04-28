import type { ComponentProps, FunctionComponent } from "react";
import { cn } from "~/utils/class-names";

import styles from "./styles.module.css";

type Props = ComponentProps<"svg">;

const ThreeDots: FunctionComponent<Props> = ({ className, ...props }) => (
  <svg
    {...props}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    className={cn("size-6", className)}
  >
    <circle className={styles.dots} fill="currentColor" cx="4" cy="12" r="3" />
    <circle
      className={cn(styles.dots, styles.dotTwo)}
      fill="currentColor"
      cx="12"
      cy="12"
      r="3"
    />
    <circle
      className={cn(styles.dots, styles.dotThree)}
      fill="currentColor"
      cx="20"
      cy="12"
      r="3"
    />
  </svg>
);

export default ThreeDots;
