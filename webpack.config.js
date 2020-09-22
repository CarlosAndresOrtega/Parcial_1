var HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
    mode: 'development',
    entry: './src/main.ts',
    devtool: 'inline-source-map',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
    },
    module: {
        rules: [
          {
            test: /\.tsx?$/,
            use: 'awesome-typescript-loader',
            exclude: /node_modules/,
          },
          {
            test: /\.s[ac]ss$/i,
            use: [
              // Creates `style` nodes from JS strings
              'style-loader',
              // Translates CSS into CommonJS
              'css-loader',
              // Compiles Sass to CSS
              'sass-loader',
                ],
          },
          {
            test: /\.html$/i,
            loader: 'html-loader',
          },
          {
            test: /\.(jpe?g|png|gif|svg)$/i, // Se declaran los tipos de archivos a trabajar  
            use: [
              {
              loader: 'file-loader', // Se utiliza el cargador de archivos
              options: {
                  name: '[name].[ext]', // Toma el nombre del archivo y su extension
                  outputPath: 'assets/img/', // Se copia de la carpeta img en el dist 
                  publicPath: 'assets/img/', // Este Path tomara la ruta del dist y lo colocara en el html

                }
              }
            ]
            
          },
          { 
            /**
             * Se utiliza el cargador de archivos
             * Toma el nombre del archivo y su extension
             * Se copia de la carpeta img en el dist
             * Este Path tomara la ruta del dist y lo colocara en el html
             */
            test: /.(ogg|mp3|wav|mpe?g)$/i,  
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'assets/Audio/', 
              publicPath: 'assets/Audio/',
            }
          },
          { 
            /**
             * Se utiliza el cargador de archivos
             * Toma el nombre del archivo y su extension
             * Se copia de la carpeta video en el dist
             * Este Path tomara la ruta del dist y lo colocara en el html
             */
            test: /.(mp4|mov)$/i,  
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'assets/Video/', 
              publicPath: 'assets/Video/',
            }
          },
    
        ],
      },
      resolve: {
        extensions: [ '.tsx', '.ts', '.js' ],
      },
    plugins: [new HtmlWebpackPlugin()],
    devServer: {
        contentBase: path.join(__dirname, 'src'),
        compress: true,
        port: 8888,
        open: true,
        hot:true,
        watchOptions: {
            poll:true
        }
      }

};