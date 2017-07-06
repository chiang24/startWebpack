var path = require('path');

module.exports = {
  //入口
  entry: './src/index.js',
  //输出
  output: {
        filename: 'bundle.js',
	path: path.resolve(__dirname, 'dist')
   },
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
	  }
   ]
  }
};
