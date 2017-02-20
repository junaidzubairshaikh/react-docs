var react=require('react'),
   Promise = require('bluebird'),
  fileS=require('fs'),
  fs = Promise.promisifyAll(fileS);



var convertToHtml=function(data){
  var str='<html><body>';
  str+='<h1>'+data.displayName+'</h1>';
  str+='<table border="1"><tr><th>Name</th><th>Description</th><th>Return type</th></tr>';

  data.methods.forEach(function(method){
    str+='<tr><td>'+method.name+'</td><td>'+ method.description+'</td>'+'<td>'+ method.returns.type.name+'</td></tr>';
  });
  str+='</body></html>';
  return str;
};

var writetofile=function(html){
  fs.writeFile('./index.html',html,function(err,data){
    if(err) throw err;
    console.log('data written to file');
  })
};
//



var convert=function(src){
 return  fs.readFileAsync(src).then(function(data){
     return JSON.parse(data);
 });
}

module.exports={
  convert:convert
};
