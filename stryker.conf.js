/**
 * @type {import('@stryker-mutator/api/core').StrykerOptions}
 */
module.exports = {
  mutator: "javascript",
  mutate: [
    "server/**/*.js"
  ],
  packageManager: "npm",
  reporters: ["html", "progress"],
  // testRunner: "mocha",
  transpilers: [],
  testFramework: "mocha",
  coverageAnalysis: "perTest",
  maxConcurrentTestRunners: "4"
};
