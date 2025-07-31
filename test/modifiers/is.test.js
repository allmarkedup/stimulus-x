import { Controller } from "@hotwired/stimulus";
import { createTestContext } from "../support/test-context";

let context = await createTestContext();

afterAll(() => context.teardown());

describe("`is` modifier", async () => {
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
          <div data-bind-attr="hidden~subject#stringValue:is('string with spaces')" data-test-element="target1"></div>
          <div data-bind-attr="hidden~subject#stringValue:is('foo')" data-test-element="target2"></div>
        </div>
      `);

      expect(getTestElement("target1").hidden).toBe(true);
      expect(getTestElement("target2").hidden).toBe(false);
    });

    test("double quoted string", async () => {
      const { getTestElement } = await context.testDOM(`
        <div data-controller="subject">
          <div data-bind-attr='hidden~subject#stringValue:is("string with spaces")' data-test-element="target1"></div>
          <div data-bind-attr='hidden~subject#stringValue:is("foo")' data-test-element="target2"></div>
        </div>
      `);

      expect(getTestElement("target1").hidden).toBe(true);
      expect(getTestElement("target2").hidden).toBe(false);
    });
  });

  describe("number comparisons", () => {
    test("integer", async () => {
      const { getTestElement } = await context.testDOM(`
        <div data-controller="subject">
          <div data-bind-attr="hidden~subject#integerValue:is(12345)" data-test-element="target1"></div>
          <div data-bind-attr="hidden~subject#integerValue:is(54321)" data-test-element="target2"></div>
        </div>
      `);

      expect(getTestElement("target1").hidden).toBe(true);
      expect(getTestElement("target2").hidden).toBe(false);
    });

    test("float", async () => {
      const { getTestElement } = await context.testDOM(`
        <div data-controller="subject">
          <div data-bind-attr="hidden~subject#floatValue:is(12.345)" data-test-element="target1"></div>
          <div data-bind-attr="hidden~subject#floatValue:is(543.21)" data-test-element="target2"></div>
        </div>
      `);

      expect(getTestElement("target1").hidden).toBe(true);
      expect(getTestElement("target2").hidden).toBe(false);
    });
  });

  describe("boolean comparisons", () => {
    test("true", async () => {
      const { getTestElement } = await context.testDOM(`
        <div data-controller="subject">
          <div data-bind-attr="hidden~subject#booleanTrueValue:is(true)" data-test-element="target1"></div>
          <div data-bind-attr="hidden~subject#booleanFalseValue:is(true)" data-test-element="target2"></div>
          <div data-bind-attr="hidden~subject#booleanTrueValue:is( true )" data-test-element="target3"></div>
        </div>
      `);

      expect(getTestElement("target1").hidden).toBe(true);
      expect(getTestElement("target2").hidden).toBe(false);
      expect(getTestElement("target3").hidden).toBe(true);
    });

    test("false", async () => {
      const { getTestElement } = await context.testDOM(`
        <div data-controller="subject">
          <div data-bind-attr="hidden~subject#booleanTrueValue:is(false)" data-test-element="target1"></div>
          <div data-bind-attr="hidden~subject#booleanFalseValue:is(false)" data-test-element="target2"></div>
          <div data-bind-attr="hidden~subject#booleanFalseValue:is( false )" data-test-element="target3"></div>
        </div>
      `);

      expect(getTestElement("target1").hidden).toBe(false);
      expect(getTestElement("target2").hidden).toBe(true);
      expect(getTestElement("target3").hidden).toBe(true);
    });

    describe("multiple descriptors", () => {
      test("true", async () => {
        const { getTestElement } = await context.testDOM(`
          <div data-controller="subject">
            <input
              data-bind-attr="
                hidden~subject#stringValue:is('string with spaces')
                disabled~subject#integerValue:is(12345)
              "
              data-test-element="target">
          
          </div>
        `);

        expect(getTestElement("target").hidden).toBe(true);
        expect(getTestElement("target").disabled).toBe(true);
      });
    });
  });
});
