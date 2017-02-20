var React=require('react'),

    AclContainer=React.createFactory(require('./acl-container/acl-container.jsx'));
    // // color=require('../styles/color.css'),
    // styleguide=require('../styles/styleguide.css'),
    // commonCss=require('../styles/common.css'),
    // sectionCss=require('../styles/section.css');


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
                   <AclContainer></AclContainer>
                </div>
              </div>
            </div>
          </div>
       </main>
       </div>

    );
  }
});

















