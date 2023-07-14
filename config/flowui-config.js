module.exports = {
  // Whitelist of library's production dependencies
  depsWhitelist: ["clsx", "react-textarea-autosize", "usehooks-ts"],
  // List of files to be copied to the production build
  // note: package.json will always be published
  publicFiles: ["LICENSE", "README.md", "tailwind.config.js"],
};
