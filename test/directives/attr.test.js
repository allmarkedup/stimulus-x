import { Controller } from "@hotwired/stimulus";
import userEvent from "@testing-library/user-event";
import { createTestContext } from "../support/test-context";

let context;

beforeAll(async () => {
  context = await createTestContext();
});

afterAll(() => context.reset());

describe("string attributes", async () => {
  class StringAttributesController extends Controller {
    static values = {
      string: {
        type: String,
        default: "the string default value",
      },
      emptyString: {
        type: String,
        default: "",
      },
      anotherString: {
        type: String,
        default: "another string value",
      },
    };
  }

  beforeAll(() => context.subject(StringAttributesController));

  test("applies the default value from controller", async () => {
    const { getTestElement, subjectController } = await context.html(`
      <div data-controller="subject">
        <div data-bind-attr="data-output~subject#stringValue" data-test-element="target"></div>
      </div>
    `);

    expect(getTestElement("target")).toHaveAttribute("data-output", subjectController.stringValue);
  });

  test("applies the default value from a value attribute", async () => {
    const stringAttrValue = "overridden default value";

    const { getTestElement } = await context.html(`
      <div data-controller="subject" data-subject-string-value="${stringAttrValue}">
        <div data-bind-attr="data-output~subject#stringValue" data-test-element="target"></div>
      </div>
    `);

    expect(getTestElement("target")).toHaveAttribute("data-output", stringAttrValue);
  });

  test("overrides the existing attribute value", async () => {
    const { getTestElement, subjectController } = await context.html(`
      <div data-controller="subject">
        <div data-output="foo" data-bind-attr="data-output~subject#stringValue" data-test-element="target"></div>
      </div>
    `);

    expect(getTestElement("target")).toHaveAttribute("data-output", subjectController.stringValue);
  });

  test("doesn't remove attributes when the value is an empty string", async () => {
    const { getTestElement } = await context.html(`
      <div data-controller="subject">
        <div data-bind-attr="data-output~subject#emptyStringValue" data-test-element="target"></div>
      </div>
    `);

    expect(getTestElement("target")).toHaveAttribute("data-output", "");
  });

  test("updates the attribute when the value property changes", async () => {
    const { getTestElement, subjectController } = await context.html(`
      <div data-controller="subject">
        <div data-bind-attr="data-output~subject#stringValue" data-test-element="target"></div>
      </div>
    `);
    const element = getTestElement("target");

    expect(element).toHaveAttribute("data-output", subjectController.stringValue);

    subjectController.stringValue = "a new value";
    expect(element).toHaveAttribute("data-output", "a new value");

    subjectController.stringValue = "and another new value";
    expect(element).toHaveAttribute("data-output", "and another new value");
  });

  test("multiple attribute bindings", async () => {
    const { getTestElement, subjectController } = await context.html(`
      <div data-controller="subject">
        <div data-bind-attr="data-string-1~subject#stringValue data-string-2~subject#anotherStringValue" data-test-element="target"></div>
      </div>
    `);
    const element = getTestElement("target");

    expect(element).toHaveAttribute("data-string-1", subjectController.stringValue);
    expect(element).toHaveAttribute("data-string-2", subjectController.anotherStringValue);

    subjectController.stringValue = "foo";
    subjectController.anotherStringValue = "bar";

    expect(element).toHaveAttribute("data-string-1", "foo");
    expect(element).toHaveAttribute("data-string-2", "bar");
  });
});

describe("boolean attributes", async () => {
  class BooleanAttributesController extends Controller {
    static values = {
      boolean: Boolean,
    };
  }

  beforeAll(() => context.subject(BooleanAttributesController));

  test("adds or removes the attribute from the element", async () => {
    const { getTestElement, subjectController } = await context.html(`
      <details data-controller="subject">
        <summary open data-bind-attr="open~subject#booleanValue" data-test-element="summary">Summary</summary>
        <div>Details</div>
      </details>
    `);
    const summary = getTestElement("summary");

    expect(summary).not.toHaveAttribute("open");

    subjectController.booleanValue = true;
    expect(summary).toHaveAttribute("open");

    subjectController.booleanValue = false;
    expect(summary).not.toHaveAttribute("open");
  });
});
