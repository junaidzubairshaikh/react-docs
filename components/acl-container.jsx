var React=require('react'),
    displayName=require('../../acl-container/acl-container.json').displayName;
    description=require('../../acl-container/acl-container.json').description;
    methods=require('../../acl-container/acl-container.json').methods,
    
    Body=React.createFactory(require('./body.jsx')),
    HeaderElement=React.createFactory(require('./header.jsx')),
    color=require('../styles/color.css'),
    styleguide=require('../styles/styleguide.css'),
    commonCss=require('../styles/common.css'),
    tableCss=require('../styles/tableofcontents.css'),
    sectionCss=require('../styles/section.css'),
    reactCompCss=require('../styles/reactcomponent.css'),
    propsCss=require('../styles/props.css'),
    componentCss=require('../styles/sidebar.css');

module.exports=React.createClass({
  
  getInitialState: function() {
    return {
      displayName:displayName,
      description:description,
      methods:methods
    }
  },
  render: function(){
    var data=this.state;
    return (

            <div className={reactCompCss.root}>
                    <header className={reactCompCss.header}>
                        <h2 className={reactCompCss.primaryHeading}>{data.displayName}</h2>
                        <div className={reactCompCss.pathLine+' '+ commonCss.monospace+' '+color.light}>
                            {data.description}
                        </div>
                        <div className={reactCompCss.props+' '+ commonCss.reset+' '+ commonCss.font}>
                            <table className={propsCss.table}>
                                    <thead className={propsCss.tableHead+' '+color.border}>
                                        <tr>
                                            <th className={propsCss.cellHeading}>Method</th>
                                            <th className={propsCss.cellHeading}>Return Type</th>
                                            <th className={propsCss.cellHeading}>Description</th>
                                        </tr>
                                    </thead>
                                    <tbody className={propsCss.tableBody}>
                                        {data.methods.map(function(method){
                                        return <tr>
                                                <td className={propsCss.cell}><span className={propsCss.name+' '+color.name}><code className={propsCss.code+' '+ commonCss.reset+' '+commonCss.monospace}>{method.name}</code></span></td>
                                                <td className={propsCss.cell}><span className={propsCss.name+' '+color.name}><code className={commonCss.reset+' '+commonCss.monospace}>{method.returns.type.name}</code></span></td>
                                                <td className={propsCss.cell}><span className={propsCss.name+' '+color.name}><code className={commonCss.reset+' '+commonCss.monospace}>{method.returns.type.name}</code></span></td>
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

















