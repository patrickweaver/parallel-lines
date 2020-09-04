module.exports = function(eleventyConfig) {

  eleventyConfig.setLiquidOptions({
    dynamicPartials: true,
    strict_filters: true
  });
  eleventyConfig.addPassthroughCopy("build/*/*.js");

  eleventyConfig.addShortcode("prevSlide", function(inputPath) {
    return parseInt(inputPath.split("/")[1]) - 1
  });

  eleventyConfig.addShortcode("nextSlide", function(inputPath) {
    return parseInt(inputPath.split("/")[1]) + 1;
  });

  return {
    dir: {
      input: "build",
      output: "dist"
    },
    templateFormats: [
      'md',
      'css',
      'map',
      'hbs',
      'njk',
      'gif',
      'jpg',
      'jpeg',
      'png',
      'mp3',
      'mp4',
      'pdf'
    ]
  }
};