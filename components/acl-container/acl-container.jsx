var React=require('react'),
    aclJson=require('../../../acl-container/acl-container.json');
var glob = require('glob');

var jsons=[];

glob(['../docs/**/*.json','!node_modules'], {sync:true},function(err,files){
   if(err){
     return;
   }
  files.forEach(function(file) {
    console.log(file);
    jsons.push(file);
  });

});


module.exports=React.createClass({

  getInitialState: function() {
    return {
      displayName:aclJson.displayName,
      description:aclJson.description,
      methods:aclJson.methods
    }
  },
  render: function(){
    var data=this.state;
    return (

            <div className="reactcomponent-root">
                    <header className="reactcomponent-header font">
                        <h2 className="primaryHeading">{data.displayName}</h2>
                        <div className="pathLine monospace light">
                            {data.description}
                        </div>
                        <div className="props reset font">
                            <table className="table">
                                    <thead className="tableHead border">
                                        <tr>
                                            <th className="cellHeading">Method</th>
                                            <th className="cellHeading">Return Type</th>
                                            <th className="cellHeading">Description</th>
                                        </tr>
                                    </thead>
                                    <tbody className="tableBody">
                                        {data.methods.map(function(method){
                                        return <tr>
                                                <td className="cell"><span className="name props-name"><code className="code  monospace">{method.name}</code></span></td>
                                                <td className="cell"><span className="name"><code className="reset monospace">{method.returns.type.name}</code></span></td>
                                                <td className="cell"><span className="name"><code className="reset monospace">{method.returns.type.name}</code></span></td>
                                              </tr>;
                                        })}
                                    </tbody>
                            </  table>
                        </div>
                    </header>
            </div>
    );
  }
});

















