import { Controller } from "@hotwired/stimulus";
import { createTestContext } from "./support/test-context";
import "@hotwired/turbo";

let context = await createTestContext();

afterAll(() => context.teardown());

describe("turbo actions", async () => {
  beforeAll(() =>
    context.subject(
      class extends Controller {
        static values = {
          count: {
            type: Number,
            default: 0,
          },
        };

        increment() {
          this.countValue++;
        }
      }
    )
  );

  describe("turbo `replace` action", () => {
    test("is still interactive after replacement", async () => {
      const testDOM = `
        <div id="subject" data-controller="subject">
          <div data-bind-text="subject#countValue" data-test-element="count"></div>
          <button data-test-element="increment" data-action="subject#increment">+</button>
        </div>
      `;
      let { getTestElement, clickOnTestElement } = await context.testDOM(testDOM);

      await vi.waitFor(() => expect(getTestElement("count").textContent).toBe("0"));
      await clickOnTestElement("increment");
      expect(getTestElement("count").textContent).toBe("1");

      await context.performTurboStreamAction("replace", "subject", testDOM);

      expect(getTestElement("count").textContent).toBe("0");
      await clickOnTestElement("increment");
      expect(getTestElement("count").textContent).toBe("1");
    });

    test("reinitializes with HTML from the stream action", async () => {
      let { getTestElement } = await context.testDOM(`
        <div id="subject" data-controller="subject" data-subject-count-value="2">
          <div data-bind-text="subject#countValue" data-test-element="count"></div>
        </div>
      `);

      expect(getTestElement("count").textContent).toBe("2");

      await context.performTurboStreamAction(
        "replace",
        "subject",
        `
          <div id="subject" data-controller="subject" data-subject-count-value="5">
            <div data-bind-text="subject#countValue" data-test-element="count"></div>
          </div>
        `
      );

      expect(getTestElement("count").textContent).toBe("5");
    });
  });

  describe("turbo `morph` action", () => {
    test("is still interactive after replacement", async () => {
      const testDOM = `
        <div id="subject" data-controller="subject">
          <div data-bind-text="subject#countValue" data-test-element="count"></div>
          <button data-test-element="increment" data-action="subject#increment">+</button>
        </div>
      `;
      let { getTestElement, clickOnTestElement } = await context.testDOM(testDOM);

      expect(getTestElement("count").textContent).toBe("0");
      await clickOnTestElement("increment");
      expect(getTestElement("count").textContent).toBe("1");

      await context.performTurboStreamAction("morph", "subject", testDOM);

      expect(getTestElement("count").textContent).toBe("0");
      await clickOnTestElement("increment");
      expect(getTestElement("count").textContent).toBe("1");
    });

    test("reinitializes with HTML from the stream action", async () => {
      let { getTestElement } = await context.testDOM(`
        <div id="subject" data-controller="subject" data-subject-count-value="2">
          <div data-bind-text="subject#countValue" data-test-element="count"></div>
        </div>
      `);

      expect(getTestElement("count").textContent).toBe("2");

      await context.performTurboStreamAction(
        "morph",
        "subject",
        `
          <div id="subject" data-controller="subject" data-subject-count-value="5">
            <div data-bind-text="subject#countValue" data-test-element="count"></div>
          </div>
        `
      );

      await vi.waitFor(() => expect(getTestElement("count").textContent).toBe("5"));
    });
  });
});
