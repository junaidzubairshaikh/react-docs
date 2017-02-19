var React=require('react'),
     
    AclContainer=React.createFactory(require('./acl-container.jsx')),
    color=require('../styles/color.css'),
    styleguide=require('../styles/styleguide.css'),
    commonCss=require('../styles/common.css'),
    tableCss=require('../styles/tableofcontents.css'),
    sectionCss=require('../styles/section.css'),
    reactCompCss=require('../styles/reactcomponent.css'),
    componentCss=require('../styles/sidebar.css');

module.exports=React.createClass({

  render: function(){
    var data=this.state;

    return (
      <div>
       <main className={styleguide.content}>
          <div className={styleguide.components}>
            <div>
              <div className={sectionCss.root}>
                <header className={sectionCss.header +' '+commonCss.font} >
                  <h1 className={sectionCss.header}>Components</h1>
                </header>
                <div>
                   <AclContainer></AclContainer>  
                </div>
              </div>
            </div>
          </div>  
       </main>
       </div>

      // <div>
      //   <HeaderElement displayName={data.displayName}  description={data.description}></HeaderElement>
      //   <Body methods={data.methods}></Body>
      // </div>
    );
  }
});

















