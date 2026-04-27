import { ThemeProvider } from "~/components/theme-provider";
import { ThemeSwitcher } from "~/components/theme-switcher";
import { Button } from "~/components/ui/button";
import { Card, CardContent } from "~/components/ui/card";
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

const App = () => (
  <ThemeProvider>
    <main>
      <section className="bg-white dark:bg-gray-900">
        <div className="mx-auto grid max-w-(--breakpoint-xl) px-4 py-8 text-center lg:py-16">
          <div className="mx-auto place-self-center">
            <h1 className="mb-4 max-w-4xl text-4xl leading-none font-extrabold tracking-tight md:text-5xl xl:text-6xl dark:text-white">
              Vite Enterprise Boilerplate
            </h1>
            <p className="mb-6 max-w-4xl font-light text-gray-500 md:text-lg lg:mb-8 lg:text-xl dark:text-gray-400">
              This webpage is to generate the IMH invnos list previously created
              manually in MS Word.
            </p>
            <Card className="w-full">
              <CardContent>
                <form>
                  <FieldGroup>
                    <FieldSet>
                      <FieldLegend>Create invnos list</FieldLegend>
                      <FieldDescription>
                        We need the starting values of each list
                      </FieldDescription>
                      <FieldSeparator />
                      <FieldGroup>
                        <div className="grid grid-cols-[2fr_1fr] gap-2">
                          <Field>
                            <FieldLabel htmlFor="staring-invoices">
                              Starting Invoice
                            </FieldLabel>
                            <Input
                              id="staring-invoices"
                              type="number"
                              placeholder="05700"
                              required
                            />
                          </Field>

                          <Field>
                            <FieldLabel htmlFor="number-invoices">
                              No. Invoices
                            </FieldLabel>
                            <Input
                              id="number-invoices"
                              type="number"
                              defaultValue={27}
                              required
                            />
                          </Field>
                        </div>
                      </FieldGroup>
                      <FieldGroup>
                        <div className="grid grid-cols-[2fr_1fr] gap-2">
                          <Field>
                            <FieldLabel htmlFor="starting-delivery-notes">
                              Starting Delivery Notes
                            </FieldLabel>
                            <Input
                              id="starting-delivery-notes"
                              type="number"
                              placeholder="06500"
                              required
                            />
                          </Field>
                          <Field>
                            <FieldLabel htmlFor="number-delivery-notes">
                              No. Delivery Notes
                            </FieldLabel>
                            <Input
                              id="number-delivery-notes"
                              type="number"
                              defaultValue={27}
                              required
                            />
                          </Field>
                        </div>
                      </FieldGroup>
                      <FieldGroup>
                        <div className="grid grid-cols-[2fr_1fr] gap-2">
                          <Field>
                            <FieldLabel htmlFor="starting-dranetz-returns">
                              Starting Dranetz Returns
                            </FieldLabel>
                            <Input
                              id="starting-dranetz-returns"
                              type="number"
                              placeholder="06500"
                              required
                            />
                          </Field>
                          <Field>
                            <FieldLabel htmlFor="number-dranetz-retrns">
                              No. Dranetz Returns
                            </FieldLabel>
                            <Input
                              id="number-dranetz-retrns"
                              type="number"
                              defaultValue={3}
                              required
                            />
                          </Field>
                        </div>
                      </FieldGroup>

                      <FieldGroup>
                        <div className="grid grid-cols-[2fr_1fr] gap-2">
                          <Field>
                            <FieldLabel htmlFor="starting-credit-notes">
                              Starting Credit Notes
                            </FieldLabel>
                            <Input
                              id="starting-credit-notes"
                              type="number"
                              placeholder="06500"
                              required
                            />
                          </Field>
                          <Field>
                            <FieldLabel htmlFor="number-credit-notes">
                              No. Credit Notes
                            </FieldLabel>
                            <Input
                              id="number-credit-notes"
                              type="number"
                              defaultValue={3}
                              required
                            />
                          </Field>
                        </div>
                      </FieldGroup>

                      <FieldGroup>
                        <div className="grid grid-cols-[2fr_1fr] gap-2">
                          <Field>
                            <FieldLabel htmlFor="starting-proforma">
                              Starting Proforma
                            </FieldLabel>
                            <Input
                              id="starting-proforma"
                              type="number"
                              placeholder="06500"
                              required
                            />
                          </Field>
                          <Field>
                            <FieldLabel htmlFor="number-proforma">
                              No. Proforma
                            </FieldLabel>
                            <Input
                              id="number-proforma"
                              type="number"
                              defaultValue={3}
                              required
                            />
                          </Field>
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
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </main>
    <footer className="mx-auto flex w-full items-center justify-center border-t py-16 text-center text-xs">
      <ThemeSwitcher />
    </footer>
  </ThemeProvider>
);

export default App;
