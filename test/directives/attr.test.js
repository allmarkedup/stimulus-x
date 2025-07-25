import { Controller } from "@hotwired/stimulus";
import { createTestContext } from "../support/test-context";

let context;

beforeAll(async () => {
  context = await createTestContext();
});

afterAll(() => context.reset());

describe("string attributes", async () => {
  beforeAll(() =>
    context.subject(
      class extends Controller {
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
    )
  );

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

  test("multiple attribute bindings (single line)", async () => {
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

  test("multiple attribute bindings (multi-line)", async () => {
    const { getTestElement, subjectController } = await context.html(`
      <div data-controller="subject">
        <div
          data-bind-attr="
            data-string-1~subject#stringValue
            data-string-2~subject#anotherStringValue
          "
          data-test-element="target"
        ></div>
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
  beforeAll(() =>
    context.subject(
      class extends Controller {
        static values = {
          boolean: Boolean,
        };
      }
    )
  );

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

describe("classes", async () => {
  beforeAll(() =>
    context.subject(
      class extends Controller {
        static values = {
          theme: {
            type: String,
            default: "light",
          },
        };

        get themeStylesAsObject() {
          return {
            "text-gray-900 bg-white": this.themeValue == "light",
            "text-white bg-gray-900": this.themeValue == "dark",
          };
        }

        get themeStylesAsArray() {
          switch (this.themeValue) {
            case "light":
              return ["text-gray-900", "bg-white"];

            case "dark":
              return ["text-white", "bg-gray-900"];
          }
        }

        get themeStylesAsString() {
          switch (this.themeValue) {
            case "light":
              return "text-gray-900 bg-white";

            case "dark":
              return "text-white bg-gray-900";
          }
        }
      }
    )
  );

  test("can resolve class objects", async () => {
    const { getTestElement, subjectController } = await context.html(`
      <div data-controller="subject">
        <span data-bind-attr="class~subject#themeStylesAsObject" data-test-element="target"></span>
      </div>
    `);
    const target = getTestElement("target");

    expect(target).toHaveClass("text-gray-900 bg-white", { exact: true });

    subjectController.themeValue = "dark";
    expect(target).toHaveClass("text-white bg-gray-900", { exact: true });
  });

  test("can resolve class arrays", async () => {
    const { getTestElement, subjectController } = await context.html(`
      <div data-controller="subject">
        <span data-bind-attr="class~subject#themeStylesAsArray" data-test-element="target"></span>
      </div>
    `);
    const target = getTestElement("target");

    expect(target).toHaveClass("text-gray-900 bg-white", { exact: true });

    subjectController.themeValue = "dark";
    expect(target).toHaveClass("text-white bg-gray-900", { exact: true });
  });

  test("can resolve class strings", async () => {
    const { getTestElement, subjectController } = await context.html(`
      <div data-controller="subject">
        <span data-bind-attr="class~subject#themeStylesAsString" data-test-element="target"></span>
      </div>
    `);
    const target = getTestElement("target");

    expect(target).toHaveClass("text-gray-900 bg-white", { exact: true });

    subjectController.themeValue = "dark";
    expect(target).toHaveClass("text-white bg-gray-900", { exact: true });
  });

  test("doesn't overwrite existing classes", async () => {
    const { getTestElement, subjectController } = await context.html(`
      <div data-controller="subject">
        <span class="border-hotpink" data-bind-attr="class~subject#themeStylesAsString" data-test-element="target"></span>
      </div>
    `);
    const target = getTestElement("target");

    expect(target).toHaveClass("border-hotpink text-gray-900 bg-white", { exact: true });

    subjectController.themeValue = "dark";
    expect(target).toHaveClass("border-hotpink text-white bg-gray-900", { exact: true });

    subjectController.themeValue = "unknown";
    expect(target).toHaveClass("border-hotpink", { exact: true });
  });
});
