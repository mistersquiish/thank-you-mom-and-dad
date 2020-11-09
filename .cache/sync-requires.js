const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---src-pages-index-js": hot(preferDefault(require("/Users/henryvuong/Desktop/thank-you-mom-and-dad/src/pages/index.js")))
}

