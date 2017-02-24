
var React=require('react');

var SideBar=React.createFactory(require('./sidebar.jsx'));
var Main=React.createFactory(require('./main.jsx'));
var Router=require('react-router');
var RouteHandler=Router.RouteHandler;



module.exports=React.createClass({
  render:function(){
    return(
      <div className="styleguide-root base base-bg hasSidebar">
         <Main>
           
         </Main>
         <SideBar></SideBar>
      </div>
    );
  }
});












