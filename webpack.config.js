var path = require('path');
var webpack = require('webpack');
var uglifyJsPlugin = webpack.optimize.UglifyJsPlugin;
var HtmlwebpackPlugin = require('html-webpack-plugin');
var OpenBrowserPlugin = require('open-browser-webpack-plugin');

module.exports = {
  //入口
  entry: './src/index.js',
  //输出
  output: {
        filename: 'bundle-[hash].js',
	path: path.resolve(__dirname, 'dist')
   },
  devServer: {
         contentBase: path.join(__dirname, "dist"),
	     compress: true,
	         port: 9000
		   },
  plugins: [
        new uglifyJsPlugin({
	  compress: {
	  warnings: false
		       }
        }),
	new HtmlwebpackPlugin({
	  title: 'Webpack-demos',
          filename: 'index.html'
        }),
        new OpenBrowserPlugin({
	  url: 'http://localhost:9000'
	})
  ],
    module: {
        loaders:[
	  { 
	    test: /\.scss$/, 
	    loaders:[ 
	      'style-loader',
	      'css-loader',
	      'sass-loader'
	  
	   ]
	  },

	  { 
	     test: /\.(png|jpg|jpeg)$/, 
	     loaders: [
	                 'file-loader?hash=sha512&digest=hex&name=[hash].[ext]',
			 'image-webpack-loader?bypassOnDebug&optimizationLevel=7&interlaced=false'
	     ]
	  },
          
	  {
	      test: /\.jsx?$/,
	      exclude: /(node_modules|bower_components)/,
	      loader: 'babel-loader', // 'babel-loader' is also a legal name to reference
	      query: {
	      presets: ['es2015']
	                 }
	  }
      ]
   }   
}
