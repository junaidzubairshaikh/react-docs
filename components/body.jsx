var React=require('react');

module.exports=React.createClass({


  render:function(){
    return(
      <div>
        <style>{" th, td{border:1px solid black;}"}</style>
        <table>
          <thead>
          <tr>
            <th>Method</th>
            <th>Return Type</th>
            <th>Description</th>
          </tr>
          </thead>
          <tbody>
          {this.props.methods.map(function(method){
          return <tr><td>{method.name}</td><td>{method.returns.type.name}</td><td>{method.description}</td></tr>;
          })}
          </tbody>
        </table>
      </div>
    );
  }
});
