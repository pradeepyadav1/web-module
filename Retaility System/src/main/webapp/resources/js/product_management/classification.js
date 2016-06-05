var container = new Object();
container.remoteUrl = "http://localhost:8080/testserviceproject/service/api/v1/brands/exist/name";
container.oldBrandName = "";

function initPage(){
	$().createAlias("_brandId","brandId");
	$().createAlias("_brandNameTxt","brandName");
	$().createAlias("_saveBrandBtn","saveButton");
	$().createAlias("_errorMsg_brandNameRequired","msgRquiredBrandName");
	$().createAlias("_errorMsg_brandNameExist","msgNameExist");
	
	$().initializeContainer(container);
}


function getValidationDetails(){
	var remote = new RemoteBuilder().url(container.remoteUrl)
	.errorMessage(container.msgNameExist.value)
	.data(buildRemoteValidationeRequestData())
	.build();
	
	var validationDetails = new ValidationHelper();
	validationDetails.addProperty(container.brandName.name, container.msgRquiredBrandName.value).addRemote(remote);
	
	return validationDetails;
}

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
	var form = $().addValidation(getValidationDetails());
	$(container.saveButton).click(function() {
		if (form.valid()) {
			createOrUpdateBrand();
		}
	});
	
	// below single line code is added for testing 
	//$(container.brandId).val("5");
	
	if( $(container.brandId).val()){
		loadBrandDetails();
	}
	
});



function createOrUpdateBrand(){
	var request = new Object();
	
	request.url = REST_SERVICE_URL.BRANDS;
	request.type = REQUEST_METHOD_TYPE.POST;
	request.formId = container.formId;
	
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