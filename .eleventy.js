const CleanCSS = require("clean-css");

module.exports = function (eleventyConfig) {
  eleventyConfig.addFilter("cssmin", function (code) {
    return new CleanCSS({}).minify(code).styles;
  });

  eleventyConfig.addPassthroughCopy("src/styles");

  return {
    dir: {
      input: "./src",
      data: "../_data",
      includes: "../_includes",
      output: "./dist",
    },
  };
};
