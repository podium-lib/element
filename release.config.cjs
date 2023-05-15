module.exports = {
  plugins: [
    "@semantic-release/changelog",
    "@semantic-release/git",
    "@semantic-release/npm",
  ],
  preset: "angular",
  branches: [{ name: "main" }, { name: "next", prerelease: true }],
};
