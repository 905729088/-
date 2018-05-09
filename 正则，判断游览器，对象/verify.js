//***** 验证 *****//
"use strict"

function Verify(){};

// 是否字符串
Verify.prototype.isString = function(a){
    return Object.prototype.toString.call(a).slice(8, -1) === 'String'
},

// 是否数字
Verify.prototype.isNumber = function(a){
    return Object.prototype.toString.call(a).slice(8, -1) === 'Number'
},

// 是否对象
Verify.prototype.isObj = function(a){
    return Object.prototype.toString.call(a).slice(8, -1) === 'Object'
},

// 是否是数组
Verify.prototype.isArray = function(a){
    return Object.prototype.toString.call(a).slice(8, -1) === 'Array'
},

// 是否时间
Verify.prototype.isDate = function(a){
    return Object.prototype.toString.call(a).slice(8, -1) === 'Date'
},

// 是否boolean
Verify.prototype.isBoolean = function(a){
    return Object.prototype.toString.call(a).slice(8, -1) === 'Boolean'
},

// 是否函数
Verify.prototype.isFunction = function(a){
    return Object.prototype.toString.call(a).slice(8, -1) === 'Function'
},

// 是否为null
Verify.prototype.isNull = function(a){
    return Object.prototype.toString.call(a).slice(8, -1) === 'Null'
},

// 是否undefined
Verify.prototype.isUndefined = function(a){
    return Object.prototype.toString.call(a).slice(8, -1) === 'Undefined'
},

// 判断 值 的真假
Verify.prototype.is = function(a){
    if (a == '' || a == undefined || a == null || a == 'null' || a == 'undefined' || a == 0 || a == false || a == NaN){
        return false
    } else {
        return true
    }
},

// 判断手机类型
Verify.prototype.isMobile = function(){
    var u = navigator.userAgent;
    if (u.indexOf('Android') > -1 || u.indexOf('Linux') > -1) {//安卓手机
        return "Android";
    } else if (u.indexOf('iPhone') > -1) {//苹果手机
        return "iPhone";
    } else if (u.indexOf('iPad') > -1) {//iPad
        return "iPad";
    } else if (u.indexOf('Windows Phone') > -1) {//winphone手机
        return "Windows Phone";
    }else{
        return false
    }
},

// 判断是否是PC端登录
Verify.prototype.isPC = function(){
    var userAgentInfo = navigator.userAgent;
    var Agents = ["Android", "iPhone", "SymbianOS", "Windows Phone", "iPad", "iPod"];
    var flag = true;
    for (var v = 0; v < Agents.length; v++) {
        if (userAgentInfo.indexOf(Agents[v]) > 0) {
            flag = false;
            break;
        }
    }
    return flag;
},

// 正则判断字符串类型
// type：类型
// src： 要判断的值
// 如果匹配则返回true，否则false
Verify.prototype.isGREP = function(type, src){
    switch (type) {
        case 'phone':   //手机号码
            return /^1[3|4|5|7|8][0-9]{9}$/.test(str);
        case 'tel':     //座机
            return /^(0\d{2,3}-\d{7,8})(-\d{1,4})?$/.test(str);
        case 'card':    //身份证
            return /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/.test(str);
        case 'pwd':     //密码以字母开头，长度在6~18之间，只能包含字母、数字和下划线
            return /^[a-zA-Z]\w{5,17}$/.test(str)
        case 'postal':  //邮政编码
            return /[1-9]\d{5}(?!\d)/.test(str);
        case 'QQ':      //QQ号
            return /^[1-9][0-9]{4,9}$/.test(str);
        case 'email':   //邮箱
            return /^[\w-]+(\.[\w-]+)*@[\w-]+(\.[\w-]+)+$/.test(str);
        case 'money':   //金额(小数点2位)
            return /^\d*(?:\.\d{0,2})?$/.test(str);
        case 'URL':     //网址
            return /(http|ftp|https):\/\/[\w\-_]+(\.[\w\-_]+)+([\w\-\.,@?^=%&:/~\+#]*[\w\-\@?^=%&/~\+#])?/.test(str)
        case 'IP':      //IP
            return /((?:(?:25[0-5]|2[0-4]\\d|[01]?\\d?\\d)\\.){3}(?:25[0-5]|2[0-4]\\d|[01]?\\d?\\d))/.test(str);
        case 'date':    //日期时间
            return /^(\d{4})\-(\d{2})\-(\d{2}) (\d{2})(?:\:\d{2}|:(\d{2}):(\d{2}))$/.test(str) || /^(\d{4})\-(\d{2})\-(\d{2})$/.test(str)
        case 'number':  //数字
            return /^[0-9]$/.test(str);
        case 'english': //英文
            return /^[a-zA-Z]+$/.test(str);
        case 'chinese': //中文
            return /^[\u4E00-\u9FA5]+$/.test(str);
        case 'lower':   //小写
            return /^[a-z]+$/.test(str);
        case 'upper':   //大写
            return /^[A-Z]+$/.test(str);
        case 'HTML':    //HTML标记
            return /<("[^"]*"|'[^']*'|[^'">])*>/.test(str);
        default:
            return true;
    }
},

// 获取浏览器类型
Verify.prototype.browserType = function(){
    var userAgent = navigator.userAgent; //取得浏览器的userAgent字符串
    var isOpera = userAgent.indexOf("Opera") > -1; //判断是否Opera浏览器
    var isIE = userAgent.indexOf("compatible") > -1 && userAgent.indexOf("MSIE") > -1 && !isOpera; //判断是否IE浏览器
    var isEdge = userAgent.indexOf("Edge") > -1; //判断是否IE的Edge浏览器
    var isFF = userAgent.indexOf("Firefox") > -1; //判断是否Firefox浏览器
    var isSafari = userAgent.indexOf("Safari") > -1 && userAgent.indexOf("Chrome") == -1; //判断是否Safari浏览器
    var isChrome = userAgent.indexOf("Chrome") > -1 && userAgent.indexOf("Safari") > -1; //判断Chrome浏览器
    if (isIE) {
        var reIE = new RegExp("MSIE (\\d+\\.\\d+);");
        reIE.test(userAgent);
        var fIEVersion = parseFloat(RegExp["$1"]);
        if(fIEVersion == 7) return "IE7"
        else if(fIEVersion == 8) return "IE8";
        else if(fIEVersion == 9) return "IE9";
        else if(fIEVersion == 10) return "IE10";
        else if(fIEVersion == 11) return "IE11";
        else return "IE7以下"//IE版本过低
    }

    if (isFF) return "FF"; // 火狐浏览器
    if (isOpera) return "Opera"; // 欧朋浏览器
    if (isEdge) return "Edge"; // Edege浏览器（win10自带浏览器）
    if (isSafari) return "Safari"; // 苹果浏览器
    if (isChrome) return "Chrome"; // 谷歌浏览器
};
