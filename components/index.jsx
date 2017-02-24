var React=require('react'),
   Shell=require('./shell.jsx');
var ReactRouter=require('react-router');
// var Router=ReactRouter.Router;
var Route=ReactRouter.Route;
// var hashHistory=require('react-router').hashHistory;
var AclContainer=require('./component/acl-container.jsx');
var AudioPlayer=require('./component/audio-player.jsx');
var CreatePage=require('./component/create-page.jsx');
var DateTimePicker=require('./component/datetimepicker.jsx');
var DetailAcl=require('./component/admin-detail-acl.jsx');
var DetailInfo=require('./component/admin-detail-info.jsx');
var DetailMain=require('./component/admin-detail-main.jsx');
var DetailPage=require('./component/detail-page.jsx');
var allJsonArray=require('../index.json');


// React.render(React.createElement(Shell), document.getElementById('app'));

var getchildrenRoutes=function(){
  var childRoutes=[];
   for(var i=0; i<allJsonArray.files.length; i++){
     childRoutes.push({path: allJsonArray.files[i].displayName, component: AclContainer, data:allJsonArray.files[i]})
   }
  return childRoutes;
};

// var routes = {
//   path: '/',
//   component: Shell,
//   childRoutes: getchildrenRoutes()
// };

var routes= (
    <Route path="/" handler={Shell}>
      <Route name="aclContainer" path="/aclContainer" handler={AclContainer} />
      <Route name="audioPlayer" path="/audioPlayer" handler={AudioPlayer} />
      <Route name="createPage" path="/createPage" handler={CreatePage} />
      <Route name="datetimepicker" path="/datetimepicker" handler={DateTimePicker} />
      <Route name="detailAcl" path="/detailAcl" handler={DetailAcl} />
      <Route name="detailInfo" path="/detailInfo" handler={DetailInfo} />
      <Route name="detailMain" path="/detailMain" handler={DetailMain} />
      <Route name="detailPage" path="/detailPage" handler={DetailPage} />

    </Route>
);

ReactRouter.run(routes,function(Handler){
  React.render(<Handler/>,document.getElementById('app'));
});


