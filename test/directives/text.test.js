import { Controller } from "@hotwired/stimulus";
import { createTestContext } from "../support/test-context";

let context;

beforeAll(async () => {
  context = await createTestContext();
});

afterAll(() => context.teardown());

describe("text content", async () => {
  beforeAll(() =>
    context.subject(
      class extends Controller {
        static values = {
          string: {
            type: String,
            default: "the string default value",
          },
        };
      }
    )
  );

  test("applies the default value from controller", async () => {
    const { getTestElement, subjectController } = await context.testDOM(`
      <div data-controller="subject">
        <div data-bind-text="subject#stringValue" data-test-element="target"></div>
      </div>
    `);

    expect(getTestElement("target").textContent).toBe(subjectController.stringValue);
  });

  // test("applies the default value from a value attribute", async () => {
  //   const stringAttrValue = "overridden default value";

  //   const { getTestElement } = await context.testDOM(`
  //     <div data-controller="subject" data-subject-string-value="${stringAttrValue}">
  //       <div data-bind-attr="data-output~subject#stringValue" data-test-element="target"></div>
  //     </div>
  //   `);

  //   expect(getTestElement("target")).toHaveAttribute("data-output", stringAttrValue);
  // });

  // test("overrides the existing attribute value", async () => {
  //   const { getTestElement, subjectController } = await context.testDOM(`
  //     <div data-controller="subject">
  //       <div data-output="foo" data-bind-attr="data-output~subject#stringValue" data-test-element="target"></div>
  //     </div>
  //   `);

  //   expect(getTestElement("target")).toHaveAttribute("data-output", subjectController.stringValue);
  // });
});
