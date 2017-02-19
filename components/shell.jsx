
var React=require('react');
var SideBar=React.createFactory(require('./sidebar.jsx'));
var Main=React.createFactory(require('./main.jsx'));
var color=require('../styles/color.css');
var styleguide=require('../styles/styleguide.css');
var commonCss=require('../styles/common.css');
var tableCss=require('../styles/tableofcontents.css');
var componentCss=require('../styles/sidebar.css');

module.exports=React.createClass({
  render:function(){
    return(
      <div className={styleguide.root+' '+ color.base+' '+ color.baseBg +' '+styleguide.hasSidebar}>
         <Main></Main>
         <SideBar></SideBar>
      </div>
    );
  }
});












