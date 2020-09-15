'use strict'

const fs = require('fs')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const SpriteLoaderPlugin = require('svg-sprite-loader/plugin')

const isDev = process.env.NODE_ENV === 'development'

function resolve(dir) {
  return path.join(__dirname, '..', dir)
}

module.exports = {
  entry: {
    app: resolve('src/main.js')
  },
  output: {
    path: resolve('dist'),
    filename: 'static/js/[name].js',
    publicPath: '/'
  },
  resolve: {
    alias: {
      '@': resolve('src'),
      svelte: resolve('node_modules/svelte')
    },
    extensions: ['.mjs', '.js', '.json', '.svelte'],
    mainFields: ['svelte', 'browser', 'module', 'main']
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        enforce: 'pre',
        exclude: /node_modules/,
        loader: 'eslint-loader',
        options: {
          formatter: require('eslint-friendly-formatter'),
          emitWarning: true,
          emitError: true
        }
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['cache-loader', 'babel-loader']
      },
      {
        test: /\.svelte$/,
        use: {
          loader: 'svelte-loader',
          options: {
            emitCss: true,
            hotReload: false,
            dev: false,
            accessors: true,
            preprocess: require('svelte-preprocess')({
              sourceMap: false,
              postcss: true,
              scss: {
                prependData: '@import "./src/assets/scss/settings.scss";'
              }
            })
          }
        }
      },
      {
        test: /\.svg$/,
        include: resolve('src/assets/svg'),
        use: [
          {
            loader: 'svg-sprite-loader',
            options: {
              symbolId: 'icon-[name]',
              extract: true,
              spriteFilename: 'static/img/sprite.svg'
            }
          },
          'svgo-loader'
        ]
      },
      {
        test: /\.(png|jpe?g|gif|svg|webp)(\?.*)?$/,
        exclude: resolve('src/assets/svg'),
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'static/img/[name].[ext]',
              esModule: false
            }
          },
          {
            loader: 'image-webpack-loader',
            options: {
              disable: isDev,
              mozjpeg: {
                progressive: true,
                quality: 75
              },
              optipng: {
                optimizationLevel: 7
              },
              pngquant: {
                quality: [0.65, 0.9],
                speed: 4
              },
              gifsicle: {
                interlaced: false
              }
            }
          }
        ]
      },
      {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
        loader: 'file-loader',
        options: {
          name: 'static/media/[name].[ext]',
          esModule: false
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'file-loader',
        options: {
          name: 'static/fonts/[name].[ext]'
        }
      },
      {
        test: /\.(scss|css)$/,
        use: [
          isDev
            ? 'style-loader'
            : {
                loader: MiniCssExtractPlugin.loader,
                options: { publicPath: '../../' }
              },
          {
            loader: 'css-loader',
            options: { sourceMap: isDev, importLoaders: 1 }
          },
          { loader: 'postcss-loader', options: { sourceMap: isDev } },
          { loader: 'sass-loader', options: { sourceMap: isDev } },
          {
            loader: 'sass-resources-loader',
            options: {
              sourceMap: isDev,
              resources: './src/assets/scss/settings.scss'
            }
          }
        ]
      },
      {
        test: /\.ejs$/,
        loader: 'ejs-loader',
        options: {
          esModule: false
        }
      }
    ]
  },
  plugins: [
    new CopyWebpackPlugin({
      patterns: [
        {
          from: resolve('public'),
          to: resolve('dist')
        }
      ]
    }),
    ...genHtmlWebpackPlugins(),
    new SpriteLoaderPlugin()
  ]
}

function genHtmlWebpackPlugins() {
  const dir = resolve('src/pages')
  return fs
    .readdirSync(dir)
    .filter((file) => file.endsWith('.ejs'))
    .map((file) => {
      const { name } = path.parse(file)
      return new HtmlWebpackPlugin({
        template: path.join(dir, 'layout/index.js'),
        filename: `${name}.html`,
        page: name,
        inject: 'head',
        minify: false,
        scriptLoading: 'defer'
      })
    })
}
