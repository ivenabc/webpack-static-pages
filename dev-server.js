const webpackDevServer = require('webpack-dev-server');
const webpack = require('webpack');
const path = require('path');

const port = 5000;
const host = 'localhost';

const config = require('./development.config.js')
const options =  {
    contentBase: path.join(__dirname, "dist"),
    hot: true,
    port: port,
    host: host,
    proxy: {
        "/api": "http://localhost:3000"
      }
}

webpackDevServer.addDevServerEntrypoints(config, options);

const compiler = webpack(config);
const server = new webpackDevServer(compiler, options);

server.listen(port, host, () => {
    console.log('dev server lasistening on port ' + port);
  });
