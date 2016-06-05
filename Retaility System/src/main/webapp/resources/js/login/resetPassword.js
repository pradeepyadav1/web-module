
var INVALID_APP_ID = "INVALID_APPLICATION_ID";

/**
 * Send reset password request to server.
 */
function sendResetPasswordRequest(){
	if(getCookie("locale") === ""){
		location.href = 'home.jsp?resourceAppId=' + applicationId;
    	return ;
	}
	if(validateInputField()){
		$('#progbarId').show();
		/*
 	    * Used for Disable the button and coming from utility.js
 	    */
		disableButton("reset_pwd");
		apiLoginSessionTimeOut = getCookie("loginSessionTimeoutMs");
		var URL = uri + "private/user/resetPassword";
		var request = new Object();
		request.userId =  resetPasswordUserId;
		request.applicationId = applicationId;
		request.locale =  getCookie("locale");
		request.newPassword = $('#re_new_pwd').val();
		
		var resetPasswordApiTimeout = apiTimeOut["USER_RESET_PWD"];
		var startTime = new Date().getTime();
		
		$.ajax({
					url : URL,
					type : 'POST',
					contentType : 'application/json; charset=utf-8',
					// request data
					data : JSON.stringify(request),
					// request data type
					dataType : 'json',
					timeout:resetPasswordApiTimeout,
					cache: false,
					success : function(data, status, req) {
					    $('#progbarId').css("display", "none");
					    /*
				 	    * Used for enable the button and coming from utility.js
				 	    */
						enableButton("reset_pwd");
						resetPasswordSuccessResponse(JSON.parse(req.responseText));
					},
						
					error : function(req, status, error) {
					    $('#progbarId').css("display", "none");
					    /*
					 	 * Used for enable the button and coming from utility.js
					 	*/
						enableButton("reset_pwd");
						// Handling the Error response.
						handleError(req,startTime);
						resetPasswordErrorResponse(JSON.parse(req.responseText));
						resetPasswordSuccessResponse(JSON.parse(req.responseText));
					},
					// set user basic authentication data into request header
					beforeSend : setHeader
	
				});
		}
}

/**
 * Show reset password Success Response
 * @param jsonResponse
 */
function resetPasswordSuccessResponse(jsonResponse){
	alert(resetPwdMsg);
	$("#LogingetPwd").hide();
	$("#securityQuestionArea").hide();
	$("#forcedPwd").hide();
	$("#login_txt").val("");
	$("#password_txt").val("");
	$('#new_pwd').val("");
	$('#re_new_pwd').val("");
	
}

/**
 * handle error response of reset password Web service API
 * 
 * @param errorResponse
 */
function resetPasswordErrorResponse(errorResponse){
	var USER_RESET_PWD_USER_MISMATCH = "USER_RESET_PWD_USER_MISMATCH";
	var USER_RESET_PWD_INVALID_PWD = "USER_RESET_PWD_INVALID_PWD";
	var USER_RESET_PWD_NOT_TEMP = "USER_RESET_PWD_NOT_TEMP";
	
	if (errorResponse.errorCode === USER_RESET_PWD_USER_MISMATCH) {
		showErrorMessageforreset(errorResponse.errorMessage);
    }else if(errorResponse.errorCode === USER_RESET_PWD_INVALID_PWD){
    	showErrorMessageforreset(errorResponse.errorMessage);
    }else if(errorResponse.errorCode === USER_RESET_PWD_NOT_TEMP){
    	showErrorMessageforreset(errorResponse.errorMessage);
    	
    }else if (responseJsonObj.errorCode === INVALID_APP_ID) {
        alert(responseJsonObj.errorMessage + "\n\n" +
        		missingparamMsg);
    }
}

/**
 * Display Resset password Error message on JSP
 * @param errorMessage
 */
function  showErrorMessageforreset(errorMessage){
	$("#wrong_resetpwd").text(errorMessage);
	$("#wrong_resetpwd").show();
}

/**
 * Validate the password and re-enter password fields. 
 * 
 * @returns {Boolean}
 */
function validateInputField() {
	var element1 = $('#new_pwd').val();
	var element2 = $('#re_new_pwd').val();

	if (element1 == '') {
		alert(newPwdMsg);
		$('#new_pwd').focus();
		/*
	 	 * Used for enable the button and coming from utility.js
	 	*/
		enableButton("reset_pwd");
	} else if (element2 == '') {
		alert(rePwdMsg);
		$('#re_new_pwd').focus();
		/*
	 	 * Used for enable the button and coming from utility.js
	 	*/
		enableButton("reset_pwd");
	} else if (element1 != element2) {
		alert(validateNewPwdMsg);
		/*
	 	 * Used for enable the button and coming from utility.js
	 	*/
		enableButton("reset_pwd");
		$('#new_pwd').val("");
		$('#re_new_pwd').val("");

		$('#new_pwd').focus();
		return false;
	} else {
		return true;
	}
}