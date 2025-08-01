import { Controller } from "@hotwired/stimulus";
import { createTestContext } from "../support/test-context";

let context = await createTestContext();

afterAll(() => context.teardown());

describe("number comparison modifiers", async () => {
  beforeAll(() =>
    context.subject(
      class extends Controller {
        static values = {
          count: {
            type: Number,
            default: 50,
          },
        };
      }
    )
  );

  describe("`gt` modifier", () => {
    test("performs 'greater than' comparison", async () => {
      const { getTestElement } = await context.testDOM(`
        <div data-controller="subject">
          <button data-bind-attr="disabled~subject#countValue:gt(10)" data-test-element="target1">+</button>
          <button data-bind-attr="disabled~subject#countValue:gt(50)" data-test-element="target2">+</button>
          <button data-bind-attr="disabled~subject#countValue:gt(60)" data-test-element="target3">+</button>
        </div>
      `);

      expect(getTestElement("target1")).toHaveAttribute("disabled");
      expect(getTestElement("target2")).not.toHaveAttribute("disabled");
      expect(getTestElement("target3")).not.toHaveAttribute("disabled");
    });
  });

  describe("`gte` modifier", () => {
    test("performs 'greater than or equal to' comparison", async () => {
      const { getTestElement } = await context.testDOM(`
        <div data-controller="subject">
          <button data-bind-attr="disabled~subject#countValue:gte(10)" data-test-element="target1">+</button>
          <button data-bind-attr="disabled~subject#countValue:gte(50)" data-test-element="target2">+</button>
          <button data-bind-attr="disabled~subject#countValue:gte(60)" data-test-element="target3">+</button>
        </div>
      `);

      expect(getTestElement("target1")).toHaveAttribute("disabled");
      expect(getTestElement("target2")).toHaveAttribute("disabled");
      expect(getTestElement("target3")).not.toHaveAttribute("disabled");
    });
  });

  describe("`lt` modifier", () => {
    test("performs 'less than' comparison", async () => {
      const { getTestElement } = await context.testDOM(`
        <div data-controller="subject">
          <button data-bind-attr="disabled~subject#countValue:lt(10)" data-test-element="target1">+</button>
          <button data-bind-attr="disabled~subject#countValue:lt(50)" data-test-element="target2">+</button>
          <button data-bind-attr="disabled~subject#countValue:lt(60)" data-test-element="target3">+</button>
        </div>
      `);

      expect(getTestElement("target1")).not.toHaveAttribute("disabled");
      expect(getTestElement("target2")).not.toHaveAttribute("disabled");
      expect(getTestElement("target3")).toHaveAttribute("disabled");
    });
  });

  describe("`lte` modifier", () => {
    test("performs 'less than or equal to' comparison", async () => {
      const { getTestElement } = await context.testDOM(`
        <div data-controller="subject">
          <button data-bind-attr="disabled~subject#countValue:lte(10)" data-test-element="target1">+</button>
          <button data-bind-attr="disabled~subject#countValue:lte(50)" data-test-element="target2">+</button>
          <button data-bind-attr="disabled~subject#countValue:lte(60)" data-test-element="target3">+</button>
        </div>
      `);

      expect(getTestElement("target1")).not.toHaveAttribute("disabled");
      expect(getTestElement("target2")).toHaveAttribute("disabled");
      expect(getTestElement("target3")).toHaveAttribute("disabled");
    });
  });
});
