var privateURL = "private";
var INVALID_APP_ID = "INVALID_APPLICATION_ID";

/**
 * Send request to specified URL
 * 
 * @param URL
 * @param requestData
 * @param apiTimeoutDuration
 * @param successResponseHandler
 * @param errorResponseHandler
 */
function sendRequestToServer(URL, requestData, apiTimeoutDuration, successResponseHandler, 
								errorResponseHandler) {
	var startTime = new Date().getTime();
	
	$.ajax({
				url : URL,
				type : 'POST',
				contentType : 'application/json; charset=utf-8',
				// request data
				data : JSON.stringify(requestData),
				// request data type
				dataType : 'json',
				timeout:apiTimeoutDuration,
				cache: false,
				success : function(data, status, req) {
				    $('#progbarId').css("display", "none");s
					//store information into cookies like session token
					
					// Fetching data from Response object and send to handler method.
					successResponseHandler(JSON.parse(req.responseText));
				},
				error : function(req, status, error) {
				    $('#progbarId').css("display", "none");
					// Handling the Error response.
					handleError(req,startTime);
					errorResponseHandler(JSON.parse(req.responseText));
				},
				// set user basic authentication data into request header
				beforeSend : function(){
					if(URL.indexOf(privateURL) != -1){
						return setHeader;
					}else{
						return null;
					}
			    }

			});
}

var userIdOfSecurQues="";
/**
 * Function Use for Getting the security question from the USER_SEC_QUES API.
 */
function getSecurityQues() {
	/*
 	 * Used for Disable the button and coming from utility.js
 	*/
	disableButton("access_ques");
	
	if(getCookie("locale") === ""){
		location.href = 'home.jsp?resourceAppId=' + applicationId;
    	return ;
	}
    if ($('#login_name').val() != 0) {
    	$('#progbarId').show();
    	apiLoginSessionTimeOut = getCookie("loginSessionTimeoutMs");
        var URL = uri + "public/user/securityQuestion";
        var request = new Object();
        request.username = $('#login_name').val();
        request.applicationId = applicationId;
        request.locale = getCookie("locale");
        var startTime = new Date().getTime();

        $.ajax({
			url : URL,
			type : 'POST',
			contentType : 'application/json; charset=utf-8',
			// request data
			data : JSON.stringify(request),
			// request data type
			dataType : 'json',
			timeout:apiTimeOut["USER_SEC_QUES"],
			cache: false,
			success : function(data, status, req) {
			    $('#progbarId').css("display", "none");
			    /*
			 	 * Used for enable the button and coming from utility.js
			 	*/
				enableButton("access_ques");
				
				var jsonResponseObj = JSON.parse(req.responseText);
				userIdOfSecurQues = jsonResponseObj.userId;
				
				//store information into cookies like session token
				
				// Fetching data from Response object and send to handler method.
				securityQuestionSuccessResponse(JSON.parse(req.responseText));
			},
			error : function(req, status, error) {
			    $('#progbarId').css("display", "none");
			    /*
			 	 * Used for enable the button and coming from utility.js
			 	*/
				enableButton("access_ques");
				// Handling the Error response.
				handleError(req,startTime);
				securityQuestionErrorResponse(JSON.parse(req.responseText));
			},
			// set user basic authentication data into request header

		});
        
        
//        sendRequestToServer(URL, request, securityQuestionApiTimeout, securityQuestionSuccessResponse,
//                            securityQuestionErrorResponse);
    } else {
        alert(provideusernameMsg);
        $('#login_name').focus();
        /*
	 	 * Used for enable the button and coming from utility.js
	 	*/
        enableButton("access_ques");
    }

}

/**
 * Handle the success response of USER_SEC_QUES API.
 * @param jsonResponse
 */
function securityQuestionSuccessResponse(jsonResponse) {

//	$("#LogingetPwd").hide();
    $("#wrong_username").text("");
    $("#securityAnswer").val("");
    $("#securityQuestionErrorMessage").text("");
    $("#securityQuestion").text(jsonResponse.securityQuestion);
    $("#securityQuestionArea").show();
}

/**
 * Handle the Error response of USER_SEC_QUES API.
 * @param jsonErrorResponse
 */
function securityQuestionErrorResponse(jsonErrorResponse) {
    $("#wrong_username").text(jsonErrorResponse.errorMessage);
    $("#wrong_username").show();
    $("#securityQuestionArea").hide();

}

