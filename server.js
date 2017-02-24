/** @jsx React.DOM */
var express = require('express');
var app = express();
var path=require('path');
var React=require('react');
var ReactRouter=require('react-router');
var Route=ReactRouter.Route;

var nodejsx=require('node-jsx');

nodejsx.install();

// var Shell=require('./components/shell.jsx');
var AclContainer=require('./components/component/acl-container.jsx');
// var routes= (
//   <Route path="/" handler={Shell}>
//     <Route name="aclContainer" path="/aclContainer" handler={AclContainer} />
//   </Route>
// );

app.get('/', function (req, res) {
  app.use(express.static(path.join(__dirname, 'dist')));
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));



  // ReactRouter.run(routes, req.url, function (Handler) {
  // //   var content = React.renderToString(Handler);
  // //   res.render('main', {content: content});
  // });
  // var content = React.renderToString(React.createElement(Shell));
  // res.render('main', {content: content});


});

app.get('/',function(){
  app.use(function(req, res, next) {
    var router = ReactRouter.create({location: req.url, routes: routes})
    router.run(function(Handler, state) {
      var html = React.renderToString(React.createElement(Handler));
      return res.render('react_page', {html: html})
    })
  })
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
});
