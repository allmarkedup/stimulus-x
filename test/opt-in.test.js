import { Application, Controller } from "@hotwired/stimulus";
import StimulusX from "../src";
import { isReactive } from "../src/reactivity";

describe("controller opt-in", async () => {
  let app;

  beforeAll(async () => {
    app = Application.start();
    StimulusX.init(app, { optIn: true });

    app.register(
      "unreactive",
      class extends Controller {
        static values = {
          count: Number,
        };
      }
    );

    app.register(
      "reactive",
      class extends Controller {
        static reactive = true;
        static values = {
          count: Number,
        };
      }
    );

    document.body.innerHTML = `
      <div data-controller="unreactive">
        <span data-bind-text="unreactive#countValue"></span>
      </div>

      <div data-controller="reactive">
        <span data-bind-text="reactive#countValue"></span>
      </div>
    `;
  });

  afterAll(() => {
    document.body.innerHTML = "";
    app.unload();
  });

  describe("controllers that have _not_ opted in to reactivity", () => {
    test("are not reactive", () => {
      const el = document.querySelector(`[data-controller="unreactive"]`);
      const controller = app.getControllerForElementAndIdentifier(el, "unreactive");

      expect(controller).toBeInstanceOf(Controller);
      expect(isReactive(controller)).toBe(false);
    });
  });

  describe("controllers that have opted in to reactivity", () => {
    test("are reactive", () => {
      const el = document.querySelector(`[data-controller="reactive"]`);
      const controller = app.getControllerForElementAndIdentifier(el, "reactive");

      expect(controller).toBeInstanceOf(Controller);
      expect(isReactive(controller)).toBe(true);
    });
  });
});