/**
 * Call Send Temp Password API 
 */
function sendTempPasswordRequest(){
	$('#progbarId').show();
	var startTime = new Date().getTime();
	/*
 	 * Used for Disable the button and coming from utility.js
 	*/
	disableButton("sendSecurityAnswer");
	if(getCookie("locale") === ""){
		location.href = 'home.jsp?resourceAppId=' + applicationId;
    	return ;
	}
	apiLoginSessionTimeOut = getCookie("loginSessionTimeoutMs");
	var URL = uri + "public/user/sendNewTempPassword";
	var request = new Object();
	request.userId = userIdOfSecurQues;
	request.applicationId = applicationId;
	request.locale = getCookie("locale");
	request.securityAnswer = $("#securityAnswer").val();
	
	
	$.ajax({
		url : URL,
		type : 'POST',
		contentType : 'application/json; charset=utf-8',
		// request data
		data : JSON.stringify(request),
		// request data type
		dataType : 'json',
		timeout:apiTimeOut["USER_SEND_TEMP_PWD"],
		cache: false,
		success : function(data, status, req) {
		    $('#progbarId').css("display", "none");
		    /*
		 	 * Used for enable the button and coming from utility.js
		 	*/
			enableButton("sendSecurityAnswer");
			//store information into cookies like session token
			
			// Fetching data from Response object and send to handler method.
			tempPasswordSuccessResponse(JSON.parse(req.responseText));
		},
		error : function(req, status, error) {
		    $('#progbarId').css("display", "none");
		    /*
		 	 * Used for enable the button and coming from utility.js
		 	*/
			enableButton("sendSecurityAnswer");
			// Handling the Error response.
			handleError(req,startTime);
			tempPasswordErrorResponse(JSON.parse(req.responseText));
		},
		// set user basic authentication data into request header
		

	});
	
	/*sendRequestToServer(URL, request, tempPasswordApiTimeout, tempPasswordSuccessResponse, 
							tempPasswordErrorResponse);*/
	
}

/**
 * handle temp password Api success response
 * @param jsonResponse
 */
function tempPasswordSuccessResponse(jsonResponse){
//	alert(" Success :: "+jsonResponse);
	alert(tempPwdMsg);
	$("#LogingetPwd").hide();
	$("#securityQuestionArea").hide();
	$("#LoginErrorMsg").hide();
	$("#login_txt").val("");
	$("#password_txt").val("");
	 // location.href = 'home.jsp?resourceAppId=' + applicationId;
}

/**
 * handle error response of temp password Web service API
 * 
 * @param jsonResponse
 */
function tempPasswordErrorResponse(jsonResponse){
	
	var USER_SEND_TEMP_PWD_USER_NOT_FOUND = "USER_SEND_TEMP_PWD_USER_NOT_FOUND";
	var USER_SEND_TEMP_PWD_WRONG_SEC_ANSWER = "USER_SEND_TEMP_PWD_WRONG_SEC_ANSWER";
	var USER_SEND_TEMP_PWD_INVALID_PHONE = "USER_SEND_TEMP_PWD_INVALID_PHONE";
	var USER_SEND_TEMP_PWD_USER_LOCKED = "USER_SEND_TEMP_PWD_USER_LOCKED";
	
	if (jsonResponse.errorCode === USER_SEND_TEMP_PWD_USER_NOT_FOUND) {
		showErrorMessage(jsonResponse.errorMessage);
    }else if(jsonResponse.errorCode === USER_SEND_TEMP_PWD_WRONG_SEC_ANSWER){
    	showErrorMessage(jsonResponse.errorMessage);
    }else if(jsonResponse.errorCode === USER_SEND_TEMP_PWD_INVALID_PHONE){
    	showErrorMessage(jsonResponse.errorMessage);
    }else if(jsonResponse.errorCode === USER_SEND_TEMP_PWD_USER_LOCKED){
    	showErrorMessage(jsonResponse.errorMessage);
    } else if (responseJsonObj.errorCode === INVALID_APP_ID) {
        alert(responseJsonObj.errorMessage + "\n\n" +
        		missingparamMsg);
       
    } 
	
}

/**
 * Display temp password Error message on JSP
 * 
 * @param errorMessage
 */
function  showErrorMessage(errorMessage){
//	alert(errorMessage);
	$("#securityQuestionErrorMessage").text(errorMessage);
	$("#securityQuestionErrorMessage").show();
}