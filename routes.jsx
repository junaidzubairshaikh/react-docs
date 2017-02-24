/** @jsx React.DOM */
var Shell=require('');
var AclContainer=require('');
var React=require('react');
var ReactRouter=require('react-router');
var Route=ReactRouter.Route;

var routes=(
  <Route path="/" handler={Shell}>
    <Route name="aclContainer" path="/aclContainer" handler={AclContainer} />
  </Route>
);


module.exports=routes;
