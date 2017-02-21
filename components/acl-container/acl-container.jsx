var React=require('react'),
    Methods=require('./methods.jsx'),
    Props=require('./props.jsx'),
    aclJson=require('../../../acl-container/acl-container.json'),
    adminUserDetail=require('../../../admin-user-detail/admin-user-detail-main.json'),
    audioPlayer=require('../../../audio-player/audio-player.json'),
    createPage=require('../../../create-page/create-page.json'),
    detailPage=require('../../../detail-page/detail-page.json'),
    dateTimepickerJson=require('../../../datetimepicker/datetimepicker.json');

// var glob=require('glob');
//
// function readJsonData(){
//   var arrayJsonFiles=[];
//   glob('../../**/*.json', {sync:true},function(err,files){
//     if(err){
//       console.log(err);
//       return;
//     }
//     files.forEach(function(file) {
//       if(!file.match("/node_modules/")){
//         arrayJsonFiles.push(file);
//       }
//     });
//     return arrayJsonFiles;
//   });
//
// }


module.exports=React.createClass({

  getInitialState: function() {
    return {
      allJsonArray:[aclJson,dateTimepickerJson,adminUserDetail,audioPlayer,createPage,detailPage],
      displayName:aclJson.displayName,
      description:aclJson.description,
      methods:aclJson.methods
    }
  },

  render: function(){
    var data=this.state.allJsonArray[1];
    var list=this.state.allJsonArray;
    return (
            <div className="reactcomponent-root">
              {list.map(function(item){
                return <div>
                        <header className="reactcomponent-header font">
                            <h2 className="primaryHeading">{item.displayName}</h2>
                            <div className="pathLine monospace light">
                                {item.description}
                            </div>
                        </header>
                       <Methods methods={item.methods}></Methods>
                       { typeof  item.props !='undefined' ? <Props componentProps={item.props}></Props>:""}
                      </div> ;
              })}
            </div>
    );
  }
});

















