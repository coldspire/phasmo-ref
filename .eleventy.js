const { EleventyRenderPlugin } = require("@11ty/eleventy");
const CleanCSS = require("clean-css");
const litPlugin = require("@lit-labs/eleventy-plugin-lit");

const componentsDir = "_components";

module.exports = function (eleventyConfig) {
  eleventyConfig.addPlugin(EleventyRenderPlugin);
  eleventyConfig.addPlugin(litPlugin, {
    mode: "worker",
    componentModules: [`${componentsDir}/ghost-link.mjs`],
  });

  eleventyConfig.addFilter("cssmin", function (code) {
    return new CleanCSS({}).minify(code).styles;
  });

  eleventyConfig.addPassthroughCopy("src/styles");

  eleventyConfig.addWatchTarget(componentsDir);

  return {
    dir: {
      input: "./src",
      data: "../_data",
      includes: "../_includes",
      output: "./dist",
    },
  };
};
