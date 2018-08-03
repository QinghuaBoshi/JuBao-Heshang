//35
//var _webdigObj = {};
_webdigObj.pro = function() {
		if((!_webdigObj.catalogs&&!_webdigObj.subject)||_webdigObj.subject==";1"){
    _webdigObj.params = {};
		_webdigObj.params.reg = {};
		_webdigObj.params.reg.html = "<nodeid>(\\d+)</nodeid>";           
  
    var re = new RegExp(_webdigObj.params.reg.html, "ig"); 
     var arr = re.exec(document.body.innerHTML.replace(/\n/g,"").replace(/\r/g,""));
    
    if(RegExp.$1){
    if(_webdigObj.subject==";1")
    	_webdigObj.subject=RegExp.$1
    else
    	_webdigObj.catalogs=RegExp.$1
    }
   }
if(_webdigObj.prefix=="cul_")
   _webdigObj.catalogs=_webdigObj.prefix+_webdigObj.catalogs;
};
