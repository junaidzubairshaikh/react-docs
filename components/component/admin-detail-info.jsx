var React=require('react'),
  Methods=require('./methods.jsx'),
  Props=require('./props.jsx');

module.exports=React.createClass({


  render: function(){

    // var item=this.props.route.data;
    var item=require('../../index.json').files[3];

    return (
      <div className="reactcomponent-root">
        <div>
          <header className="reactcomponent-header font">
            <h2 className="primaryHeading">{item.displayName}</h2>
            <div className="pathLine monospace light">
              {item.description}
            </div>
          </header>
          { typeof item.methods !=='undefined' ? <Methods methods={item.methods}></Methods>:false}
          { typeof item.props !=='undefined' ?   <Props componentProps={item.props}></Props>:false}
          <br/>
          <br/>
          <br/>
        </div>
      </div>
    );
  }
});
