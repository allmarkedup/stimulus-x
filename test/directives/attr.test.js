import { TestContext } from "../support/test-context";
import { waitFor } from "@testing-library/dom";
import TestController from "../support/test-controller";

describe("attribute bindings", () => {
  const context = new TestContext(
    class extends TestController {
      static values = {
        src: {
          type: String,
          default: "/placeholder.png",
        },
        alt: {
          type: String,
          default: "image description",
        },
        visible: {
          type: Boolean,
          default: true,
        },
      };

      getOtherSrc() {
        return "/another-image.png";
      }

      get image() {
        return {
          src: this.srcValue,
        };
      }
    }
  );

  afterEach(() => context.teardown());

  it("value", async () => {
    const { controller, elements } = await context.setup(`
      <div data-controller="subject">
        <img data-bind-attr="src~subject#srcValue" data-test-element="image">
      </div>
    `);

    expect(elements.image.src).toBe(controller.srcValue);
  });
  //   const { controller, elements } = await context.setup(`
  //     <div data-controller="subject">
  //       <img data-bind-attr="src~subject#image.src" data-test-element="image">
  //     </div>
  //   `);

  //   expect(elements.image.src).toBe(controller.srcValue);
  // });

  // it("method", async () => {
  //   const { controller, elements } = await context.setup(`
  //     <div data-controller="subject">
  //       <img data-bind-attr="src~subject#getOtherSrc" data-test-element="image">
  //     </div>
  //   `);

  //   expect(elements.image.src).toBe(controller.getOtherSrc());
  // });

  // it("multiple bindings", async () => {
  //   const { controller, elements } = await context.setup(`
  //     <div data-controller="subject">
  //       <img data-bind-attr="src~subject#srcValue alt~subject#altValue" data-test-element="image">
  //     </div>
  //   `);

  //   expect(elements.image.src).toBe(controller.getOtherSrc());
  // });
});
