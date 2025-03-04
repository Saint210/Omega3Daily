module.exports = {
  plugins: [
    ['imagemin-mozjpeg', { quality: 75 }],
    ['imagemin-pngquant', { quality: [0.6, 0.8] }],
    ['imagemin-webp']
  ]
}
