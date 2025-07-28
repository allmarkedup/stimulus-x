import { Controller } from "@hotwired/stimulus";
import { createTestContext } from "./support/test-context";
import { beforeAll } from "vitest";

let context = await createTestContext();

afterAll(() => context.teardown());

describe("applying modifiers", async () => {
  beforeAll(() =>
    context.subject(
      class extends Controller {
        static values = {
          lowerString: {
            type: String,
            default: "default string",
          },
          upperString: {
            type: String,
            default: "DEFAULT STRING",
          },
          mixedString: {
            type: String,
            default: "DEFAULT string",
          },
        };
      }
    )
  );

  test("single modifier", async () => {
    const { getTestElement } = await context.testDOM(`
      <div data-controller="subject">
        <div data-bind-text="subject#mixedStringValue:upcase" data-test-element="output"></div>
      </div>
    `);

    expect(getTestElement("output").textContent).toBe("DEFAULT STRING");
  });

  test("chained modifiers", async () => {
    const { getTestElement } = await context.testDOM(`
      <div data-controller="subject">
        <div data-bind-text="subject#mixedStringValue:upcase:downcase" data-test-element="output"></div>
      </div>
    `);

    expect(getTestElement("output").textContent).toBe("default string");
  });
});

describe("custom modifiers", async () => {
  beforeAll(() => {
    context.StimulusX.modifier("reverse", (value) => {
      if (typeof value === "string") {
        return value.split("").reverse().join("");
      } else if (Array.isArray(value)) {
        return value.reverse();
      } else {
        console.warn("only strings or arrays can be reversed");
        return value;
      }
    });

    context.subject(
      class extends Controller {
        static values = {
          title: {
            type: String,
            default: "Default Title",
          },
        };
      }
    );
  });

  test("custom modifier is available for use", async () => {
    const { getTestElement } = await context.testDOM(`
      <div data-controller="subject">
        <h1 data-bind-text="subject#titleValue:reverse" data-test-element="title"></h1>
      </div>
    `);

    expect(getTestElement("title").textContent).toBe("eltiT tluafeD");
  });
});
