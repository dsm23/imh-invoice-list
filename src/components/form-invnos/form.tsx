import { useState } from "react";
import type { FunctionComponent, ReactNode } from "react";
import { Controller, FormProvider, useForm } from "react-hook-form";
import type { SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { pdf } from "@react-pdf/renderer";
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
import OutputDocument from "../pdf-document";
import ThreeDots from "../three-dots";

type Props = {
  children: ReactNode;
};

const formSchema = z.object({
  startingInvoices: z
    .number()
    .min(5000, "We have already done at least 5000 invoices"),
  startingDeliveryNotes: z
    .number()
    .min(6000, "We have already done at least 6000 invoices"),
  startingDranetzReturns: z
    .number()
    .min(300, "We have already done at least 300 dranetz returns"),
  startingCreditNotes: z
    .number()
    .min(80, "We have already done at least 80 credit notes"),
  startingProforma: z
    .number()
    .min(300, "We have already done at least 300 proformas"),
  noInvoices: z
    .number()
    .min(15, "This is an A4 piece of paper")
    .max(30, "This is a single A4 piece of paper"),
  noReturns: z
    .number()
    .min(1, "This is an A4 piece of paper")
    .max(5, "This is a single A4 piece of paper"),
});

// oxlint-disable-next-line max-lines-per-function
const FormInvnos: FunctionComponent<Props> = ({ children }) => {
  const [downloadUrl, setDownloadUrl] = useState<string>();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      noInvoices: 30,
      noReturns: 4,
    },
  });

  const onSubmit: SubmitHandler<z.infer<typeof formSchema>> = async (data) => {
    const blob = await pdf(<OutputDocument {...data} />).toBlob();

    const url = URL.createObjectURL(blob);

    setDownloadUrl(url);
  };

  return (
    <FormProvider {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
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
                        onChange={(e) => field.onChange(e.target.valueAsNumber)}
                        placeholder="05700"
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
                        onChange={(e) => field.onChange(e.target.valueAsNumber)}
                        placeholder="06500"
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
                        Invoice table length
                      </FieldLabel>
                      <Input
                        {...field}
                        id="number-invoices"
                        type="number"
                        onChange={(e) => field.onChange(e.target.valueAsNumber)}
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
                        type="number"
                        placeholder="R0310"
                        onChange={(e) => field.onChange(e.target.valueAsNumber)}
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
                        type="number"
                        placeholder="C0100"
                        onChange={(e) => field.onChange(e.target.valueAsNumber)}
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
                        type="number"
                        placeholder="P00305"
                        onChange={(e) => field.onChange(e.target.valueAsNumber)}
                        aria-invalid={fieldState.invalid}
                        required
                      />
                    </Field>
                  )}
                />

                <Controller
                  name="noReturns"
                  control={form.control}
                  render={({ field, fieldState }) => (
                    <Field data-invalid={fieldState.invalid}>
                      <FieldLabel htmlFor="number-returns">
                        Returns table length
                      </FieldLabel>
                      <Input
                        {...field}
                        id="number-returns"
                        type="number"
                        onChange={(e) => field.onChange(e.target.valueAsNumber)}
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
          <Field orientation="horizontal">
            <Button type="submit">
              Submit
              {form.formState.isSubmitting && <ThreeDots />}
            </Button>
            <Button variant="outline" type="button">
              Cancel
            </Button>
          </Field>
        </FieldGroup>
        <FieldSeparator />
        {downloadUrl && (
          <a
            href={downloadUrl}
            download="invnos.pdf"
            className="font-medium text-blue-600 underline underline-offset-4 transition-colors duration-200 hover:text-blue-800"
          >
            Download invnos.pdf
          </a>
        )}
        {children}
      </form>
    </FormProvider>
  );
};

export default FormInvnos;
