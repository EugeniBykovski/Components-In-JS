const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const srcFolder = 'src'

module.exports = {
  entry: './src/js/index.js', // задаем корневой файл
  devServer: {
    port: 3001,
  },
  plugins: [
    new HtmlWebpackPlugin({ // плагин нужен, чтобы входной точкой для приложения был index.html файл
      template: path.join(__dirname, srcFolder, 'index.html'),
    }),
  ],
  output: {
    filename: 'bundle.[chunkhash].js', // будет генерироть числовое рандомное значение
    path: path.resolve(__dirname + '/build/js') // то, куда все будет билдится
  },
  devtool: 'source-map',
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
        test: /\.(scss)$/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader'
          },
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: () => [
                  require('autoprefixer')
                ]
              }
            }
          },
          {
            loader: 'sass-loader'
          }
        ]
      }
    ]
  },
}