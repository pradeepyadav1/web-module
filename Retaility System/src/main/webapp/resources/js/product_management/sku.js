var container = new Object();
container.remoteUrl = "http://localhost:8080/testserviceproject/service/api/v1/products/exist/name";
container.oldProductName = "";

function initPage(){
	$().createAlias("_brandSelectBox","selectBrand");
	$().createAlias("_productCategorySelectBox","selectProductCategory");
	$().createAlias("_productSelectBox","selectProduct");
	$().createAlias("_saveSkuBtn","saveButton");
	$().createAlias("_skuId","skuId");
	$().createAlias("_skuNameTxt","skuName");
	
	$().createAlias("_errorMsg_NameRequired","msgRquiredName");
	$().createAlias("_errorMsg_NameExist","msgNameExist");
	$().createAlias("_errorMsg_BrandRequired","msgRquiredBrand");
	$().createAlias("_errorMsg_ProductCategoryRequired","msgRquiredProductCategory");
	$().createAlias("_errorMsg_ProductRequired","msgRquiredProduct");
	
	$().initializeContainer(container);
}


function getValidationDetails(){
	
	var remote = new RemoteBuilder().url(container.remoteUrl)
	.errorMessage(container.msgNameExist.value)
	.data(buildRemoteValidationeRequestData())
	.build();
	
	var validationDetails = new ValidationHelper();
	validationDetails.addProperty(container.productName.name, container.msgRquiredName.value).addRemote(remote);
	validationDetails.addProperty(container.selectBrand.name, container.msgRquiredBrand.value);
	validationDetails.addProperty(container.selectProductCategory.name, container.msgRquiredProductCategory.value);
	validationDetails.addProperty(container.selectProduct.name, container.msgRquiredProduct.value);
	
	return validationDetails;
}

function buildRemoteValidationeRequestData(){
	return {
	    	name: function () {
	    		if(container.oldProductName.trim() === $( container.productName ).val().trim()){
	    			return "xxxxxxxxXXXXXXXXNNNNXXXXXXMMMMMXXXXXXPPPPPxxxxxxxGGGGGGGXXXXXX";
	    		}else{
	    			return $( container.productName ).val();
	    		}
		    }
	    };
}


$(document).ready(
		function() {

			initPage();
			
			$(container.selectBrand).change(function() {
				var selectedOptionValue = $(this).val();
				fechProductCategoriesForSelectedBrand(selectedOptionValue);
			});
			
			$(container.selectProductCategory).change(function() {
				var selectedOptionValue = $(this).val();
				fechProductForSelectedProductCategory(selectedOptionValue);
			});
			
			
			$(container.saveButton).click(function() {
				//if (form.valid()) {
					createOrUpdateSku();
				//}
			});

			// find sku by product id.
			//findSkuById(8);
			
			//start
			Chain()(
					function(res, chain){
				        log("Request 1",res); 
				        getBrands(res, chain); 
				    },
				    function(res, chain) {
				        log("request 2 find sku by skuId", res); 
				        //findSkuById(res, chain);
				    }
				);

		});

function createOrUpdateSku() {

	var request = new Object();

	request.url = REST_SERVICE_URL.SKUS;
	request.type = REQUEST_METHOD_TYPE.POST;
	request.formId = container.formId;

	callServer(request);
}

function getBrands(res, chain){
	
	var request = new Object();
		
	request.url = REST_SERVICE_URL.BRANDS;
	request.type = REQUEST_METHOD_TYPE.GET;
	request.successHandler = function(data, status, req){
			var responseJsonObj = JSON.parse(req.responseText);
			//alert(JSON.stringify(container))
			$(container.selectBrand).populateSelectbox(responseJsonObj);
			if(chain)
				chain.next(req);
		};
		
		callServer(request);
}



function findSkuById(selectedSkuId) {
	// hard coded product id for testing
	var skuId = 1;
	var request = new Object();
	
	request.url = REST_SERVICE_URL.SKUS + productId;
	request.type = REQUEST_METHOD_TYPE.GET;
	request.successHandler = function(data, status, req) {
		if(chain)
			chain.next(req);
	};
	
	callServer(request);
}


function fechProductCategoriesForSelectedBrand(brandId, res, chain) {
	
	var requestData = new Object();
	requestData.brand = brandId;
	requestData.active = true;

	var request = new Object();
	request.url = REST_SERVICE_URL.PRODUCT_CATEGORIES + REST_SERVICE_URL.QUERY_PRODUCT_CATEGORIES;
	request.type = REQUEST_METHOD_TYPE.POST;
	request.requestData = requestData;
	request.showProgressBar = false;
	request.successHandler = function(data, status, req) {
		var responseJsonObj = JSON.parse(req.responseText);
		$(container.selectProductCategory).populateSelectbox(responseJsonObj);
		
		/*if(res){
			$(container.formId).loadJSON(JSON.parse(res.responseText));
			container.oldProductName = container.productName.value;
		}
		
		if(chain)
			chain.next();*/
		
	};

	callServer(request);
}


function fechProductForSelectedProductCategory(selectedProductCategory, res, chain) {
	
	var requestData = new Object();
	requestData.productCategory = selectedProductCategory;
	requestData.active = true;

	var request = new Object();
	request.url = "/v1/products/query/";
	request.type = REQUEST_METHOD_TYPE.POST;
	request.requestData = requestData;
	request.showProgressBar = false;
	request.successHandler = function(data, status, req) {
		var responseJsonObj = JSON.parse(req.responseText);
		$(container.selectProduct).populateSelectbox(responseJsonObj);
		
		/*if(res){
			$(container.formId).loadJSON(JSON.parse(res.responseText));
			container.oldProductName = container.productName.value;
		}
		
		if(chain)
			chain.next();*/
		
	};

	callServer(request);
}