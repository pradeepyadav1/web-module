var container = new Object();
container.remoteUrl = "http://localhost:8080/testserviceproject/service/api/v1/productcategories/exist/name";
container.oldProductCategoryName = "";

function initPage(){
	$().createAlias("_brandSelectBox","selectBrand");
	$().createAlias("_saveProductCategoryBtn","saveButton");
	$().createAlias("_productCategoryId","productCategoryId");
	$().createAlias("_productCategoryNameTxt","productCategoryName");
	$().createAlias("_errorMsg_productCategoryNameRequired","msgRquiredName");
	$().createAlias("_errorMsg_productCategoryNameExist","msgNameExist");
	$().createAlias("_errorMsg_brandRequired","msgRquiredBrand");
	
	$().initializeContainer(container);
}


function getValidationDetails(){
	var remote = new RemoteBuilder().url(container.remoteUrl)
	.errorMessage(container.msgNameExist.value)
	.data(buildRemoteValidationeRequestData())
	.build();
	
	var validationDetails = new ValidationHelper();
	validationDetails.addProperty(container.productCategoryName.name, container.msgRquiredName.value).addRemote(remote);
	validationDetails.addProperty(container.selectBrand.name, container.msgRquiredBrand.value);
	
	return validationDetails;
}

function buildRemoteValidationeRequestData(){
	return {
	    	name: function () {
	    		if(container.oldProductCategoryName.trim() === $( container.productCategoryName ).val().trim()){
	    			return "xxxxxxxxXXXXXXXXNNNNXXXXXXMMMMMXXXXXXPPPPPxxxxxxxGGGGGGGXXXXXX";
	    		}else{
	    			return $( container.productCategoryName ).val();
	    		}
		    }
	    };
}


$(document).ready(function() {
	
	initPage();
	var form = $().addValidation(getValidationDetails());
	$(container.saveButton).click(function() {
		if (form.valid()) {
			createOrUpdateProductCategory();
		}
	});
	
	getBrands();
});


function createOrUpdateProductCategory(){

	var request = new Object();
	
	request.url = REST_SERVICE_URL.PRODUCT_CATEGORIES;
	request.type = REQUEST_METHOD_TYPE.POST;
	request.formId = container.formId;
	
	callServer(request);
}


function getBrands(){
	
var request = new Object();
	
request.url = REST_SERVICE_URL.BRANDS;
request.type = REQUEST_METHOD_TYPE.GET;
request.successHandler = function(data, status, req){
		var responseJsonObj = JSON.parse(req.responseText);
		$(container.selectBrand).populateSelectbox(responseJsonObj);
		
		// below single line code is added for testing 
		$(container.productCategoryId).val("1");
		
		if( container.productCategoryId.value){
			loadProductCategoryDetails();
		}
		
	};
	
	callServer(request);
}


function loadProductCategoryDetails(){
var request = new Object();
	
request.url = REST_SERVICE_URL.PRODUCT_CATEGORIES + container.productCategoryId.value;
request.type = REQUEST_METHOD_TYPE.GET;
request.successHandler = function(data, status, req){
		$(container.formId).loadJSON(JSON.parse(req.responseText));
		container.oldProductCategoryName =  container.productCategoryName.value;
	};
	
	callServer(request);
}