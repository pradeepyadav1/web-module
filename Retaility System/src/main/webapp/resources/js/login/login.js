
var loginContainer = new Object();

function initPage(){
	$().createAlias("usernameTxt","username");
	$().createAlias("passwordHashTxt","password");
	$().createAlias("loginBtn","loginButton");
	
	$().initializeContainer(loginContainer);
}


// start for ajax call name already exist or not

/*$.verify.addRules({
    myAjax: function(r) {
      //Give the user some feedback (uses the Prompt Handler)
      r.prompt(r.field, "checking name exsistance...", "black");
      //Simulate delay
      setTimeout(function() {
    	  
    			$.ajax({
    				url : getContextPath()+'/oauth/token?grant_type=password&client_id=my-trusted-client&username=pradeep&password=passwprd1',
    				type : "GET",
    				contentType : 'application/json; charset=utf-8',
    				dataType : 'json',
    				async:   true,
    				cache : false,
    				success : function(data, status, req) {
    					//r.callback(req.responseText);
    					if(true){
    						r.callback(true);
    					}
    				},
    				error : function(req, status, error) {
    					r.callback("error in request processing");
    				},
    			});
          
      }, 2000);
    }
  });*/

// end ajax call








$.verify.addRules({
    myAjax:  {
    	extend: 'nameExsist',
        requestUrl : getContextPath()+'/oauth/token?grant_type=password&client_id=my-trusted-client&username=pradeep&password=a8b83517fef0f11c0885c3412ba37e0847379effa8d3edd90d1adf43e748c753',
        successHandler : function(data, status, req,r){ 
        					r.callback(true);
        				}, 
    	 errorHandler : function(req, status, error,r){
			    		 	r.callback("cbvcvcvbcbv");
			    		 }
    }
  });









$(document).ready(function() {
	initPage();
	
	$(loginContainer.loginButton).click(function() {
		loginContainer.form.validate(function(result){
			if (result) {
				login();
			}
		});
	});
	
	
});




function login(){

	var username = loginContainer.username.value;
	var password = $(loginContainer.password).sha256();
	
		$.ajax({
			url : getContextPath()+'/oauth/token?grant_type=password&client_id=my-trusted-client&username='+username+'&password='+password,
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
				
				redirectToHome();
			},
			error : function(req, status, error) {
				// Error Handling.
				log("***** error ******");
				log("\n request : [ "+req+" ] \n status : [ "+status+" ] \n error : [ "+error+" ] \n ");
			},
		});

}