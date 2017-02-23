var React=require('react'),
    Methods=require('./methods.jsx'),
    Props=require('./props.jsx');

module.exports=React.createClass({



    getInitialState: function() {
      var allJsonArray=require('../../index.json');

      return {
        allJsonArray:allJsonArray
      }
    },

    render: function(){

    var list=this.state.allJsonArray.files;

    return (
            <div className="reactcomponent-root">
              {list.map(function(item){
                return <div>
                        <header className="reactcomponent-header font">
                            <h2 className="primaryHeading">{item.displayName}</h2>
                            <div className="pathLine monospace light">
                                {item.description}
                            </div>
                          <a className="isolatedLink" href={'#!/' +item.displayName}>IsolatedLink</a>
                         </header>
                       { typeof item.methods !=='undefined' ? <Methods methods={item.methods}></Methods>:false}
                       { typeof item.props !=='undefined' ?   <Props componentProps={item.props}></Props>:false}
                        <br/>
                        <br/>
                        <br/>
                      </div> ;
              })}
            </div>
          );
      }
});

















