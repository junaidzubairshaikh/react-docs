var React=require('react');

module.exports=React.createClass({

  render: function(){

    return (
      <div className="props reset font">
        <h3 className="reactcomponent-heading ">Methods</h3>
        <table className="table">
          <thead className="tableHead border">
          <tr>
            <th className="cellHeading">Name</th>
            <th className="cellHeading">Return Type</th>
            <th className="cellHeading">Description</th>
          </tr>
          </thead>
          <tbody className="tableBody">
          {this.props.methods.map(function(method){
            return <tr>
              <td className="cell"><span className="name props-name"><code className="code  monospace">{method.name}</code></span></td>
              <td className="cell"><span className="name"><code className="reset monospace">{method.returns? method.returns.type.name: "null"}</code></span></td>
              <td className="cell"><span className="name"><code className="reset monospace">{method.description? method.description: "null"}</code></span></td>
            </tr>;
          })}
          </tbody>
        </table>
      </div>
    );
  }
});

















