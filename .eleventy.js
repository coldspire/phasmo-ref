import { EleventyRenderPlugin } from "@11ty/eleventy";
import pluginWebc from "@11ty/eleventy-plugin-webc";
import CleanCSS from "clean-css";
import litPlugin from "@lit-labs/eleventy-plugin-lit";

const componentsDir = "_components";

function wikiUrl(ghostName, isTextVersion) {
  return isTextVersion
    ? `https://www.textise.net/showText.aspx?strURL=https%253A//phasmophobia.fandom.com/wiki/${ghostName}`
    : `https://phasmophobia.fandom.com/wiki/${ghostName}`;
}

export default function (eleventyConfig) {
  eleventyConfig.addPlugin(EleventyRenderPlugin);
  eleventyConfig.addPlugin(litPlugin, {
    mode: "worker",
    componentModules: [`${componentsDir}/ghost-link.mjs`],
  });
  eleventyConfig.addPlugin(pluginWebc);

  eleventyConfig.addFilter("cssmin", function (code) {
    return new CleanCSS({}).minify(code).styles;
  });

  eleventyConfig.addShortcode("ghostWikiUrl", wikiUrl);

  eleventyConfig.addPassthroughCopy({
    "src/styles": "styles",
    "src/scripts": "scripts",
  });

  eleventyConfig.addWatchTarget(componentsDir);

  return {
    dir: {
      input: "./src",
      data: "../_data",
      includes: "../_includes",
      components: "../_components/*.webc",
      output: "./dist",
    },
  };
}
