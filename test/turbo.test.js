import { Controller } from "@hotwired/stimulus";
import { createTestContext } from "./support/test-context";
import "@hotwired/turbo";

let context;

beforeAll(async () => {
  context = await createTestContext();
});

afterAll(() => context.reset());

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

  describe("replacing controller elements", () => {
    test("is still interactive after replacement", async () => {
      const controllerHTML = `
        <div id="subject" data-controller="subject">
          <div data-bind-text="subject#countValue" data-test-element="count"></div>
          <button data-test-element="increment" data-action="subject#increment">+</button>
        </div>
      `;
      let { getTestElement, clickOnTestElement } = await context.html(controllerHTML);

      expect(getTestElement("count").textContent).toBe("0");
      await clickOnTestElement("increment");
      expect(getTestElement("count").textContent).toBe("1");

      await context.performTurboStreamAction("replace", "subject", controllerHTML);

      expect(getTestElement("count").textContent).toBe("0");
      await clickOnTestElement("increment");
      expect(getTestElement("count").textContent).toBe("1");
    });
  });
});
