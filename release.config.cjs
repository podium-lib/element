module.exports = {
  plugins: [
    "@semantic-release/changelog",
    "@semantic-release/npm",
    [
      "@semantic-release/git",
      {
        assets: [
          "src/index.js",
          "types/index.d.ts",
          "package.json",
          "README.md",
        ],
      },
    ],
  ],
  preset: "angular",
  branches: [{ name: "main" }, { name: "next", prerelease: true }],
};
