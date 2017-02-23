
var React=require('react');

var SideBar=React.createFactory(require('./sidebar.jsx'));
var Main=React.createFactory(require('./main.jsx'));



module.exports=React.createClass({
  render:function(){
    return(
      <div className="styleguide-root base base-bg hasSidebar">
         <Main children={this.props.children}></Main>
         <SideBar></SideBar>
      </div>
    );
  }
});












