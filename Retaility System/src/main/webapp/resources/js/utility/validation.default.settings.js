var validationSetting = {
		debug: true,
			submitHandler : function(form) {
											  alert("called submit handler");
										    // $(form).ajaxSubmit();
										  },
			errorClass: "state-error",
			validClass: "state-success",
			errorElement: "em",
			highlight: function(element, errorClass, validClass) {
							$(element).closest('.field').addClass(errorClass).removeClass(validClass);
						},
			unhighlight: function(element, errorClass, validClass) {
							$(element).closest('.field').removeClass(errorClass).addClass(validClass);
						},
			errorPlacement: function(error, element) {
							if (element.is(":radio") || element.is(":checkbox")) {
								element.closest('.option-group').after(error);
							} else {
								error.insertAfter(element.parent());
							}
						},
			rules:{},
			messages:{}
};


function ValidationHelper(){
	this.rulesContainer = new Object();
	this.messagesContainer = new Object();
	
	this.currentProperty = null;
	
	this.addProperty = function(propertyName, message){
		
		this.rulesContainer[propertyName] = {
			required: true,
		};
	
		this.messagesContainer[propertyName] = {
			required: message,
		};
		
		this.currentProperty = propertyName;
		
		return this;
	}
	
	this.addRemote = function(remoteConfigObject){
		this.rulesContainer[this.currentProperty].remote = remoteConfigObject; 
		this.messagesContainer[this.currentProperty].remote = remoteConfigObject.errorMessage;
		return this;
	}
	
	
	this.configureValidation = function(){
		validationSetting.rules = this.rulesContainer;
		validationSetting.messages = this.messagesContainer;
		return validationSetting;
	}
}



var RemoteBuilder = function() {
	  var url = "";
	  var type = "GET";
	  var data = null;
	  var errorMessage = "Please fix this field. Server reject value of this field."
	   
	  return {
	      url : function(requestUrl) {
	        url = requestUrl;
	        return this;
	      },
	      data : function(dataObject) {
	    	  data = dataObject; 
	        return this;
	      },
	      methodType : function(requestMethod) {
	    	  type = requestMethod; 
	        return this;
	      },
	      errorMessage : function(message) {
	    	  errorMessage = message; 
	        return this;
	      },
	      build : function() {
	    	  var remoteObj = new Object();
	    	  remoteObj.url = url;
	    	  remoteObj.type = type;
	    	  remoteObj.data = data;
	    	  remoteObj.errorMessage = errorMessage;
	        return remoteObj;
	      }
	  };
	};


//What we're going to decorate
/*
 function MacBook() {
    this.cost = function () { return 997; };
    this.screenSize = function () { return 13.3; };
}
Decorator 1
function Memory(macbook) {
    var v = macbook.cost();
    macbook.cost = function() {
        return v + 75;
    }
}
 Decorator 2
function Engraving( macbook ){
   var v = macbook.cost();
   macbook.cost = function(){
     return  v + 200;
  };
}
Decorator 3
function Insurance( macbook ){
   var v = macbook.cost();
   macbook.cost = function(){
     return  v + 250;
  };
}
var mb = new MacBook();
Memory(mb);
Engraving(mb);
Insurance(mb);
console.log(mb.cost()); //1522
console.log(mb.screenSize()); //13.3
*/
//////////////////////////////////////////////////////


			
			