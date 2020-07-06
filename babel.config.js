module.exports = {
  presets: [
    [
      "@babel/preset-env",
      {
        targets: {
          node: "current",
        },
      },
    ],
    "@babel/preset-typescript",
  ],
  plugins: [
    [
      "module-resolver",
      {
        root: ["."],
        alias: {
          "@config": "./src/config",
          "@models": "./src/models",
          "@controllers": "./src/controllers",
          "@schemas": "./src/database/schemas",
        },
      },
    ],
  ],
  ignore: ["**/*.spec.ts"],
};
