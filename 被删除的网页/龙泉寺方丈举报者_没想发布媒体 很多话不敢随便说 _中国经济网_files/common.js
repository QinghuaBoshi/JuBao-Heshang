var _wdTimeOut = 1800, _wdRUTimeout = 30;
var _wdED = "expires=Fri, 1 Jan 2038 00:00:00 GMT;", _wdCK = "0", _wdJE = "0", _wdHP = "0", _wdFl = 0, _wdTZ = 0, _wdLG = "", _wdCT = "", _wdFS = 0, _wdErr = "1", _wdGidT = 0, _wdDT = document.title == "" ? location.href : document.title, _wdCS, _wdSL = window.location.href, _wdHost = window.location.host, _wdRDM = "", _wdRP = document.referrer, _wdUA = navigator.appName
    + " " + navigator.appVersion, _wdRUA = navigator.userAgent, _wdWS = window.screen, _wdBV = navigator.appVersion
    .substring(0, 1), _wdNN = _wdUA.indexOf("Netscape") != -1
    ? true
    : false, _wdMC = _wdUA.indexOf("Mac") != -1 ? true : false, _wdIE = _wdUA
    .indexOf("MSIE") != -1 ? true : false, _wdOP = _wdRUA.indexOf("Opera") != -1
    ? true
    : false, _wdIEV = 0, _wdCID, _wdBCID = "0", _wdLS = 0, _wdTO = "1", _wdSID = "", _wdDU = 10, curtime = new Date;
var Aimg;

String.prototype.trim = function() {
    var a = /^\s+|\s+$/g;
    return function() {
        return this.replace(a, "")
    }
}();

var _webdigObj =_webdigObj||{};
_webdigObj.meta = document.getElementsByTagName("meta");
_webdigObj.getMeta = function(name) {
    var meta = _webdigObj.meta;
    if (meta) {
        for (var i = 0; i < meta.length; i++)
            if (meta[i].name == name) {
                return (meta[i].content).trim();
            }
    }
    return "";
};

_wdLP = location.protocol.indexOf("https") > -1 ? "https:" : "http:", _wdCA = _wdLP + _wecl;

function println(a) {
}

function _wdEC() {
}

window.onerror = _wdEC;

function fesc(a) {
    a = new String(a);
    return escape(a)
}

function wdhex(a) {
    for (var b = "", c, d = 7; d >= 0; d--) {
        c = a >>> d * 4 & 15;
        b += c.toString(16)
    }
    return b
}

function wdHash(a) {
    if (!a || a == "")
        return 1;
    for (var b = 1732584193, c = 4023233417, d = 0; d < a.length; d++) {
        var e = parseInt(a.charCodeAt(d));
        b = (b << 6 | c >>> 26) + (b << 16 | c >>> 16) - b;
        c = e + (c << 6) - c + (c << 16) & 4294967295
    }
    return wdhex(b & 2147483647) + wdhex(c)
}

function wdGenCID() {
    return wdHash(document.location + document.cookie + document.referrer
                  + curtime.getTime())
}

function getCookie(a) {
    var b = null, c = document.cookie, d = c.indexOf(a);
    if (d != -1) {
        d += a.length + 1;
        a = c.indexOf(";", d);
        if (a == -1)
            a = c.length;
        b = c.substring(d, a)
    }
    return b
}

function wdFlash() {
    var a = "", b = navigator;
    if (b.plugins && b.plugins.length)
        for (var c = 0; c < b.plugins.length; c++) {
            if (b.plugins[c].name.indexOf("Shockwave Flash") != -1) {
                a = b.plugins[c].description.split("Shockwave Flash ")[1];
                break
            }
        }
    else if (window.ActiveXObject)
        for (c = 10; c >= 2; c--)
            try {
                var d = eval("new ActiveXObject('ShockwaveFlash.ShockwaveFlash."
                             + c + "');");
                if (d) {
                    a = c + ".0";
                    break
                }
            } catch (e) {
            }
    return a
}

function send_ref(a) {
    a = _wdCA + a;
    Aimg = new Image();
    Aimg.onload = function() {
		_wdGidT= Aimg.height;
		if (Aimg.height == 1) {
			_wd_ruid(_wdDU);	
		}
	}
	Aimg.src = a;
}

function wd_tracker(a) {
    setup_data();
    if (a && a != "") {
        var b = _wdSL;
        if (a.toLowerCase().indexOf("http") != 0)
            a = _wdLP + "//" + _wdHost + a;
        _wdSL = a;
        _wdRP = b
    }
    write_ref()
}

