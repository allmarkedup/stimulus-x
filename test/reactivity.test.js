import { Application, Controller } from "@hotwired/stimulus";
import StimulusX from "../src";
import { createTestContext } from "./support/test-context";

const context = await createTestContext();

describe("shallow reactivity (default)", async () => {
  beforeAll(() =>
    context.subject(
      class extends Controller {
        connect() {
          this.foo = "bar";
          this.nested = {
            foo: {
              bar: "baz",
            },
          };
        }
      }
    )
  );

  afterAll(async () => await context.teardown());

  test("changes to top level properties are tracked", async () => {
    const { getTestElement, subjectController } = await context.testDOM(`
      <div data-controller="subject">
        <div data-bind-text="subject#foo" data-test-element="target"></div>
      </div>
    `);

    expect(getTestElement("target").textContent).toBe("bar");

    subjectController.foo = "new value";

    expect(getTestElement("target").textContent).toBe("new value");
  });

  test("changes to nested properties are not tracked", async () => {
    const { getTestElement, subjectController } = await context.testDOM(`
      <div data-controller="subject">
        <div data-bind-text="subject#nested.foo.bar" data-test-element="target"></div>
      </div>
    `);

    expect(getTestElement("target").textContent).toBe("baz");

    subjectController.nested.foo.bar = "new value";
    expect(getTestElement("target").textContent).toBe("baz");
  });
});

describe("deep reactivity (opt in)", async () => {
  beforeAll(() =>
    context.subject(
      class extends Controller {
        static reactive = "deep";

        connect() {
          this.foo = "bar";
          this.nested = {
            foo: {
              bar: "baz",
            },
          };
        }
      }
    )
  );

  afterAll(async () => await context.teardown());

  test("changes to top level properties are tracked", async () => {
    const { getTestElement, subjectController } = await context.testDOM(`
      <div data-controller="subject">
        <div data-bind-text="subject#foo" data-test-element="target"></div>
      </div>
    `);

    expect(getTestElement("target").textContent).toBe("bar");

    subjectController.foo = "new value";
    expect(getTestElement("target").textContent).toBe("new value");
  });

  test("changes to nested properties are tracked", async () => {
    const { getTestElement, subjectController } = await context.testDOM(`
      <div data-controller="subject">
        <div data-bind-text="subject#nested.foo.bar" data-test-element="target"></div>
      </div>
    `);

    expect(getTestElement("target").textContent).toBe("baz");

    subjectController.nested.foo.bar = "new value";
    expect(getTestElement("target").textContent).toBe("new value");
  });
});

describe("deep reactivity (enabled globally)", async () => {
  let app;

  beforeAll(async () => {
    vi.useFakeTimers();
    app = Application.start();
    StimulusX.init(app, { trackDeep: true });

    document.body.innerHTML = `
      <div data-controller="subject">
        <div data-bind-text="subject#nested.foo.bar" data-test-element="target"></div>
      </div>
    `;

    app.register(
      "subject",
      class extends Controller {
        connect() {
          this.foo = "bar";
          this.nested = {
            foo: {
              bar: "baz",
            },
          };
        }
      }
    );
  });

  afterAll(() => {
    document.body.innerHTML = "";
    app.unload();
    vi.useRealTimers();
  });

  test("changes to nested properties are tracked", async () => {
    const subject = await vi.waitFor(() => document.querySelector(`[data-controller="subject"]`));

    const target = document.querySelector(`[data-test-element="target"]`);
    const controller = app.getControllerForElementAndIdentifier(subject, "subject");

    expect(target.textContent).toBe("baz");

    controller.nested.foo.bar = "new value";
    expect(target.textContent).toBe("new value");
  });
});
