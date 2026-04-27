import type { FunctionComponent, ReactNode } from "react";
import { Controller, FormProvider, useForm } from "react-hook-form";
import type { SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "~/components/ui/button";
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSeparator,
  FieldSet,
} from "~/components/ui/field";
import { Input } from "~/components/ui/input";

type Props = {
  children: ReactNode;
};

const formSchema = z.object({
  startingInvoices: z
    .number()
    .min(5000, "We have already done at least 5000 invoices"),
  noInvoices: z
    .number()
    .min(20, "This is an A4 piece of paper")
    .max(27, "This is a single A4 piece of paper"),
  startingDeliveryNotes: z
    .number()
    .min(6000, "We have already done at least 6000 invoices"),
  noDeliveryNotes: z
    .number()
    .min(20, "This is an A4 piece of paper")
    .max(27, "This is a single A4 piece of paper"),
  startingDranetzReturns: z.string(),
  noDranetzReturns: z
    .number()
    .min(1, "This is an A4 piece of paper")
    .max(5, "This is a single A4 piece of paper"),
  startingCreditNotes: z.string(),
  noCreditNotes: z
    .number()
    .min(1, "This is an A4 piece of paper")
    .max(5, "This is a single A4 piece of paper"),
  startingProforma: z.string(),
  noProforma: z
    .number()
    .min(1, "This is an A4 piece of paper")
    .max(5, "This is a single A4 piece of paper"),
});

const onSubmit: SubmitHandler<z.infer<typeof formSchema>> = (data) => {
  // oxlint-disable-next-line no-console
  console.log(data);
};

