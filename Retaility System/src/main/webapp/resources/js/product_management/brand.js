var container = new Object();
container.remoteUrl = "http://localhost:8080/testserviceproject/service/api/v1/brands/exist/name";
container.oldBrandName = "";

function initPage(){
	$().createAlias("_brandId","brandId");
	$().createAlias("_brandNameTxt","brandName");
	$().createAlias("_saveBrandBtn","saveButton");
	
	$().initializeContainer(container);
}



$.verify.addRules({
    validateBrand:  {
    	extend: 'nameExsist',
        requestUrl : getContextPath()+'/service/api/v1/brands/exist/name'+'?access_token='+getAccessToken(),
        requestPayload : {name: function () {
    		if(container.oldBrandName.trim() === $( container.brandName ).val().trim()){
    			return "xxxxxxxxXXXXXXXXNNNNXXXXXXMMMMMXXXXXXPPPPPxxxxxxxGGGGGGGXXXXXX";
    		}else{
    			return $( container.brandName ).val();
    		}
	    }
},
        successHandler : function(data, status, req,r){ 
        	r.callback(req.responsetext);
        					//r.callback(true);
        				}, 
    	 errorHandler : function(req, status, error,r){
			    		 	r.callback("cbvcvcvbcbv");
			    		 }
    }
  });

function buildRemoteValidationeRequestData(){
	return {
	    	name: function () {
	    		if(container.oldBrandName.trim() === $( container.brandName ).val().trim()){
	    			return "xxxxxxxxXXXXXXXXNNNNXXXXXXMMMMMXXXXXXPPPPPxxxxxxxGGGGGGGXXXXXX";
	    		}else{
	    			return $( container.brandName ).val();
	    		}
		    }
	    };
}

											

$(document).ready(function() {
	initPage();
	var form = $('#_brandForm');
	container.form = form;
	$(container.saveButton).click(function() {
		form.validate(function(result){
			if (result) {
				createOrUpdateBrand();
			}
		});
	});
	
	// below single line code is added for testing 
	$(container.brandId).val("5");
	
	if( $(container.brandId).val()){
		loadBrandDetails();
	}
	
});



function createOrUpdateBrand(){
	var request = new Object();
	
	request.url = REST_SERVICE_URL.BRANDS;
	request.type = REQUEST_METHOD_TYPE.POST;
	request.formId = '#_brandForm';
	
	callServer(request);
}

function loadBrandDetails(){
	var request = new Object();

	request.url = REST_SERVICE_URL.BRANDS + $(container.brandId).val();
	request.type = REQUEST_METHOD_TYPE.GET;
	request.successHandler = function(data, status, req) {
		// fill form with response data
		$(container.form).loadJSON(JSON.parse(req.responseText));
		container.oldBrandName = container.brandName.value;
	};

	callServer(request);
}