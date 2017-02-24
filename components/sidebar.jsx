
var React=require('react');
var Router=require('react-router');
var Link=Router.Link;
var Route=Router.Route;
var RouteHandler=Router.RouteHandler;
var hashHistory=Router.hashHistory;
var App=require('./index.jsx');



module.exports=React.createClass({
  
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
               <input  className="search base base-bg border"/>
               <div className="list">
                   <div className="item isParent">
                          <h3>Components</h3>
                   </div>
                     <div className="item isParent">
                       <Link className="link" to="aclContainer">Acl Container</Link> <br/>
                       <Link className="link" to="audioPlayer">Audio Player</Link>  <br/>
                       <Link className="link" to="createPage">Create Page</Link> <br/>
                       <Link className="link" to="datetimepicker">Date Time Picker</Link><br/>
                       <Link className="link" to="detailAcl">Detail Acl</Link><br/>
                       <Link className="link" to="detailInfo">Detail Info</Link><br/>
                       <Link className="link" to="detailMain">Detail Main</Link><br/>
                       <Link className="link" to="detailPage">Detail Page</Link><br/>
                    </div>
                 </div>

            </div>
          </div>
      </div>
    );
  }
});

