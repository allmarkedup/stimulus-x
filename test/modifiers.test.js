import { Controller } from "@hotwired/stimulus";
import { createTestContext } from "./support/test-context";

let context = await createTestContext();

afterAll(() => context.teardown());

describe("applying modifiers", async () => {
  beforeAll(() =>
    context.subject(
      class extends Controller {
        static values = {
          lowerString: {
            type: String,
            default: "default string",
          },
          upperString: {
            type: String,
            default: "DEFAULT STRING",
          },
          mixedString: {
            type: String,
            default: "DEFAULT string",
          },
        };
      }
    )
  );

  test("single modifier", async () => {
    const { getTestElement } = await context.testDOM(`
      <div data-controller="subject">
        <div data-bind-text="subject#mixedStringValue:upcase" data-test-element="output"></div>
      </div>
    `);

    expect(getTestElement("output").textContent).toBe("DEFAULT STRING");
  });

  test("chained modifiers", async () => {
    const { getTestElement } = await context.testDOM(`
      <div data-controller="subject">
        <div data-bind-text="subject#mixedStringValue:upcase:downcase" data-test-element="output"></div>
      </div>
    `);

    expect(getTestElement("output").textContent).toBe("default string");
  });
});
