import { Controller } from "@hotwired/stimulus";
import { createTestContext } from "./support/test-context";

const { spyOn, waitFor, restoreAllMocks } = vi;

let context;
beforeAll(async () => {
  context = await createTestContext();
});

afterEach(() => restoreAllMocks());
afterAll(() => context.reset());

describe("watched properties", async () => {
  beforeAll(() =>
    context.subject(
      class extends Controller {
        static values = {
          count: Number,
        };

        static watch = ["countValue", "units"];

        connect() {
          this.units = "MB";
          this.summed = 0;
          this.unwatchedProperty = "foo";
        }

        watchedPropertyChanged(propertyName, value) {
          if (propertyName === "countValue") {
            this.summed = this.summed + value;
          }
        }

        unitsPropertyChanged(value, oldValue) {
          // do something here...
        }
      }
    )
  );

  describe("watchedPropertyChanged method", () => {
    test("is called when any watched property changes", async () => {
      const { subjectController } = await context.html(`
        <div data-controller="subject"></div>
      `);
      const spy = spyOn(subjectController, "watchedPropertyChanged");

      subjectController.countValue++;
      await waitFor(() => {
        expect(spy).toHaveBeenCalledWith("countValue", 1, 0, { initial: false });
        expect(subjectController.summed).toBe(1);
        expect(spy).toHaveBeenCalledTimes(1);
      });

      subjectController.units = "KB";
      await waitFor(() => {
        expect(spy).toHaveBeenCalledWith("units", "KB", "MB", { initial: false });
        expect(spy).toHaveBeenCalledTimes(2);
      });
    });

    test("isn't called when an unwatched property changes", async () => {
      const { subjectController } = await context.html(`
        <div data-controller="subject"></div>
      `);
      const spy = spyOn(subjectController, "watchedPropertyChanged");

      subjectController.unwatchedProperty = "bar";
      await waitFor(() => {
        expect(spy).not.toHaveBeenCalled();
      });
    });
  });

  describe("<name>PropertyChanged method", () => {
    test("is called when the relevant property changes", async () => {
      const { subjectController } = await context.html(`
        <div data-controller="subject"></div>
      `);
      const spy = spyOn(subjectController, "unitsPropertyChanged");

      subjectController.units = "KB";
      await waitFor(() => {
        expect(spy).toHaveBeenCalledWith("KB", "MB", { initial: false });
        expect(spy).toHaveBeenCalledTimes(1);
      });
    });

    test("isn't called when a different watched property changes", async () => {
      const { subjectController } = await context.html(`
        <div data-controller="subject"></div>
      `);
      const spy = spyOn(subjectController, "unitsPropertyChanged");

      subjectController.count++;
      await waitFor(() => {
        expect(spy).not.toHaveBeenCalled();
      });
    });
  });
});
