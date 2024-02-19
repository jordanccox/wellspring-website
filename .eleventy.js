const tailwind = require("tailwindcss");
const postCss = require("postcss");
const autoprefixer = require("autoprefixer");
const cssnano = require("cssnano");
const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");
const Image = require("@11ty/eleventy-img");
const fs = require("fs");

const postcssFilter = (cssCode, done) => {
  postCss([
    tailwind(require("./tailwind.config")),
    autoprefixer(),
    cssnano({ preset: "default" }),
  ])
    .process(cssCode, {
      from: "./src/_includes/styles/tailwind.css",
    })
    .then(
      (r) => done(null, r.css),
      (e) => done(e, null)
    );
};

const resizeImages = async () => {
  const data = fs.readFileSync('./src/_data/portfolioFeatured.json', 'utf8');
  const imageArray = JSON.parse(data);

  const srcsetArray = [];

  for (const image of imageArray) {
    try {
      const url = `./images/portfolio-featured/${image}`;
      const stats =  await Image(url, {
        widths: [480, 920, 1270, 1400, 1760, 2048, "auto"],
        formats: ["webp"]
      });

      const srcset = stats.webp.map((stat, index, array) => {
        return stat.srcset;
      });

      srcsetArray.push(srcset);
    } catch(err) {
      console.error(err);
    }
  }
  
  fs.writeFileSync('./src/_data/resizedPortfolioFeatured.json', JSON.stringify(srcsetArray), (err) => {
    if (err) {
      console.error(err);
    } else {
      console.log("File written successfully");
    }
  });

};

// resizeImages();

module.exports = function (config) {
  config.addWatchTarget("./src/_includes/styles/tailwind.css");
  config.addNunjucksAsyncFilter("postcss", postcssFilter);
  config.addPassthroughCopy("./src/bundle.js");
  config.addPassthroughCopy("./images");
  config.addPassthroughCopy("./img");
  config.addPlugin(eleventyNavigationPlugin);
  // config.addShortcode("image", async function(src, alt, sizes) {
  //   let metadata = await Image(src, {
  //     widths: [430, 600, 770, 940],
  //     formats: ["webp", "jpeg"]
  //   });

  //   let imageAttributes = {
  //     alt,
  //     sizes,
  //     loading: "lazy",
  //     decoding: "async"
  //   };

  //   return Image.generateHTML(metadata, imageAttributes);
  // });
  return {
    passthroughFileCopy: true,
    dir: {
      input: "src",
      includes: "_includes",
      data: "_data",
      output: "_site",
    },
  };
};