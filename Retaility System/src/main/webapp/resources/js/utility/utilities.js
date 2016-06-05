/* Development URL */
var uri = '/mobileApi/api/';
//var uri = 'https://tepartnerint.prenet.net/dev0/mobileApi/api/';
/* QA URL */
//var uri1 = 'https://temobileapp.precash.com:6443/mobileApi/api/';

/**
 *
 *  Base64 encode / decode
 */
var ERROR_CODE_401 = 401;
var ERROR_CODE_500 = 500;
var Base64 = {

    // private property
    _keyStr:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",

    // public method for encoding
    encode:function (input) {
        var output = "";
        var chr1, chr2, chr3, enc1, enc2, enc3, enc4;
        var i = 0;

        input = Base64._utf8_encode(input);

        while (i < input.length) {

            chr1 = input.charCodeAt(i++);
            chr2 = input.charCodeAt(i++);
            chr3 = input.charCodeAt(i++);

            enc1 = chr1 >> 2;
            enc2 = ((chr1 & 3) << 4) | (chr2 >> 4);
            enc3 = ((chr2 & 15) << 2) | (chr3 >> 6);
            enc4 = chr3 & 63;

            if (isNaN(chr2)) {
                enc3 = enc4 = 64;
            } else if (isNaN(chr3)) {
                enc4 = 64;
            }

            output = output +
                    this._keyStr.charAt(enc1) + this._keyStr.charAt(enc2) +
                    this._keyStr.charAt(enc3) + this._keyStr.charAt(enc4);

        }

        return output;
    },

    // public method for decoding
    decode:function (input) {
        var output = "";
        var chr1, chr2, chr3;
        var enc1, enc2, enc3, enc4;
        var i = 0;

        input = input.replace(/[^A-Za-z0-9\+\/\=]/g, "");

        while (i < input.length) {

            enc1 = this._keyStr.indexOf(input.charAt(i++));
            enc2 = this._keyStr.indexOf(input.charAt(i++));
            enc3 = this._keyStr.indexOf(input.charAt(i++));
            enc4 = this._keyStr.indexOf(input.charAt(i++));

            chr1 = (enc1 << 2) | (enc2 >> 4);
            chr2 = ((enc2 & 15) << 4) | (enc3 >> 2);
            chr3 = ((enc3 & 3) << 6) | enc4;

            output = output + String.fromCharCode(chr1);

            if (enc3 != 64) {
                output = output + String.fromCharCode(chr2);
            }
            if (enc4 != 64) {
                output = output + String.fromCharCode(chr3);
            }

        }

        output = Base64._utf8_decode(output);

        return output;

    },

    // private method for UTF-8 encoding
    _utf8_encode:function (string) {
        string = string.replace(/\r\n/g, "\n");
        var utftext = "";

        for (var n = 0; n < string.length; n++) {

            var c = string.charCodeAt(n);

            if (c < 128) {
                utftext += String.fromCharCode(c);
            }
            else if ((c > 127) && (c < 2048)) {
                utftext += String.fromCharCode((c >> 6) | 192);
                utftext += String.fromCharCode((c & 63) | 128);
            }
            else {
                utftext += String.fromCharCode((c >> 12) | 224);
                utftext += String.fromCharCode(((c >> 6) & 63) | 128);
                utftext += String.fromCharCode((c & 63) | 128);
            }

        }

        return utftext;
    },

    // private method for UTF-8 decoding
    _utf8_decode:function (utftext) {
        var string = "";
        var i = 0;
        var c = c1 = c2 = 0;

        while (i < utftext.length) {

            c = utftext.charCodeAt(i);

            if (c < 128) {
                string += String.fromCharCode(c);
                i++;
            }
            else if ((c > 191) && (c < 224)) {
                c2 = utftext.charCodeAt(i + 1);
                string += String.fromCharCode(((c & 31) << 6) | (c2 & 63));
                i += 2;
            }
            else {
                c2 = utftext.charCodeAt(i + 1);
                c3 = utftext.charCodeAt(i + 2);
                string += String.fromCharCode(((c & 15) << 12) | ((c2 & 63) << 6) | (c3 & 63));
                i += 3;
            }

        }

        return string;
    }
}


