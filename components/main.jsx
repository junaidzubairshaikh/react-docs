var React=require('react'),

    Component=React.createFactory(require('./component/component.jsx'));
var RouteHandler=require('react-router').RouteHandler;


module.exports=React.createClass({

  render: function(){

    return (
      <div>
       <main className="content">
          <div className="components">
            <div>
              <div className="section-root">
                <header className="section-header font" >
                  <h1 className="section-header">Components</h1>
                </header>
                <div>
                    <RouteHandler />
                </div>
              </div>
            </div>
          </div>
        </main>
       </div>
    );
  }
});

















