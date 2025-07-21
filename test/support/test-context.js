import { Application } from "@hotwired/stimulus";
import { StimulusX } from "../../src";
import { nextTick } from "./helpers";

export async function createTestContext() {
  const app = Application.start();
  await nextTick(() => StimulusX.extend(app));

  function subject(ControllerClass) {
    app.register("subject", ControllerClass);
  }

  async function html(html) {
    document.body.innerHTML = html;

    return nextTick(() => ({
      get subjectElement() {
        return document.querySelector(`[data-controller~="subject"]`);
      },

      get subjectController() {
        return app.getControllerForElementAndIdentifier(this.subjectElement, "subject");
      },

      getTestElement(name) {
        return document.querySelector(`[data-test-element="${name}"]`);
      },
    }));
  }

  async function reset() {
    document.body.innerHTML = "";
    await nextTick(() => app.unload("subject"));
  }

  return { html, subject, reset };
}
