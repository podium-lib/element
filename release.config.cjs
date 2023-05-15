module.exports = {
  plugins: ["@semantic-release/changelog", "@semantic-release/git"],
  preset: "angular",
  branches: [{ name: "main" }, { name: "next", prerelease: true }],
};