function wd_reptracker(a, b) {
    setup_data();
    if (a && a != "")
        _wdSL = _wdLP + "//" + _wdHost + a;
    write_ref()
}

function getmetaContents(a) {
    var b = document.getElementsByTagName("meta");
    for (var c in b)
        if (b[c].name == a)
            return b[c].content
}

function setup_metadata() {
    _wdDT = document.title == "" ? location.href : document.title;
    
    _webdigObj.catalogs = _webdigObj.catalogs || _webdigObj.getMeta("catalogs");
    _webdigObj.contentid = _webdigObj.getMeta("contentid");
    _webdigObj.filetype = _webdigObj.getMeta("filetype");
    _webdigObj.pagetype = _webdigObj.getMeta("pagetype");
    _webdigObj.publishedtype = _webdigObj.getMeta("publishedtype");
    _webdigObj.publishdate = _webdigObj.getMeta("publishdate");
    _webdigObj.author = _webdigObj.getMeta("author");
    _webdigObj.editor = _webdigObj.getMeta("editor");
    _webdigObj.reporter = _webdigObj.getMeta("reporter");
    _webdigObj.subject = _webdigObj.getMeta("subject");
    _webdigObj.source = _webdigObj.source || _webdigObj.getMeta("source");
    _webdigObj.sourcetype = _webdigObj.getMeta("sourcetype");
    _webdigObj.pageversion = _webdigObj.getMeta("pageversion");
    _webdigObj.partner = _webdigObj.getMeta("partner");
    _webdigObj.speical = _webdigObj.getMeta("webterren_speical");
    _webdigObj.dept = _webdigObj.getMeta("dept");
    
    _webdigObj.sec =  _webdigObj.pro||function(){};
    _webdigObj.sec();
    
    _webdigObj.url = function() {
        var str = "";
        str = "_wdc=" + escape(_webdigObj.catalogs) + "&";
        if (_webdigObj.subject)
            str += "_wds=" + escape(_webdigObj.subject) + "&";
        str += "_wdt="
            + escape(_webdigObj.filetype ? _webdigObj.filetype : 0)
            + escape(_webdigObj.publishedtype
                     ? _webdigObj.publishedtype
                     : 0)
            + escape(_webdigObj.pagetype ? _webdigObj.pagetype : 0)
            + "&";
        if (_webdigObj.contentid)
            str += "_wdci=" + escape(_webdigObj.contentid) + "&";
        if (_webdigObj.publishdate)
            str += "_wdp=" + escape(_webdigObj.publishdate)+"&";
        if (_webdigObj.author)
            str += "_wda=" + escape(_webdigObj.author) + "&";
        if (_webdigObj.editor)
            str += "_wda2=" + escape(_webdigObj.editor)+"&";
        if (_webdigObj.reporter)
            str += "_wdr=" + escape(_webdigObj.reporter)+"&";
        if (_webdigObj.source)
            str += "_wdori=" + escape(_webdigObj.source)+"&";
        if (_webdigObj.sourcetype)
            str += "_wdot=" + escape(_webdigObj.sourcetype)+"&";
        if (_webdigObj.speical)
            str += "_wdsp=" + escape(_webdigObj.speical)+"&";
        if (_webdigObj.pageversion)
            str += "_wdvs=" + escape(_webdigObj.pageversion)+"&";
        if (_webdigObj.partner)
            str += "_wdqd=" + escape(_webdigObj.partner)+"&";
        if (_webdigObj.dept)
            str += "_wddp=" + escape(_webdigObj.dept)+"&";
        return str;
    }();

    try {
        if(_webdigObj.discuz && _webdigObj.discuz.tid) {
            _wdSL += _wdSL.indexOf("?") == -1 ? "?" : "&";
            _wdSL += "tid=" + _webdigObj.discuz.tid;
        }

        var a = getmetaContents("author");
        if (a && a != "") {
            a = fesc(a);
            _wdSL += _wdSL.indexOf("?") == -1 ? "?" : "&";
            _wdSL += "_wdmd=" + a
        }
    } catch (b) {
    }
}

function _wd_paramtracker(a) {
    curtime = new Date;
    setup_data();
    setup_metadata();
    if (a && a != "")
        _wdSL = _wdSL.indexOf("?") == -1 ? _wdSL + "?" + a : _wdSL + "&" + a;
    var str=_webdigObj.url;
    if (str && str != "")
        _wdSL += _wdSL.indexOf("?") == -1 ? "?" + str : "&" + str;
    write_ref()
}