/**
 * used to set user basic authentication data(User name and Session Token) into
 * request header after convert into base 64 String
 *
 * @param xhr
 */
function setHeader(xhr) {
    var encodedData = Base64.encode(getCookie('userName') + ":" + getCookie('sessionToken'));
    xhr.setRequestHeader("Authorization", "Basic " + encodedData);
}


var COOKIE_NAME = {
		ACCESS_TOKEN : "access_token", 
		REFRESH_TOKEN: "refresh_token", 
		EXPIRES_IN: "expires_in", 
		EXPIRES_TIME : "expires_time"
		};

if (Object.freeze)
	  Object.freeze(COOKIE_NAME);


/**
 * Set the variable into cookie.
 * @param c_name
 * @param value
 * @param exdays
 */
function setCookie(c_name, value, exdays) {
    var exdate = new Date();
    exdate.setDate(exdate.getDate() + exdays);
    var c_value = encodeURI(value)
            + ((exdays == null) ? "" : "; expires=" + exdate.toUTCString());
    var path = "; path=/";
    document.cookie = c_name + "=" + c_value + path;
}

/**
 * Get the variable from the cookie.
 * @param c_name
 */
function getCookie(c_name) {
    var i, x, y, ARRcookies = document.cookie.split(";");
    for (i = 0; i < ARRcookies.length; i++) {
        x = ARRcookies[i].substr(0, ARRcookies[i].indexOf("="));
        y = ARRcookies[i].substr(ARRcookies[i].indexOf("=") + 1);
        x = x.replace(/^\s+|\s+$/g, "");
        if (x == c_name) {
            return decodeURI(y);
        }
    }
    return '';
}

/**
 * Delete the all cookies when user clicks on SignOut button.
 */
function deleteAllCookies() {
	var cookies = document.cookie.split(";");
	for ( var i = 0; i < cookies.length; i++) {
		var cookie = cookies[i];
		var eqPos = cookie.indexOf("=");
	var name = (eqPos > -1 ? cookie.substr(0, eqPos) : cookie);
	var nameOfCookie = $.trim(name);              
  
	
		if (nameOfCookie != "locale" && nameOfCookie != "localeIndex") {
			document.cookie = nameOfCookie + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
		}
    
	}

	location.href = 'home.jsp?resourceAppId=' + applicationId;
}

/**
 * Open new window with the new url.
 * @param Url
 */
function openNewTabWindow(Url) {
    window.open(Url);
}

/**
 * To handle the server error.
 * @param request
 * @param startTime
 */
function handleError(request, startTime){
	
	if (request.status == ERROR_CODE_401) {
        location.href = 'index.jsp';
        $('#progbarId').css("display", "none");
        return;
    }
	else if (request.status == ERROR_CODE_500) {
		handleApplicationError(startTime);
        return;
    }
}

/**
 * To handle the application error.
 * @param startTime
 */

function handleApplicationError(startTime){
	$('#progbarId').show();
	var today = new Date();
	var endTime = today.getTime();
	var request = new Object();
	request.userId = getCookie('userId');
	request.errorMessage = request.status;
	request.exception = reqExceptionMsg;
	request.applicationId = applicationId;
	request.locale = getCookie("locale");
	request.url="";
	request.startUrlTime = startTime;
	request.endUrlTime = endTime;
	 
	$.ajax({
		url : uri + 'public/system/reportError',
		type : 'POST',
		contentType : 'application/json; charset=utf-8',
		// request data
		data : JSON.stringify(request),
		// request data type
		dataType : 'json',
		
		cache: false,
		success : function(data, status, req) {
			 $('#progbarId').css("display", "none");
			// alert('User Terms Success Response' + req.responseText);
			alert(apiErroMsg+req.responseText);
		},
	});
}


/***
 * Disable the button on clicked/enter  event. 
 * @param buttonId
 */
function disableButton(buttonId){
	$('#'+buttonId).attr("disabled", true);
}


/***
 * Enable the button on clicked/enter  event. 
 * @param buttonId
 */
function enableButton(buttonId){
	$('#'+buttonId).attr("disabled", false);
}


/***
 * Used for calculation the time zone of user.
 */
