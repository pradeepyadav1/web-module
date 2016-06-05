

function getNewAccessToken(){
	
}


var apiTimeOut = new Object();
storeApiTimeOut(responseJsonObj);
getCookie("loginSessionTimeoutMs");
var str = navigator.userAgent;
var userAgent = (str.substring(0, 50));

function storeApiTimeOut(responseJsonObj) {
    for (var index = 0; index < responseJsonObj.apiTimeouts.length; index++) {
        var name = responseJsonObj.apiTimeouts[index].name;
        var connectionTimeoutMs = responseJsonObj.apiTimeouts[index].connectionTimeoutMs;

        apiTimeOut[name] = connectionTimeoutMs;
    }
    setCookie("apiTimeOuts", JSON.stringify(apiTimeOut));
}


/**
 * Genric method validate property values against specified regular expression.
 * 
 * @param regEx
 * @param feildValue
 * @param errorFeildId
 * @param event
 * @returns {Boolean}
 */
function profileGenricValidator( regEx, feildValue, errorFeildId, event) {
	if (regEx.test(feildValue)) {
		$('#' + errorFeildId).hide();
		return true;
	}
	if (null != event && undefined != event) {
		event.preventDefault();
	}else{
		resetApiMessageToPropertyFileMsg();
		$('#' + errorFeildId).show();
	}
	return false;
}



// login success
	// store (access token and refresh token into cookies)
// send request using access token
	// if access token error in response
	// send request for new token using refresh token
		// if success 
			// store (access token and refresh token into cookies) 
			//send old request using new 
		// if error
			// redirect to login page



-----------------------------------



$.extend($.expr[':'],{
    submitable: function(a){
        if($(a).is(':checkbox:not(:checked)'))
        {
            return false;
        }
        else if($(a).is(':input'))
        {
            return true;
        }
        else
        {
            return false;
        }
    }
});

$('#form_id :submitable');

---------

(function($, window, document) {

	$.fn.initalizeContaner = function(){}
	
})(jQuery, window, document);

------------

$.fn.initalizeContaner = function(){}




function initializeFormFields(){
	$('form:eq(0)').find('input').each(
	    function(unusedIndex, field) {
	    	/*container[field.name] = new Object();
	    	container[field.name].name = field.name;
	    	container[field.name].id = field.id;
	    	container[field.name].idWithHash = "#"+field.id;
	    	container[field.name].type = field.type;
	    	container[field.name].value = function(){
	    									return $("#username").val();
	    									};*/
	    	container[field.name] = field;
	    	container[field.name].idWithHash = "#"+field.id;
	    });
};


function initializeFormFields(){
	$('form:eq(0)').find('input, select, button').each(
	    function(unusedIndex, field) {
	    	container[field.name] = field;
	    	container[field.name].idWithHash = "#"+field.id;
	    });
};




