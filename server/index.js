let express = require('express');

const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');

const webpackConfig = require('../webpack.config.js');
const compiler = webpack(webpackConfig);

let app = express();

app.use(webpackDevMiddleware(compiler, {
  publicPath: webpackConfig.output.publicPath,
  serverSideRender: true
}));
app.use(webpackHotMiddleware(compiler));

app.set('view engine', 'ejs');
app.get('/', (req, res) => {
  res.render('index', { name: 'David Jones', rank: 1 });
});
app.listen(4000, () => console.log('Example app listening on port 4000!'));