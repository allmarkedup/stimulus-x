import { Controller } from "@hotwired/stimulus";
import { createTestContext } from "../support/test-context";

let context = await createTestContext();

afterAll(() => context.teardown());

describe("`isNot` modifier", async () => {
  beforeAll(() =>
    context.subject(
      class extends Controller {
        static values = {
          string: {
            type: String,
            default: "string with spaces",
          },
          integer: {
            type: Number,
            default: 12345,
          },
          float: {
            type: Number,
            default: 12.345,
          },
          booleanTrue: {
            type: Boolean,
            default: true,
          },
          booleanFalse: {
            type: Boolean,
            default: false,
          },
        };
      }
    )
  );

  describe("string comparisons", () => {
    test("single quoted string", async () => {
      const { getTestElement } = await context.testDOM(`
        <div data-controller="subject">
          <div data-bind-attr="hidden~subject#stringValue:isNot('string with spaces')" data-test-element="target1"></div>
          <div data-bind-attr="hidden~subject#stringValue:isNot('foo')" data-test-element="target2"></div>
        </div>
      `);

      expect(getTestElement("target1").hidden).toBe(false);
      expect(getTestElement("target2").hidden).toBe(true);
    });

    test("double quoted string", async () => {
      const { getTestElement } = await context.testDOM(`
        <div data-controller="subject">
          <div data-bind-attr='hidden~subject#stringValue:isNot("string with spaces")' data-test-element="target1"></div>
          <div data-bind-attr='hidden~subject#stringValue:isNot("foo")' data-test-element="target2"></div>
        </div>
      `);

      expect(getTestElement("target1").hidden).toBe(false);
      expect(getTestElement("target2").hidden).toBe(true);
    });
  });

  describe("number comparisons", () => {
    test("integer", async () => {
      const { getTestElement } = await context.testDOM(`
        <div data-controller="subject">
          <div data-bind-attr="hidden~subject#integerValue:isNot(12345)" data-test-element="target1"></div>
          <div data-bind-attr="hidden~subject#integerValue:isNot(54321)" data-test-element="target2"></div>
        </div>
      `);

      expect(getTestElement("target1").hidden).toBe(false);
      expect(getTestElement("target2").hidden).toBe(true);
    });

    test("float", async () => {
      const { getTestElement } = await context.testDOM(`
        <div data-controller="subject">
          <div data-bind-attr="hidden~subject#floatValue:isNot(12.345)" data-test-element="target1"></div>
          <div data-bind-attr="hidden~subject#floatValue:isNot(543.21)" data-test-element="target2"></div>
        </div>
      `);

      expect(getTestElement("target1").hidden).toBe(false);
      expect(getTestElement("target2").hidden).toBe(true);
    });
  });

  describe("boolean comparisons", () => {
    test("true", async () => {
      const { getTestElement } = await context.testDOM(`
        <div data-controller="subject">
          <div data-bind-attr="hidden~subject#booleanTrueValue:isNot(true)" data-test-element="target1"></div>
          <div data-bind-attr="hidden~subject#booleanFalseValue:isNot(true)" data-test-element="target2"></div>
          <div data-bind-attr="hidden~subject#booleanTrueValue:isNot( true )" data-test-element="target3"></div>
        </div>
      `);

      expect(getTestElement("target1").hidden).toBe(false);
      expect(getTestElement("target2").hidden).toBe(true);
      expect(getTestElement("target3").hidden).toBe(false);
    });

    test("false", async () => {
      const { getTestElement } = await context.testDOM(`
        <div data-controller="subject">
          <div data-bind-attr="hidden~subject#booleanTrueValue:isNot(false)" data-test-element="target1"></div>
          <div data-bind-attr="hidden~subject#booleanFalseValue:isNot(false)" data-test-element="target2"></div>
          <div data-bind-attr="hidden~subject#booleanFalseValue:isNot( false )" data-test-element="target3"></div>
        </div>
      `);

      expect(getTestElement("target1").hidden).toBe(true);
      expect(getTestElement("target2").hidden).toBe(false);
      expect(getTestElement("target3").hidden).toBe(false);
    });

    describe("multiple descriptors", () => {
      test("true", async () => {
        const { getTestElement } = await context.testDOM(`
          <div data-controller="subject">
            <input
              data-bind-attr="
                hidden~subject#stringValue:isNot('string with spaces')
                disabled~subject#integerValue:isNot(12345)
              "
              data-test-element="target">
          
          </div>
        `);

        expect(getTestElement("target").hidden).toBe(false);
        expect(getTestElement("target").disabled).toBe(false);
      });
    });
  });
});