function calculate_time_zone() {
    var rightNow = new Date();
    var jan1 = new Date(rightNow.getFullYear(), 0, 1, 0, 0, 0, 0);  // jan 1st
    var june1 = new Date(rightNow.getFullYear(), 6, 1, 0, 0, 0, 0); // june 1st
    var temp = jan1.toGMTString();
    var jan2 = new Date(temp.substring(0, temp.lastIndexOf(" ") - 1));
    temp = june1.toGMTString();
    var june2 = new Date(temp.substring(0, temp.lastIndexOf(" ") - 1));
    var std_time_offset = (jan1 - jan2) / (1000 * 60 * 60);
    var daylight_time_offset = (june1 - june2) / (1000 * 60 * 60);
    var dst;
    if (std_time_offset == daylight_time_offset) {
        dst = "0"; // daylight savings time is NOT observed
    } else {
        // positive is southern, negative is northern hemisphere
        var hemisphere = std_time_offset - daylight_time_offset;
        if (hemisphere >= 0) {
            std_time_offset = daylight_time_offset;
        }
        dst = "1"; // daylight savings time is observed
    }
   return timeZone = "GMT"+(convert(std_time_offset));
}

/**
 * Used for calculation of time zone.
 * @param value
 * @returns {String}
 */
function convert(value) {
    var hours = parseInt(value);
    value -= parseInt(value);
    value *= 60;
    var mins = parseInt(value);
    value -= parseInt(value);
    value *= 60;
    var secs = parseInt(value);
    var display_hours = hours;
    // handle GMT case (00:00)
    if (hours == 0) {
        display_hours = "00";
    } else if (hours > 0) {
        // add a plus sign and perhaps an extra 0
        display_hours = (hours < 10) ? "+0" + hours : "+" + hours;
    } else {
        // add an extra 0 if needed
        display_hours = (hours > -10) ? "-0" + Math.abs(hours) : hours;
    }

    mins = (mins < 10) ? "0" + mins : mins;
    return display_hours+ mins;
}

/**
 * Function is used for checking the input value is numeric.
 * @param evt
 * @returns {Boolean}
 */
function isNumberKey(evt){
    var charCode = (evt.which) ? evt.which : event.keyCode
    if (charCode > 31 && (charCode < 48 || charCode > 57)){
    	return false;
    }
    return true;
}

function redirectToLogin(){
	location.href = getContextPath()+'/logout';
}


function redirectToPage(url){
	location.href = getContextPath()+url;
}

function redirectToHome(){
	location.href = getContextPath()+'/home';
}

function getAccessToken(){
	return getCookie(COOKIE_NAME.ACCESS_TOKEN);
}

function getRefreshToken(){
	return getCookie(COOKIE_NAME.REFRESH_TOKEN);
}

function getContextPath() {
	//return window.location.protocol + window.location.host + window.location.pathname.substring(0, window.location.pathname.indexOf("/",2));
	return window.location.pathname.substring(0, window.location.pathname.indexOf("/",2));
}


(function($, window, document) {
	
	var container = new Object();
	var aliasContainer = new Object();
	
	$.fn.createAlias = function(property, alias){
		aliasContainer[property] = alias;
	};

	$.fn.initializeContainer = function(customContainer){
		if(customContainer)
			container = customContainer;
		initializePageFields();
		container.form = $('form:eq(0)');
		container.formId = "#"+$('form:eq(0)').attr('id');
	};

	$.fn.container = function(){
		return container;
	};
	
	
	function initializePageFields(){
		$(document.body).find('input, select, button, textarea').each(
		    function(unusedIndex, field) {
		    	if(field.id){
		    		container[field.id] = field;
			    	container[field.id].idWithHash = "#"+field.id;
			    	if( aliasContainer.hasOwnProperty( field.id) ){
			    		container[ aliasContainer[field.id] ] = field;
			    	}
		    	}else if(field.name){
		    		container[field.name] = field;
			    	container[field.name].idWithHash = "#"+field.id;
			    	if( aliasContainer.hasOwnProperty( field.name) ){
			    		container[ aliasContainer[field.name] ] = field;
			    	}
		    	}
		    });
	};
	
})(jQuery, window, document);