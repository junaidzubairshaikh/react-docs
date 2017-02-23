var React=require('react'),
   Shell=require('./shell.jsx');
var ReactRouter=require('react-router');
var Router=ReactRouter.Router;
var Route=ReactRouter.Route;
var hashHistory=require('react-router').hashHistory;
var AclContainer=require('./component/acl-container.jsx');
var AudioPlayer=require('./component/audio-player.jsx');
var allJsonArray=require('../index.json');


// React.render(React.createElement(Shell), document.getElementById('app'));

var getchildrenRoutes=function(){
  var childRoutes=[];
   for(var i=0; i<allJsonArray.files.length; i++){
     childRoutes.push({path: allJsonArray.files[i].displayName, component: AclContainer, data:allJsonArray.files[i]})
   }
  return childRoutes;
};

var routes = {
  path: '/',
  component: Shell,
  childRoutes: getchildrenRoutes()
};


React.render(
      (<Router history={hashHistory} routes={routes}>
           </Router>)
  , document.getElementById('app'));

// var routes= (
//     <Route path="/aclContainer" handler={AclContainer}/>
// );
//
// Router.run(routes,function(Handler){
//   React.render(<Shell/>,document.getElementById('app'));
// });


