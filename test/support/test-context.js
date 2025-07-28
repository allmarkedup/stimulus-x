import { Application } from "@hotwired/stimulus";
import StimulusX from "../../dist/stimulus-x";
import { nextTick } from "./helpers";
import userEvent from "@testing-library/user-event";

export async function createTestContext() {
  const app = Application.start();
  await nextTick(() => StimulusX.init(app));

  function subject(ControllerClass) {
    app.register("subject", ControllerClass);
  }

  async function html(html) {
    document.body.innerHTML = html;
    return nextTick(() => getUtilities());
  }

  async function performTurboStreamAction(action, target, content = "") {
    let [actualAction, method] = action === "morph" ? ["replace", "morph"] : [action, null];

    const streamTag = document.createElement("turbo-stream");
    streamTag.setAttribute("action", actualAction);
    streamTag.setAttribute("target", target);
    if (method) streamTag.setAttribute("method", method);
    streamTag.innerHTML = `<template>${content}</template>`;

    document.body.appendChild(streamTag);

    return nextTick(() => getUtilities());
  }

  async function getUtilities() {
    return nextTick(() => ({
      get subjectElement() {
        return getSubjectElement();
      },

      get subjectController() {
        return getSubjectController();
      },

      clickOnTestElement,
      getTestElement,
    }));
  }

  function getSubjectElement() {
    return document.querySelector(`[data-controller~="subject"]`);
  }

  function getSubjectController(element) {
    return app.getControllerForElementAndIdentifier(getSubjectElement(), "subject");
  }

  function getTestElement(name) {
    return document.querySelector(`[data-test-element="${name}"]`);
  }

  async function clickOnTestElement(name) {
    console.log(getTestElement(name).getAttribute("data-test-element"));
    const user = userEvent.setup();
    return await user.click(getTestElement(name));
  }

  async function reset() {
    document.body.innerHTML = "";
    await nextTick(() => app.unload());
  }

  return { html, subject, reset, performTurboStreamAction };
}
