
var React=require('react');

var color=require('../styles/color.css');
var styleguide=require('../styles/styleguide.css');
var commonCss=require('../styles/common.css');
var tableCss=require('../styles/tableofcontents.css');
var componentCss=require('../styles/sidebar.css');

module.exports=React.createClass({
  render:function(){
    return(
      <div className={styleguide.sidebar+' '+ color.codeBg +' '+color.border}>
         <h1 className={styleguide.heading+' '+ commonCss.reset+' '+commonCss.font +' '+color.border}>
          React Style Guide for Telmate
          </h1>
          <div>
            <div className={tableCss.root+' '+commonCss.reset+' '+commonCss.font}>
               <input />
               <div className={componentCss.list}>
                   <div className={componentCss.item+' '+ componentCss.isParent }>
                          <h3>Components</h3>
                   </div>
                     <div className={componentCss.item+' '+ componentCss.isParent }>
                          <h4>Acl Container</h4>
                    </div> 
                </div>
            </div>
          </div>
      </div>
    );
  }
});












