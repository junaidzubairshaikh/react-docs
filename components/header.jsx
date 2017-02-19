
var React=require('react');
var s=require('../styles/color.css');
var st=require('../styles/styleguide.css');

module.exports=React.createClass({
  render:function(){
    return(
      <div>
        <h1 className={s.type}>{this.props.displayName}</h1>
      
        <h3>{this.props.description}</h3>
      </div>
    );
  }
});
