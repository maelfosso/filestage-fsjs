module.exports = {
  setupFilesAfterEnv: [
    './test/setup.js'
  ],
  testEnvironment: "node",
  coveragePathIgnorePatterns: [
    "/node_modules/"
  ],
};