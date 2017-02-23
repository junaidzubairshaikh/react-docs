
var React=require('react');
var Router=require('react-router');
var Link=require('react-router').Link;
var Route=Router.Route;
var RouteHandler=Router.RouteHandler;
var hashHistory=Router.hashHistory;
var App=require('./index.jsx');
var TestComp=require('./test1.jsx');
var TestCompSec=require('./test2.jsx');


module.exports=React.createClass({

  getFilteredComponenet:function(queryText){

    console.log(queryText);
  },

  getInitialState:function(){
    return{
        searchText:'',
        fileList:require('../index.json').files
    }
  },

  render:function(){
    var data=this.state.fileList;

    return(
      <div className="sidebar code-bg border">
         <h1 className="styleguide-heading font border">
          React Style Guide for Telmate
          </h1>
          <div>
            <div className="table-root reset font">
               <input onChange={this.getFilteredComponenet(this.state.searchText)} className="search base base-bg border"/>
               <div className="list">
                   <div className="item isParent">
                          <h3>Components</h3>
                   </div>
                     <div className="item isParent">
                       {data.map( function(item) {
                         return <div className="item">
                           <Link className="link" to={item.displayName}>{item.displayName}</Link>
                         </div>
                       })}
                    </div>

                 </div>

            </div>
          </div>
      </div>
    );
  }
});

