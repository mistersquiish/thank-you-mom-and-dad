const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("/Users/henryvuong/Desktop/thank-you-mom-and-dad/.cache/dev-404-page.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/Users/henryvuong/Desktop/thank-you-mom-and-dad/src/pages/index.js")))
}

