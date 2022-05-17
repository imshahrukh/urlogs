const loader = require("html-loader")
module.exports = {
  reactStrictMode: true,
  webpack: (config, options) => {
      config.module.rules.push({
        test: /\.mp4$/,
        use: [
          options.defaultLoaders.babel,
          {
            loader: 'html-loader'
          },
        ]
      })
    return config
  }
}

// { test: /\.html$/, loader: 'html-loader' }
// const withVideos = require('next-videos')

// module.exports = withVideos()