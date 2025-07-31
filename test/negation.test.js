import { Controller } from "@hotwired/stimulus";
import { createTestContext } from "./support/test-context";

const context = await createTestContext();

afterAll(() => context.teardown());

describe("value negation", async () => {
  beforeAll(() =>
    context.subject(
      class extends Controller {
        static values = {
          yes: {
            type: Boolean,
            default: true,
          },
          no: {
            type: Boolean,
            default: false,
          },
          status: {
            type: String,
            default: "done",
          },
        };
      }
    )
  );

  describe("with !", () => {
    test("with no modifiers", async () => {
      const { getTestElement } = await context.testDOM(`
        <div data-controller="subject">
          <div data-bind-attr="hidden~!subject#noValue" data-test-element="hidden"></div>
          <div data-bind-attr="hidden~!subject#yesValue" data-test-element="not-hidden"></div>
        </div>
      `);

      expect(getTestElement("hidden")).toHaveAttribute("hidden");
      expect(getTestElement("not-hidden")).not.toHaveAttribute("hidden");
    });

    test("with modifier(s) present", async () => {
      const { getTestElement } = await context.testDOM(`
        <div data-controller="subject">
          <div data-bind-attr="hidden~!subject#statusValue:is('pending')" data-test-element="hidden1"></div>
          <div data-bind-attr="hidden~!subject#statusValue:upcase:is('pending')" data-test-element="hidden2"></div>
        </div>
      `);

      expect(getTestElement("hidden1")).toHaveAttribute("hidden");
      expect(getTestElement("hidden2")).toHaveAttribute("hidden");
    });
  });

  test("with :not modifier", async () => {
    const { getTestElement } = await context.testDOM(`
      <div data-controller="subject">
        <div data-bind-attr="hidden~subject#noValue:not" data-test-element="hidden"></div>
        <div data-bind-attr="hidden~subject#yesValue:not" data-test-element="not-hidden"></div>
      </div>
    `);

    expect(getTestElement("hidden")).toHaveAttribute("hidden");
    expect(getTestElement("not-hidden")).not.toHaveAttribute("hidden");
  });
});
