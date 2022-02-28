"use strict";
// Import relevent libraries
const RedditImageFetcher = require("reddit-image-fetcher");
const imageDownloader = require('node-image-downloader');
// Set number of images to download (max 50)
const number_of_images = 50;
// Choose the subreddits to get images from
const subreddits = ["195", "196"];
// Log to console fetching post urls
console.log(`Fetching ${number_of_images} random photos from subreddits ${subreddits}.`);
RedditImageFetcher.fetch({
    type: 'custom',
    total: number_of_images,
    subreddit: subreddits
})
    .then(function (result) {
    console.log("Downloading image url(s)"); // Log to console downloading images
    var imgs = [];
    for (let i = 0; i < result.length; i++) {
        imgs.push({ uri: result[i]["image"] }); // For each url, append to array
    }
    return imageDownloader({
        imgs: imgs,
        dest: 'img', // Destination folder
    });
})
    .then(() => {
    console.log("Finished."); // Log to console finished
});
