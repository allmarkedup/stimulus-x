import { Controller } from "@hotwired/stimulus";
import { createTestContext } from "../support/test-context";

let context;

beforeAll(async () => {
  context = await createTestContext();
});

afterAll(() => context.teardown());

describe("shorthand syntax - text content", async () => {
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
        <div sx-text="subject#stringValue" data-test-element="target"></div>
      </div>
    `);

    expect(getTestElement("target").textContent).toBe(subjectController.stringValue);
  });

  test("applies the default value from a value attribute", async () => {
    const stringAttrValue = "overridden default value";

    const { getTestElement } = await context.testDOM(`
      <div data-controller="subject" data-subject-string-value="${stringAttrValue}">
        <div sx-text="subject#stringValue" data-test-element="target"></div>
      </div>
    `);

    expect(getTestElement("target").textContent).toBe(stringAttrValue);
  });

  test("replaces any existing content", async () => {
    const { getTestElement, subjectController } = await context.testDOM(`
      <div data-controller="subject">
        <div sx-text="subject#stringValue" data-test-element="target">this will be replaced</div>
      </div>
    `);

    expect(getTestElement("target").textContent).not.toBe("this will be replaced");
    expect(getTestElement("target").textContent).toBe(subjectController.stringValue);
  });

  test("updates the text content when the value property changes", async () => {
    const { getTestElement, subjectController } = await context.testDOM(`
      <div data-controller="subject">
        <div sx-text="subject#stringValue" data-test-element="target"></div>
      </div>
    `);
    const element = getTestElement("target");

    expect(getTestElement("target").textContent).toBe(subjectController.stringValue);

    subjectController.stringValue = "a new value";
    expect(getTestElement("target").textContent).toBe("a new value");

    subjectController.stringValue = "and another new value";
    expect(getTestElement("target").textContent).toBe("and another new value");
  });
});