// oxlint-disable-next-line max-lines-per-function
const FormInvnos: FunctionComponent<Props> = ({ children }) => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      noInvoices: 27,
      noDeliveryNotes: 27,
      noDranetzReturns: 4,
      noCreditNotes: 4,
      noProforma: 4,
    },
  });

  return (
    <FormProvider {...form}>
      <form onSubmit={() => void form.handleSubmit(onSubmit)}>
        <FieldGroup>
          <FieldSet>
            <FieldLegend>Create invnos list</FieldLegend>
            <FieldDescription>
              We need the starting values of each list
            </FieldDescription>
            <FieldSeparator />
            <FieldGroup>
              <div className="grid grid-cols-[2fr_1fr] gap-2">
                <Controller
                  name="startingInvoices"
                  control={form.control}
                  render={({ field, fieldState }) => (
                    <Field data-invalid={fieldState.invalid}>
                      <FieldLabel htmlFor="staring-invoices">
                        Starting Invoice
                      </FieldLabel>
                      <Input
                        {...field}
                        id="staring-invoices"
                        type="number"
                        placeholder="05700"
                        aria-invalid={fieldState.invalid}
                        required
                      />
                    </Field>
                  )}
                />

                <Controller
                  name="noInvoices"
                  control={form.control}
                  render={({ field, fieldState }) => (
                    <Field data-invalid={fieldState.invalid}>
                      <FieldLabel htmlFor="number-invoices">
                        No. Invoices
                      </FieldLabel>
                      <Input
                        {...field}
                        id="number-invoices"
                        type="number"
                        aria-invalid={fieldState.invalid}
                        required
                      />
                    </Field>
                  )}
                />
              </div>
            </FieldGroup>
            <FieldGroup>
              <div className="grid grid-cols-[2fr_1fr] gap-2">
                <Controller
                  name="startingDeliveryNotes"
                  control={form.control}
                  render={({ field, fieldState }) => (
                    <Field data-invalid={fieldState.invalid}>
                      <FieldLabel htmlFor="starting-delivery-notes">
                        Starting Delivery Notes
                      </FieldLabel>
                      <Input
                        {...field}
                        id="starting-delivery-notes"
                        type="number"
                        placeholder="06500"
                        aria-invalid={fieldState.invalid}
                        required
                      />
                    </Field>
                  )}
                />

                <Controller
                  name="noDeliveryNotes"
                  control={form.control}
                  render={({ field, fieldState }) => (
                    <Field data-invalid={fieldState.invalid}>
                      <FieldLabel htmlFor="number-delivery-notes">
                        No. Delivery Notes
                      </FieldLabel>
                      <Input
                        {...field}
                        id="number-delivery-notes"
                        type="number"
                        aria-invalid={fieldState.invalid}
                        required
                      />
                    </Field>
                  )}
                />
              </div>
            </FieldGroup>
            <FieldGroup>
              <div className="grid grid-cols-[2fr_1fr] gap-2">
                <Controller
                  name="startingDranetzReturns"
                  control={form.control}
                  render={({ field, fieldState }) => (
                    <Field data-invalid={fieldState.invalid}>
                      <FieldLabel htmlFor="starting-dranetz-returns">
                        Starting Dranetz Returns
                      </FieldLabel>
                      <Input
                        {...field}
                        id="starting-dranetz-returns"
                        placeholder="R0310"
                        aria-invalid={fieldState.invalid}
                        required
                      />
                    </Field>
                  )}
                />

                <Controller
                  name="noDranetzReturns"
                  control={form.control}
                  render={({ field, fieldState }) => (
                    <Field data-invalid={fieldState.invalid}>
                      <FieldLabel htmlFor="number-dranetz-retrns">
                        No. Dranetz Returns
                      </FieldLabel>
                      <Input
                        {...field}
                        id="number-dranetz-retrns"
                        type="number"
                        aria-invalid={fieldState.invalid}
                        required
                      />
                    </Field>
                  )}
                />
              </div>
            </FieldGroup>

            <FieldGroup>
              <div className="grid grid-cols-[2fr_1fr] gap-2">
                <Controller
                  name="startingCreditNotes"
                  control={form.control}
                  render={({ field, fieldState }) => (
                    <Field data-invalid={fieldState.invalid}>
                      <FieldLabel htmlFor="starting-credit-notes">
                        Starting Credit Notes
                      </FieldLabel>
                      <Input
                        {...field}
                        id="starting-credit-notes"
                        placeholder="C0100"
                        aria-invalid={fieldState.invalid}
                        required
                      />
                    </Field>
                  )}
                />
                <Controller
                  name="noCreditNotes"
                  control={form.control}
                  render={({ field, fieldState }) => (
                    <Field data-invalid={fieldState.invalid}>
                      <FieldLabel htmlFor="number-credit-notes">
                        No. Credit Notes
                      </FieldLabel>
                      <Input
                        {...field}
                        id="number-credit-notes"
                        type="number"
                        aria-invalid={fieldState.invalid}
                        required
                      />
                    </Field>
                  )}
                />
              </div>
            </FieldGroup>

            <FieldGroup>
              <div className="grid grid-cols-[2fr_1fr] gap-2">
                <Controller
                  name="startingProforma"
                  control={form.control}
                  render={({ field, fieldState }) => (
                    <Field data-invalid={fieldState.invalid}>
                      <FieldLabel htmlFor="starting-proforma">
                        Starting Proforma
                      </FieldLabel>
                      <Input
                        {...field}
                        id="starting-proforma"
                        placeholder="P00305"
                        aria-invalid={fieldState.invalid}
                        required
                      />
                    </Field>
                  )}
                />

                <Controller
                  name="noProforma"
                  control={form.control}
                  render={({ field, fieldState }) => (
                    <Field data-invalid={fieldState.invalid}>
                      <FieldLabel htmlFor="number-proforma">
                        No. Proforma
                      </FieldLabel>
                      <Input
                        {...field}
                        id="number-proforma"
                        type="number"
                        aria-invalid={fieldState.invalid}
                        required
                      />
                    </Field>
                  )}
                />
              </div>
            </FieldGroup>
          </FieldSet>
          <FieldSeparator />
          <FieldSet>
            <FieldLegend>Billing Address</FieldLegend>
            <FieldDescription>
              The billing address associated with your payment method
            </FieldDescription>
            <output>output (coming soon)</output>
          </FieldSet>
          <Field orientation="horizontal">
            <Button type="submit">Submit</Button>
            <Button variant="outline" type="button">
              Cancel
            </Button>
          </Field>
        </FieldGroup>
        {children}
      </form>
    </FormProvider>
  );
};

export default FormInvnos;