function setup_data() {
    _wdSL = window.location.href;
    _wdHost = document.location.host;
    if (document.location.host == "mipcache.bdstatic.com") {
        var path = document.location.pathname,
            search = document.location.search,
            hash = document.location.hash;
        var p = path.split("/")
        if (p.length >=3 && p[1] == "c") {
            if (p[2] == "s") {
                p = p.splice(2, p.length);
                p[0] = "https:/";
            } else {
                p = p.splice(1, p.length);
                p[0] = "http:/";
            }
            _wdSL = p.join("/") + search + hash
            _wdHost = p[1];
        } 
    }
    if (document.location.protocol != "file:") {
        if (document.characterSet)
            _wdCS = fesc(document.characterSet);
        else if (document.charset)
            _wdCS = fesc(document.charset);
        if (INCLUDESUBHOST && INCLUDESUBHOST != null
            && INCLUDESUBHOST.length != 0)
            for (i = 0; i < INCLUDESUBHOST.length; i++) {
                if (INCLUDESUBHOST[i] && _wdHost
                    && INCLUDESUBHOST[i].indexOf(_wdHost) != -1) {
                    _wdErr = "0";
                    break
                }
            }
        else
            _wdErr = "0";
        if (!("1" == _wdErr && SHOWERRHOST != null && SHOWERRHOST != 1)) {
            "1" == _wdErr && println("");
            if (ROOTDM && ROOTDM != null && ROOTDM.length != 0 && _wdHost
                && _wdHost != "")
                for (i = 0; i < ROOTDM.length; i++)
                    if (_wdHost.indexOf(ROOTDM[i]) != -1)
                        _wdRDM = ROOTDM[i];
            println("_wdRP=" + _wdRP);
            if (!_wdRP || _wdRP == "")
                _wdRP = "";
            else {
                r = _wdRP.indexOf(document.domain);
                if (!(r >= 0 && r <= 8))
                    if (_wdRP.indexOf("[") == 0
                        && _wdRP.lastIndexOf("]") == _wdRP.length - 1)
                        _wdRP = ""
            }
            println("_wdRP=" + _wdRP);
            println("_wdUA=" + _wdUA);
            println("_wdRUA=" + _wdRUA);
            if (_wdIE)
                _wdIEV = parseInt(_wdUA.substr(_wdUA.indexOf("MSIE") + 5));
            if (_wdIE && _wdIEV >= 5) {
                document.body.addBehavior("#default#clientCaps");
                _wdCT = document.body.connectionType;
                document.body.addBehavior("#default#homePage");
                _wdHP = document.body.isHomePage(location.href) ? "1" : "0"
            }
            try {
                if (_wdIE)
                    _wdFS = document.fileSize
            } catch (a) {
                _wdFS = 0
            }
            _wdFl = wdFlash();
            _wdTZ = (new Date).getTimezoneOffset() / -60;
            if (typeof _wdWS != "undefined" && _wdWS != null) {
                _wdSW = _wdWS.width;
                _wdSH = _wdWS.height;
                _wdCD = _wdWS.colorDepth;
                _wdSR = _wdSW + "x" + _wdSH;
                if (_wdNN && _wdBV >= 4)
                    _wdCD = _wdWS.pixelDepth
            }
            if (_wdNN && _wdBV >= 4 || _wdOP)
                _wdLG = navigator.language;
            if (_wdIE && _wdBV >= 4 && !_wdOP)
                _wdLG = navigator.userLanguage;
            _wdJE = navigator.javaEnabled() == true ? "1" : "0";
            if (navigator.cookieEnabled)
                _wdCK = navigator.cookieEnabled == true ? "1" : "0";
            _wdCK == 1 && setup_cookie()
        }
    }
}

function _wd_ruid(_to) {
	var ver = 1;
    if (self == top && _to > _wdRUTimeout) {
        var s = '';
        var ua = navigator.userAgent;
        var j = 0;
        for(var i = 0; i< ua.length; i++){
            var c = ua.charCodeAt(i)
            if(c <= 127){
                s += ua.charAt(i)
                j++
            }
            if (j >= 64) {
                break;
            }
        }
        var r = Math.random().toString(36).substring(2);
        var u = "r-"+wdHash(s) + '-' + r + '-' + ver + '-' +_to;
        var l = _wdCA.replace("1.gif", u);
        var a = new Image();
        a.src=l;
    }
}


