var React=require('react');

module.exports=React.createClass({

  render: function(){
    var propsOjb=this.props.componentProps;
    return (
      <div className="props reset font">
        <h3 className="reactcomponent-heading ">Props</h3>
        <table className="table">
          <thead className="tableHead border">
          <tr>
            <th className="cellHeading">Name</th>
            <th className="cellHeading">Type</th>
            <th className="cellHeading">Required</th>
            <th className="cellHeading">Description</th>
          </tr>
          </thead>
          <tbody className="tableBody">

          {Object.keys(propsOjb).map(function(key,value){
            return <tr>
              <td className="cell"><span className="name props-name"><code className="code  monospace">{key}</code></span></td>
              <td className="cell"><span className="name"><code className="reset monospace">{propsOjb[key].type? propsOjb[key].type.name: "null"}</code></span></td>
              <td className="cell"><span className="name"><code className="reset monospace">{propsOjb[key].required? propsOjb[key].required.toString(): "null"}</code></span></td>
              <td className="cell"><span className="name"><code className="reset monospace">{propsOjb[key].description? propsOjb[key].description: "null"}</code></span></td>
            </tr>;
          })}
          </tbody>
        </table>
      </div>
    );
  }
});

















