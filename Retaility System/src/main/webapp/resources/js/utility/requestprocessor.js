
var showLog = true;

$.fn.serializeObject = function() {
    var o = {};
    //    var a = this.serializeArray();
    $(this).find('input[type="hidden"], input[type="text"], input[type="password"], input[type="checkbox"], input[type="radio"]:checked, select').each(function() {
        if ($(this).attr('type') == 'hidden') { //if checkbox is checked do not take the hidden field
            var $parent = $(this).parent();
            var $chb = $parent.find('input[type="checkbox"][name="' + this.name.replace(/\[/g, '\[').replace(/\]/g, '\]') + '"]');
            if ($chb != null) {
                if ($chb.prop('checked')) return;
            }
        }
        if (this.name === null || this.name === undefined || this.name === '')
            return;
        var elemValue = null;
        if ($(this).is('select'))
            elemValue = $(this).find('option:selected').val();
        else if($(this).is(':checkbox')) {
        	elemValue = $(this).is(":checked") ? "true" : "false";
        }else elemValue = this.value;
        if (o[this.name] !== undefined) {
            if (!o[this.name].push) {
                o[this.name] = [o[this.name]];
            }
            o[this.name].push(elemValue.trim() || '');
        } else {
            o[this.name] = elemValue.trim() || '';
        }
    });
    return o;
}




var REQUEST_METHOD_TYPE = {
		  POST : "POST", 
		  GET: "GET", 
		  DELETE: "DELETE", 
		  PUT : "PUT"
		};

if (Object.freeze)
	  Object.freeze(REQUEST_METHOD_TYPE);



var REST_SERVICE_URL = {
		  BRANDS: "/v1/brands/", 
		  PRODUCT_CATEGORIES : "/v1/productcategories/",
		  PRODUCTS : "/v1/products/",
		  SKUS: "/v1/skus/",
		  QUERY_PRODUCT_CATEGORIES: "/query/"
		};

if (Object.freeze)
	  Object.freeze(REST_SERVICE_URL);



var BRAND_VALIDATION_MSG = {
		  XXX_FIELD: "this is xxx field", 
		};

if (Object.freeze)
	  Object.freeze(BRAND_VALIDATION_MSG);



function convertFormToJson(formId){
	console.log(formId);
	var form = $('form'+formId);
	console.log(form);
	var jsonData = JSON.stringify(form.serializeObject());
	console.log(jsonData);
	return jsonData;
}


/*function fillSelectWithElements(jsObjectArray, selectBoxId, objectPropertyForValue, objectPropertyForLabel){
	$('#'+selectBoxId).empty();
	$.each(jsObjectArray, function (i, item) {
	    $('#'+selectBoxId).append($('<option>', { 
	        value: item[objectPropertyForValue],
	        text : item[objectPropertyForLabel] 
	    }));
	});
}*/





//helper fn for console logging
//set showLog to true to enable debug logging
function log() {
	if (showLog) {
		var msg = '[info : ] ' + Array.prototype.join.call(arguments,'');
		if (window.console && window.console.log) {
			window.console.log(msg);
		}
		else if (window.opera && window.opera.postError) {
			window.opera.postError(msg);
		}
	}
};


// NEED TO TEST FIRST 

$.fn.populateSelectbox = function (jsObjectArray, options) {
	
	var defaultConfig = true;
	if(undefined == options){
		options = {
				initialText:false,
				empty:true,
				valuePropertyName:false,
				textPropertName:false
				
		}
	}
	
	
	if(!options.initialText)
		options.initialText ="-- select --";
	
	if(options.empty || defaultConfig)
		$(this).empty();
	
	if( (options.empty && options.addInitialText) || defaultConfig){
		$(this).append($('<option>', { 
	        value: '',
	        text : options.initialText 
	    }));
	}

	if(!options.valuePropertyName)
		options.valuePropertyName = "id";
	
	if(!options.textPropertName)
		options.textPropertName = "name";
	
	var $selectBox = $(this);
	
	$.each(jsObjectArray, function (i, item) {
		$selectBox.append($('<option>', { 
	        value: item[options.valuePropertyName],
	        text : item[options.textPropertName] 
	    }));
	});
};



function callServer(rquest){
	log( JSON.stringify(rquest) );
	
	if(rquest.showProcessingBar)
		$("#_progressBar").show();
	
	var requestPayload = {};
	if(rquest.formId){
		requestPayload = convertFormToJson(rquest.formId);
	}else if(rquest.requestData){
		requestPayload = JSON.stringify(rquest.requestData);
	}
	
	if(rquest.processAsync != undefined){
		
	}else{
		// if element is not present in request object
		rquest.processAsync = true;
	}

		$.ajax({
			url : getContextPath()+'/service/api'+rquest.url+'?access_token='+getAccessToken(),
			type : rquest.type,
			contentType : 'application/json; charset=utf-8',
			// request data
			data : requestPayload,
			// request data type
			dataType : 'json',
			async:   rquest.processAsync,
			cache : false,
			success : function(data, status, req) {
				log( req.responseText );
				if(rquest.showProcessingBar)
					$("#_progressBar").hide();
				if(rquest.successHandler)
					rquest.successHandler(data, status, req);
			},
			error : function(req, status, error) {
				// Error Handling.
				log("***** error ******");
				log("\n request : [ "+req+" ] \n status : [ "+status+" ] \n error : [ "+error+" ] \n ");
				if(rquest.showProcessingBar)
					$("#_progressBar").hide();
				
				var responseJsonObj = JSON.parse(req.responseText);
				if(responseJsonObj.error === 'invalid_token'){
					//send request to get access token
					requestNewAccessToken(rquest);
				}else if(rquest.errorHandler)
					rquest.errorHandler(req, status, error);
			},
		});
}



function requestNewAccessToken(failedRequest){

		$.ajax({
			url : getContextPath()+'/oauth/token?grant_type=refresh_token&client_id=my-trusted-client&refresh_token='+getRefreshToken(),
			type : "GET",
			contentType : 'application/json; charset=utf-8',
			dataType : 'json',
			async:   true,
			cache : false,
			success : function(data, status, req) {
				// store data into cookies and redirect to home page
				var responseJsonObj = JSON.parse(req.responseText);
				setCookie(COOKIE_NAME.ACCESS_TOKEN, responseJsonObj.access_token);
				setCookie(COOKIE_NAME.REFRESH_TOKEN, responseJsonObj.refresh_token);
				setCookie(COOKIE_NAME.EXPIRES_IN, responseJsonObj.expires_in);
				setCookie(COOKIE_NAME.EXPIRES_TIME, responseJsonObj.expires_in);
				// call failed request with new access token
				callServer(failedRequest);
			},
			error : function(req, status, error) {
				// Error Handling.
				log("***** error ******");
				log("\n request : [ "+req+" ] \n status : [ "+status+" ] \n error : [ "+error+" ] \n ");
				redirectToLogin();
			},
		});

}