function setup_cookie() {
    var a = document.cookie, b = a.indexOf("wdcid=");
    if (b < 0) {
        _wdBCID = "0";
        _wdCID = wdGenCID();
        b = "";
        if (_wdRDM && _wdRDM != "")
            b = "domain=" + _wdRDM + ";";
        document.cookie = "wdcid=" + escape(_wdCID) + ";" + _wdED + b
            + "path=/;";
        if (document.cookie.indexOf("wdcid=") < 0) {
            _wdCK = 0;
            return
        }
    } else {
        _wdBCID = "1";
        _wdCID = getCookie("wdcid")
    }
    b = document.cookie.indexOf("wdlast=");
    if (b < 0)
        _wdLS = 0;
    else {
        _wdLS = parseInt(getCookie("wdlast"));
        _wdDU = Math.round(curtime.getTime() / 1000 - _wdLS);
        if ( _wdDU <= _wdTimeOut) _wdTO = "0";
    }
    document.cookie = "wdlast=" + Math.round(curtime.getTime() / 1000) + ";"
        + _wdED + "path=/;"
    b = document.cookie.indexOf("wdses=");
    if (b < 0 || _wdTO == "1") {
        _wdTO = "1";
        _wdSID = wdGenCID();
        _wdDU = 10;
        document.cookie = "wdses=" + _wdSID + ";" + "path=/;";
    }
    else
        _wdSID = getCookie("wdses");
}

function write_ref() {
    if (_wdCK == "0")
        _dgURL = getGeneralInfo() + getLocalInfo();
    else {
        _dgURL = getGeneralInfo() + getCookieInfo() + getLocalInfo();
        //if (_wdTO == "1")
        //  _dgURL += getLocalInfo()
    }
    send_ref(_dgURL)
}

function getGeneralInfo() {
    return "?z=" + _wdUID + "&a=" + curtime.getTime().toString(16) + "&b="
        + fesc(_wdDT) + "&B=" + _wdCS + "&c=" + fesc(_wdSL) + "&d="
//        + fesc(_wdRP) + "&e=" + _wdHP + "&f=" + _wdFS + "&H="
        + fesc(_wdRP) + "&e=" + _wdDU + "&f=" + _wdSID + "&H="
        + fesc(_wdHost) + "&E=" + _wdErr
}

function getLocalInfo() {
    return "&i=" + fesc(_wdLG) + "&j=" + _wdJE + "&k=" + _wdSR + "&l=" + _wdCD
        + "&m=" + _wdFl + "&n=" + fesc(_wdCT) + "&o=" + _wdTZ
}

function getCookieInfo() {
    return "&r=" + _wdCID + "&s=" + _wdBCID + "&t=" + _wdLS + "&u=" + _wdTO
}


