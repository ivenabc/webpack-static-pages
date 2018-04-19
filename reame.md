### 可以从js 文件中导入css 文件
yarn add style-loader css-loader --dev
```
import './style.css';
```


### 处理文件（图片/字体....）,可以从js文件中导入
yarn add file-loader --dev
```
import Icon from './icon.png';
```

### 简化HTML/模板文件的创建 html-webpack-plugin
yarn add html-webpack-plugin --dev
```
   plugins: [
     new HtmlWebpackPlugin({
       title: 'Output Management'
     })
   ],
```

### 清理生成的dist目录下的文件
yarn add clean-webpack-plugin --dev 
```
 new CleanWebpackPlugin(['dist']),
```

### web服务器
yarn add webpack-dev-server --dev
```
devServer: {
  contentBase: path.join(__dirname, "dist"),
  compress: true,
  port: 9000
}

```

### 能够删除未引用代码(dead code)的压缩工具(minifier) 
yarn add uglifyjs-webpack-plugin --dev
```
new UglifyJSPlugin()
```

### css 独立出来
yarn add extract-text-webpack-plugin --dev
```
 new ExtractTextPlugin({
    filename:  (getPath) => {
      return getPath('css/[name].css').replace('css/js', 'css');
    },
    allChunks: true
  })
```