module.exports = function(eleventyConfig) {

    // Add a collection called "blog" that gets all files in the blog folder
    eleventyConfig.addCollection("blog", function(collectionApi) {
        return collectionApi.getFilteredByGlob("blog/*.md");
    });

    // Add a collection called "docs" that gets all files in the docs folder
    eleventyConfig.addCollection("docs", function(collectionApi) {
        return collectionApi.getFilteredByGlob("docs/*.md");
    });

    // Copy `bundle.css` to the output folder
    eleventyConfig.addPassthroughCopy("bundle.css");

    // loads images
    eleventyConfig.addPassthroughCopy("img");
};
