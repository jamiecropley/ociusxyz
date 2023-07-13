const { DateTime } = require('luxon');
const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");

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

    // favicon
    eleventyConfig.addPassthroughCopy("favicon.svg");

    // Ignore Blog post / docs drafts
    eleventyConfig.addGlobalData("eleventyComputed.permalink", function() {
        return (data) => {
            if(data.draft && !process.env.BUILD_DRAFTS) {
                return false;
            }

            return data.permalink;
        }
    });

    eleventyConfig.addGlobalData("eleventyComputed.eleventyExcludeFromCollections", function() {
        return (data) => {
            if(data.draft && !process.env.BUILD_DRAFTS) {
                return true;
            }

            return data.eleventyExcludeFromCollections;
        }
    });

    eleventyConfig.on("eleventy.before", ({runMode}) => {
        if(runMode === "serve" || runMode === "watch") {
            process.env.BUILD_DRAFTS = true;
        }
    });

    // Syntax highlighting
    eleventyConfig.addPlugin(syntaxHighlight);

    // Format date
    eleventyConfig.addFilter('dateFormat', (dateObj) => {
        return DateTime.fromJSDate(dateObj, {zone: 'utc'}).toFormat('dd/MM/yyyy');
    });
};
