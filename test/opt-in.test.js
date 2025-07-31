import { Application, Controller } from "@hotwired/stimulus";
import StimulusX from "../src";
import { isReactive } from "../src/reactivity";
import { nextTick } from "./support/helpers";

let app;

describe("controller opt-in", async () => {
  beforeAll(async () => {
    vi.useFakeTimers();
    app = Application.start();
    StimulusX.init(app, { optIn: true });

    document.body.innerHTML = `
        <div data-controller="unreactive">
          <span data-bind-text="unreactive#countValue"></span>
        </div>

        <div data-controller="reactive">
          <span data-bind-text="reactive#countValue"></span>
        </div>
      `;

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
  });

  afterAll(() => {
    document.body.innerHTML = "";
    app.unload();
    vi.useRealTimers();
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
      let el = document.querySelector(`[data-controller="reactive"]`);
      const controller = app.getControllerForElementAndIdentifier(el, "reactive");

      expect(controller).toBeInstanceOf(Controller);
      expect(isReactive(controller)).toBe(true);
    });
  });
});
