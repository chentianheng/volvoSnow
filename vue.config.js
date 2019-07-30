module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? '/snow' : '/',
  outputDir: "snow",
  // devServer: {
  //   proxy: 'http://binarytre.com'
  // }
}