(function() {
    if (window['_wd_common_loaded']) return;
    else window['_wd_common_loaded'] = new Date();

    function _wd_process_queue(a) {
       switch (a[0]) {
           case "wd_paramtracker":
              _wd_paramtracker(a[1]);
              break;
           default:
       }
    }

    if (typeof _wd_o != 'undefined') {
      window[_wd_o].q=window[_wd_o].q||[];
      var q = window[_wd_o].q;
      for(var i = 0; i < q.length; i++) {
          _wd_process_queue(q[i]);
      }
      q.push = function(a) { _wd_process_queue(a);};
    }

    var clickPos = new Array();
    var maxClicks    = 32;
    var waitTimeOut = 30; //delay seconds to send 
    var screenWidth = 0;

    if(window.screen && typeof window.screen.width == 'number') {
        screenWidth = window.screen.width;
    }

    function checkEnabled() {
        var metas= document.getElementsByTagName('meta');
        for(var i = 0; i < metas.length; i++) {
            if(metas[i].name == 'uctk' && metas[i].value != 0 && metas[i].value != 'disabled') {
                return true;
            }
        }
    }
    
    function enabledDebug() {
        return document.location.href.indexOf('debug') == -1 ?  false : true;
    }
    var userAgent = window.userAgent;

    function send_tref(clicks) {
        var o = { z : _wdUID,
                  a : curtime.getTime().toString(16),
                  c : fesc(window.location.href),
                  d : fesc(clicks),
                  k : screenWidth,
                  H : fesc(_wdHost),
                  r : _wdCID };

        var r = '';
        
        for(var a in o){
            r += "&" + a + '=' + o[a];      
        }

        a = _wdCA.replace('1.gif', '3.gif') + '?' + r.slice(1);
        refImg = new Image(1, 1);
        refImg.src = a;
    }

    var lastY = -1;
    function send_sref() {
        var r = getRect();
        var y = r.y + r.h;
        if (y == lastY || y <= 0 ) { return;}
        lastY = y;
        var o = { z : _wdUID,
                  a : curtime.getTime().toString(16),
                  c : fesc(window.location.href),
                  d : y,
                  k : 'S',
                  H : fesc(_wdHost),
                  r : _wdCID };

        var r = '';
        for(var a in o){ r += "&" + a + '=' + o[a]; }
        a = _wdCA.replace('1.gif', '3.gif') + '?' + r.slice(1);
        refImg = new Image(1, 1);
        refImg.src = a;
    }
    
    function getRect() {
        var w = window.innerWidth;
        var h = window.innerHeight;
        var x = window.pageXOffset;
        var y = window.pageYOffset;
        var e = (document.compatMode == "CSS1Compat") ? document.documentElement: document.body;
        if(typeof w != "number") w = e.clientWidth
        if(typeof h != "number") h = e.clientHeight;
        if(typeof x != "number") x = e.scrollLeft;
        if(typeof y != "number") y = e.scrollTop;
        var r = {};
        r.w = Math.round(w); 
        r.h = Math.round(h); 
        r.x = Math.round(x);
        r.y = Math.round(y);
        return r;
    }

    function AbsolutePos(event) {
        var r = getRect();
        this.x = r.x + event.clientX;
        this.y = r.y + event.clientY;
        this.w = r.w;
    }
    
    AbsolutePos.prototype.toString = function() {
        return "X: " + this.x + ", Y:" + this.y + ", W:" + this.w;
    }
    
    function logEventPos(event,position) {
        var o = new AbsolutePos(event);
        if(position) {
            o.x = event.clientX + position.x;
            o.y = event.clientY + position.y;
        }
        if(clickPos.length > 10) {
            sendPos();
        } else {
            clickPos.push(o);
        }
    }

    function serializeClicks(clicks) {
        var str = '';
        for(var i = 0 ; i < clicks.length; i++) {
            var click = clicks[i];
            str += click.x + '*' + click.y + '*' + click.w + ',';
        }
        return str.slice(0, str.length-1);
    }

    function sendPos() {
        if(clickPos.length > 0) {
            var str = serializeClicks(clickPos.splice(0, clickPos.length));
            send_tref(str);
        }
    }
    
    function track() {
        var iframes = getAllByTagName("iframe");
        var tempRun = function(position){
            return function(event){
                logEventPos(event,position);
            }
        }
        
        if(window.addEventListener) {
            document.addEventListener('click', function(event) {
                logEventPos(event);
            }, true);
            window.addEventListener('unload', function(event) {
                sendPos();
            }, true);
            
            for(var i=0;i<iframes.length;i++) {
                try{
                    iframes[i].contentWindow.document.addEventListener('click', tempRun(iframes[i].position), true);
                }catch(err){}
            }
        }else if(window.attachEvent) {
            document.attachEvent('onclick', function(event) { 
                logEventPos(event);
            });
            window.attachEvent('onbeforeunload', function(event) {
                sendPos();
            });
            
            for(var i=0;i<iframes.length;i++) {
                try{
                    iframes[i].contentWindow.document.attachEvent('onclick', tempRun(iframes[i].position));
                }catch(err){}
            }
        }
        setInterval(sendPos, 1000 * waitTimeOut);
        setInterval(send_sref, 1000 * 5);
    }
    
    function getAllByTagName(tag, listAll, element) {
        var list = listAll;
        if(!list) {
            list = [];
        }
        var n=0;
        try{
            var elements = element ? element.contentWindow.document.getElementsByTagName(tag) : document.getElementsByTagName(tag);
            n = elements.length;
        }catch(err){
            n = 0;
        }
        
        for(var i=0;i<n;i++) {
            var position = getAbsolutePosition(elements[i]);
            if(element && element.position) {
                position.x += element.position.x;
                position.y += element.position.y;
            } 
            elements[i].position = position;
            list.push(elements[i]);
            getAllByTagName(tag, list, elements[i]);
        }
        return list;
    }

    function getAbsolutePosition(obj) {
        position = new Object();
        position.x = 0;
        position.y = 0;
        var tempobj = obj;
        while(tempobj != null && tempobj != document.body) {
            position.x += tempobj.offsetLeft;
            position.y += tempobj.offsetTop;
            tempobj = tempobj.offsetParent;
        }
        // position.x += document.body.scrollLeft;
        // position.y += document.body.scrollTop;
        return position;
    }
    
    if(checkEnabled()) {
        track();
    }

})();
