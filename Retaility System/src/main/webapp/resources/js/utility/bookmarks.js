/* Bookmarks
---------------------------------------------------------------- */
var oldPaymentReceiptRequest;
var oldPaymentReceiptCartItems;
var billerHistoryArray = new Array();


var bookmarks = function(){
	return {
		sethash:function(hash,functions){
			window.location.href = hash;
			if(null != functions){
				functions(arguments);
			}
		}
	};
}();


$(window).on('hashchange', function() {
//	alert(window.location.hash);
	if("#history" == window.location.hash){
		loadPaymentHistoryTable(false);
	}else if("#searchBiller" == window.location.hash){
		loadFindBill(true);
	}else if("#paymentConfirmation" == window.location.hash){
//		handleVerify();
		removeHomeScreenArea();
		$('#paymentConfirmInner').css('display', 'block');
	}else if("#home" == window.location.hash){
		loadHomeScreenArea();
	}else if("#paymentRecipt" == window.location.hash){
//		loadPaymentReceiptTable(oldPaymentReceiptCartItems,'#pay_list_section #childDiv',oldPaymentReceiptRequest);
		removeHomeScreenArea();
		$('#paymentReceiptInner').css('display', 'block');
	}else if("#addBiller" == window.location.hash){
		removeHomeScreenArea();
		$("#addEditBillerInner").show();
	}else if("#billerHistory" == window.location.hash){
		/*var element = billerHistoryArray.pop();
		loadPaymentHistoryTable(true, element);*/
		removeHomeScreenArea();
		$('#paymentHistoryInner').css('display', 'block');
	}else if("#locator" == window.location.hash){
		loadLocatorMap();
	}else if("#profile" == window.location.hash){
		removeHomeScreenArea();
		$("#editProfileContainer").css('display', 'block');
	}
	
});

$(window).on('load', function() {
    
    if( window.location.hash === ""){
          window.location.href = "#home";
    }else if("#searchBiller" == window.location.hash){
    //	$("#billerSearchInner").show();
    	
          loadFindBill(false);
    }
    
});
