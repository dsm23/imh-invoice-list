import { describe, expect, it } from "vitest";
import { screen } from "@testing-library/react";
import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";
import { render } from "~/test-utils/render";
import {
  Field,
  FieldContent,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSeparator,
  FieldSet,
  FieldTitle,
} from ".";

describe("component", () => {
  describe("Field", () => {
    it("should render correctly", () => {
      render(
        <form>
          <FieldGroup>
            <FieldSet>
              <FieldLegend>Payment Method</FieldLegend>
              <FieldDescription>
                All transactions are secure and encrypted
              </FieldDescription>
              <FieldGroup>
                <Field>
                  <FieldContent>
                    <FieldTitle>Enable Touch ID</FieldTitle>
                    <FieldDescription>
                      Unlock your device faster.
                    </FieldDescription>
                  </FieldContent>
                  <FieldLabel htmlFor="checkout-7j9-card-name-43j">
                    Name on Card
                  </FieldLabel>
                  <Input
                    id="checkout-7j9-card-name-43j"
                    placeholder="Evil Rabbit"
                    required
                  />
                </Field>
                <Field>
                  <FieldLabel htmlFor="checkout-7j9-card-number-uw1">
                    Card Number
                  </FieldLabel>
                  <Input
                    id="checkout-7j9-card-number-uw1"
                    placeholder="1234 5678 9012 3456"
                    required
                  />
                  <FieldDescription>
                    Enter your 16-digit card number
                  </FieldDescription>
                </Field>
                <div className="grid grid-cols-3 gap-4">
                  <Field>
                    <FieldLabel htmlFor="checkout-exp-month-ts6">
                      Month
                    </FieldLabel>
                  </Field>
                  <Field>
                    <FieldLabel htmlFor="checkout-7j9-cvv">CVV</FieldLabel>
                    <Input id="checkout-7j9-cvv" placeholder="123" required />
                  </Field>
                </div>
              </FieldGroup>
            </FieldSet>
            <FieldSeparator />

            <Field orientation="horizontal">
              <Button type="submit">Submit</Button>
              <Button variant="outline" type="button">
                Cancel
              </Button>
            </Field>
          </FieldGroup>
        </form>,
      );

      expect(screen.getByText("Payment Method")).toBeInTheDocument();
    });
  });

  describe("FieldSeparator", () => {
    it("should render children when provided", () => {
      render(<FieldSeparator>Custom separator child content</FieldSeparator>);

      expect(
        screen.getByText("Custom separator child content"),
      ).toBeInTheDocument();
    });
  });

  describe("FieldError", () => {
    it("should render single error message", () => {
      render(<FieldError errors={[{ message: "This field is required" }]} />);

      expect(screen.getByText("This field is required")).toBeInTheDocument();
    });

    it("should render multiple error messages as a list", () => {
      render(
        <FieldError
          errors={[{ message: "First error" }, { message: "Second error" }]}
        />,
      );

      expect(screen.getByText("First error")).toBeInTheDocument();
      expect(screen.getByText("Second error")).toBeInTheDocument();
    });

    it("should render children when provided", () => {
      render(<FieldError>Custom error content</FieldError>);

      expect(screen.getByText("Custom error content")).toBeInTheDocument();
    });

    it("should not render when errors array is empty", () => {
      render(<FieldError errors={[]} />);

      expect(document.body.textContent).toBe("");
    });

    it("should not render when errors is undefined", () => {
      render(<FieldError errors={undefined} />);

      expect(document.body.textContent).toBe("");
    });

    it("should deduplicate errors with same message", () => {
      render(
        <FieldError
          errors={[
            { message: "Duplicate error" },
            { message: "Duplicate error" },
          ]}
        />,
      );

      const listItems = screen.getAllByText("Duplicate error");
      expect(listItems).toHaveLength(1);
    });
  });
});
