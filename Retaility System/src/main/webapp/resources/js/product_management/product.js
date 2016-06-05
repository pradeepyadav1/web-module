var container = new Object();
container.remoteUrl = "http://localhost:8080/testserviceproject/service/api/v1/products/exist/name";
container.oldProductName = "";

function initPage(){
	$().createAlias("_brandSelectBox","selectBrand");
	$().createAlias("_productCategorySelectBox","selectProductCategory");
	$().createAlias("_saveProductBtn","saveButton");
	$().createAlias("_productId","productId");
	$().createAlias("_productNameTxt","productName");
	
	$().createAlias("_errorMsg_NameRequired","msgRquiredName");
	$().createAlias("_errorMsg_NameExist","msgNameExist");
	$().createAlias("_errorMsg_BrandRequired","msgRquiredBrand");
	$().createAlias("_errorMsg_ProductCategoryRequired","msgRquiredProductCategory");
	
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



$(document).ready(function() {
	
	initPage();
	var form = $().addValidation(getValidationDetails());
	
	$(container.selectBrand).change(function() {
		var selectedOptionValue = $(this).val();
		var option = $(this).find('option:selected').val();
		fechProductCategoriesForSelectedBrand(selectedOptionValue);
	});
			
			
	$(container.saveButton).click(function() {
		if (form.valid()) {
			createOrUpdateProduct();
		}
	});

			
	Chain()(
			function(res, chain){
		        log("A",res); 
		        getBrands(res, chain); 
		    },
		    function(res, chain) {
		        log("B", res); 
		        findProductById(res, chain);
		    },
		    function(res, chain) {
		        console.log("C", res); 
		        fechProductCategoriesByBrand(res, chain);
		    }
		);

});


function createOrUpdateProduct() {

	var request = new Object();

	request.url = REST_SERVICE_URL.PRODUCTS;
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
			$(container.selectBrand).populateSelectbox(responseJsonObj);
			if(chain)
				chain.next(req);
		};
		
		callServer(request);
}


function findProductById(res, chain) {
	// hard coded product id for testing
	var productId = 1;
	var request = new Object();

	request.url = REST_SERVICE_URL.PRODUCTS + productId;
	request.type = REQUEST_METHOD_TYPE.GET;
	request.successHandler = function(data, status, req) {
		if(chain)
			chain.next(req);
	};

	callServer(request);
}

function fechProductCategoriesByBrand(res, chain) {
	 var responseData = JSON.parse(res.responseText);
	 fechProductCategoriesForSelectedBrand(responseData.brand, res, chain);
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
		
		if(res){
			$(container.formId).loadJSON(JSON.parse(res.responseText));
			container.oldProductName = container.productName.value;
		}
		
		if(chain)
			chain.next();
		
	};

	callServer(request);
}


/*$.when(
$.ajax({
    url: 'http://localhost:8080/testserviceproject/service/api/v1/products',
    success: function(data) {
        alert('request 1 complete')
        alert(data);
    }
}),
$.ajax({
    url: 'http://localhost:8080/testserviceproject/service/api/v1/brands',
    success: function(data) {
        alert('request 2 complete')
    }
})
).then(function(template){
alert("template "+template);
});*/