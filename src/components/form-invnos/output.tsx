import type { FunctionComponent } from "react";
import { useFormContext } from "react-hook-form";

const Output: FunctionComponent = () => {
  const { watch } = useFormContext();

  const values = watch();

  return (
    <output>
      <pre>{JSON.stringify(values, null, 2)}</pre>
    </output>
  );
};

export default Output;
