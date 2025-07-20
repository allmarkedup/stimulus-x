import { Application } from "@hotwired/stimulus";
import StimulusX from "../../dist/main";

export class TestContext {
  #application = null;
  #controllerClass = null;

  constructor(...args) {
    if (args.length === 2) {
      [this.identifier, this.#controllerClass] = args;
    } else {
      this.identifier = "subject";
      this.#controllerClass = args[0];
    }
  }

  async setup(html) {
    this.teardown();
    const app = Application.start();

    StimulusX.extend(app);

    app.register(this.identifier, this.#controllerClass);

    this.#application = app;
    return this.setHTML(html);
  }

  teardown() {
    this.#application?.stop();
    document.body.innerHTML = "";
  }

  async setHTML(htmlString) {
    document.body.innerHTML = htmlString;
    return this;
  }

  get controller() {
    const element = document.body.firstElementChild;
    return this.#application.getControllerForElementAndIdentifier(element, this.identifier);
  }

  get subject() {
    return this.controller.element;
  }

  get elements() {
    const testElements = {};
    Array.from(document.querySelectorAll("[data-test-element]")).forEach((el) => {
      testElements[el.getAttribute("data-test-element")] = el;
    });
    return testElements;
  }
}
