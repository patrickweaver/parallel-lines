module.exports = function(eleventyConfig) {

  eleventyConfig.setLiquidOptions({
    dynamicPartials: true,
    strict_filters: true
  });
  eleventyConfig.addPassthroughCopy("build/*.js");
  eleventyConfig.addPassthroughCopy("build/slides/*/*.js");
  eleventyConfig.addPassthroughCopy("build/leaflet/*.js");

  eleventyConfig.addShortcode("prevSlide", function(inputPath) {
    const currentPage = parseInt(inputPath.split("/")[2])
    if (isNaN(currentPage) || currentPage < 2) {
      return "";
    }
    return `<a href="../${currentPage - 1}/">Previous</a>`;
  });

  eleventyConfig.addShortcode("nextSlide", function(inputPath, slides) {
    const currentPage = parseInt(inputPath.split("/")[2])
    const nextSlideUrl = `/slides/${currentPage + 1}/`
    const nextSlideRelUrl = `../${currentPage + 1}/`
    const slideUrls = slides.map(s => s.url);
    
    if (slideUrls.indexOf(nextSlideUrl) === -1 ) {
      return "";
    }
    return `<a href="${nextSlideRelUrl}">Next</a>`;
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