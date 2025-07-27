import { Controller } from "@hotwired/stimulus";
import { createTestContext } from "./support/test-context";

let context;

beforeAll(async () => {
  context = await createTestContext();
});

afterAll(() => context.reset());

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
        };
      }
    )
  );

  test("with !", async () => {
    const { getTestElement } = await context.html(`
      <div data-controller="subject">
        <div data-bind-attr="hidden~!subject#noValue" data-test-element="hidden"></div>
        <div data-bind-attr="hidden~!subject#yesValue" data-test-element="not-hidden"></div>
      </div>
    `);

    expect(getTestElement("hidden")).toHaveAttribute("hidden");
    expect(getTestElement("not-hidden")).not.toHaveAttribute("hidden");
  });

  test("with :not modifier", async () => {
    const { getTestElement } = await context.html(`
      <div data-controller="subject">
        <div data-bind-attr="hidden~subject#noValue:not" data-test-element="hidden"></div>
        <div data-bind-attr="hidden~subject#yesValue:not" data-test-element="not-hidden"></div>
      </div>
    `);

    expect(getTestElement("hidden")).toHaveAttribute("hidden");
    expect(getTestElement("not-hidden")).not.toHaveAttribute("hidden");
  });
});
