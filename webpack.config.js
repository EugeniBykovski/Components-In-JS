const path = require('path')

const HTMLPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
  entry: './src/js/index.js', // задаем корневой файл
  output: {
    filename: 'bundle.[chunkhash].js', // будет генерироть числовое рандомное значение
    path: path.resolve(__dirname + '/build/js') // то, куда все будет билдится
  },
  devtools: 'source-map', // чтобы в консоли разработчика мы могли посмотреть каждый файл и из чего он состоит
  devServer: {
    port: 3001
  },
  plugins: [
    new HTMLPlugin({ // плагин нужен, чтобы входной точкой для приложения был index.html файл
      template: 'index.html' 
    }),
    new CleanWebpackPlugin()
  ],
  module: {
    rules: [ // правила, которые помогают импортировать и использовать такие же модули js в css файлах
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: 'file-loader'
          }
        ]
      },
      {
        test: /\.svg$/,
        loader: ['svg-inline-loader']
      },
    ]
  }
}