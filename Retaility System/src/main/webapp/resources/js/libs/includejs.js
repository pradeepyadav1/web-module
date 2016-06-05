var required_JS_Array = new Array();
  pushFile("libs/jquery-1.7.2.min.js");
  pushFile("libs/bootstrap.js");
  /*pushFile("libs/jquery.validate.js");
  pushFile("libs/additional-methods.js");*/
  
  // new validation style file start
  pushFile("libs/notify.js");
  pushFile("libs/verify.js");
  pushFile("libs/validation.rules.js");
  // new validation style end
  
  pushFile("libs/jquery.loadJSON.js");
  pushFile("utility/utilities.js");
  //pushFile("utility/validation.default.settings.js");
  pushFile("utility/requestprocessor.js");
                	

function pushFile(fileUrl){
	var BASE_PATH = window.location.pathname.substring(0, window.location.pathname.indexOf("/",2)) + "/resources/js/";
	required_JS_Array.push(BASE_PATH + fileUrl);
}

function loadJSFiles(){
	required_JS_Array.forEach(function(src) {
		  var script = document.createElement('script');
		  script.src = src;
		  script.async = false;
		  document.head.appendChild(script);
		});
}

/***************** Page specific file loading methods ********************************************/


/**
 * Load login page java script files
 */
function loadLoginJS(){
	pushFile("libs/jquery.sha256.min.js");
	pushFile("login/login.js");
	loadJSFiles();
}


/**
 * Load brand page java script files
 */
function loadBrandJS(){
	pushFile("product_management/brand.js");
	loadJSFiles();
}

/**
 * Load product category page java script files
 */
function loadProductCategoryJS(){
	pushFile("product_management/product_category.js");
	loadJSFiles();
}

/**
 * Load product page java script files
 */
function loadProductJS(){
	pushFile("utility/Chain.js");
	pushFile("product_management/product.js");
	loadJSFiles();
}

/**
 * Load SKU page java script files
 */
function loadSkuJS(){
	pushFile("utility/Chain.js");
	pushFile("product_management/sku.js");
	loadJSFiles();
}