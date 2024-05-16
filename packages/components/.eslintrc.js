/** @type {import("eslint").Linter.Config} */
module.exports = {
  root: true,
  extends: ["@packages/eslint-config/react-internal.js"],
  parser: "babel-eslint"
};