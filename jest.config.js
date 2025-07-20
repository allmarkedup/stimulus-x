export default async () => {
  return {
    cache: false,
    verbose: true,
    testMatch: ["<rootDir>/test/**/*.test.js"],
    setupFilesAfterEnv: ["<rootDir>/test/support/setup.js"],
    testEnvironment: "jsdom",
  };
};
