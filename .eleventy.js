const CleanCSS = require("clean-css");

/**
 * Turn an array of ghost names into a string of elements with commas between
 * @param {string[]} ghosts
 * @return string
 */
function formatGhostNamesArray(ghosts) {
  return ghosts
    ?.map((ghostName) => {
      return `<span class="ghost-name">${ghostName}</span>`;
    })
    .join(`, `);
}

module.exports = function (eleventyConfig) {
  eleventyConfig.addFilter("cssmin", function (code) {
    return new CleanCSS({}).minify(code).styles;
  });

  eleventyConfig.addPassthroughCopy("src/styles");

  eleventyConfig.addFilter("formatGhostNames", formatGhostNamesArray);

  return {
    dir: {
      input: "./src",
      data: "../_data",
      includes: "../_includes",
      output: "./dist",
    },
  };
};
