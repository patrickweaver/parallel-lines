module.exports = function(eleventyConfig) {

  eleventyConfig.setLiquidOptions({
    dynamicPartials: true,
    strict_filters: true
  });
  eleventyConfig.addPassthroughCopy("build/*/*/*.js");

  eleventyConfig.addShortcode("prevSlide", function(inputPath) {
    const currentPage = parseInt(inputPath.split("/")[2])
    if (currentPage < 2) {
      return "";
    }
    return `<a href="/slides/${currentPage - 1}/">Previous</a>`;
  });

  eleventyConfig.addShortcode("nextSlide", function(inputPath, slides) {
    const currentPage = parseInt(inputPath.split("/")[2])
    const nextSlideUrl = `/slides/${currentPage + 1}/`
    const slideUrls = slides.map(s => s.url);
    
    if (slideUrls.indexOf(nextSlideUrl) === -1 ) {
      return "";
    }
    return `<a href="${nextSlideUrl}">Next</a>`;
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