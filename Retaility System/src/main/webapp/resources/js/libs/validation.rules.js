
// start validation rules (validation.rules.js)
/* ===================================== *
 * validation.rules.js
 * ===================================== */
(function($) {

  if($.verify === undefined) {
    window.alert("Please include verify.js before each rule file");
    return;
  }

  $.verify.addFieldRules({
	  
	  email: {
	      regex: /^(([^<>()\[\]\\.,;:\s@\"]+(\.[^<>()\[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
	      message: "Invalid email address"
	    },
	    
     alphanumeric: {
        regex: /^[0-9A-Za-z]+$/,
        message: "Use digits and letters only"
      },
      
	 number: {
	      regex: /^\d+$/,
	      message: "Use digits only"
	   },
	   
	   /* This method logic need to be improve in configurable way*/
	   decimal: function(r) {
          var vStr = r.val(),
              places = r.args[0] ? parseInt(r.args[0], 10) : 2;

          if(!vStr.match(/^\d+(,\d{3})*(\.\d+)?$/))
            return r.args[1] || "Invalid decimal value";

          var v = parseFloat(vStr.replace(/[^\d\.]/g,'')),
              factor = Math.pow(10,places);

          v = (Math.round(v*factor)/factor);
          r.field.val(v);

          return true;
        },
        
	   
	   required: {

		      fn: function(r) {
		        return r.requiredField(r, r.field);
		      },

		      requiredField: function(r, field) {
		        var v = field.val();

		        switch (field.prop("type")) {
		          case "radio":
		          case "checkbox":
		            var name = field.attr("name");
		            var group = field.data('fieldGroup');

		            if(!group) {
		              group = r.form.find("input[name='" + name + "']");
		              field.data('fieldGroup', group);
		            }

		            if (group.is(":checked"))
		              break;
		            if (group.size() === 1)
		              return r.args[0] || r.messages.single;
		            else
		              return r.args[0] || r.messages.multiple;
		            break;

		          default:
		            if (! $.trim(v))
		              return r.args[0] || r.messages.all;
		            break;
		        }
		        return true;
		      },
		      messages: {
		        "all": "This field is required",
		        "multiple": "Please select an option",
		        "single": "This checkbox is required"
		      }
		    },
	   
	
		  regex: {
	        fn: function(r) {
	          var re;
	          try {
	            var str = r.args[0];
	            re = new RegExp(str);
	          } catch(error) {
	            r.warn("Invalid regex: " + str);
	            return true;
	          }

	          if(!r.val().match(re))
	            return r.args[1] || r.message;
	          return true;
	        },
	        message: "Invalid format"
	     },
		      
		      
      //an alias
      pattern: {
        extend: 'regex'
      },
	      
	      
	      
      min: function(r) {
          var v = r.val(), min = parseInt(r.args[0], 10);
          if(v.length < min)
            return r.args[1] || "Must be at least " + min + " characters";
          return true;
      },
	        
	      
      
    max: function(r) {
      var v = r.val(), max = parseInt(r.args[0], 10);
      if(v.length > max)
        return r.args[1] || "Must be at most " + max + " characters";
      return true;
    },

	        
    
        minVal: function(r) {
          var v = parseFloat(r.val().replace(/[^\d\.]/g,'')),
              suffix = r.args[1] || '',
              min = parseFloat(r.args[0]);
          if(v < min)
            return r.args[1] || "Must be greater than " + min + suffix;
          return true;
        },
        
        
        maxVal: function(r) {
          var v = parseFloat(r.val().replace(/[^\d\.]/g,'')),
              suffix = r.args[1] || '',
              max = parseFloat(r.args[0]);
          if(v > max)
            return r.args[1] || "Must be less than " + max + suffix;
          return true;
        },
        
        
        rangeVal: function(r) {
          var v = parseFloat(r.val().replace(/[^\d\.]/g,'')),
              prefix = r.args[2] || '',
              suffix = r.args[3] || '',
              min = parseFloat(r.args[0]),
              max = parseFloat(r.args[1]);
          if(v > max || v < min)
            return r.args[1] || "Must be between " + prefix + min + suffix + "\nand " + prefix + max + suffix;
          return true;
        },

        
        agreement: function(r){
          if(!r.field.is(":checked"))
            return r.args[0] || "You must agree to continue";
          return true;
        },
        
        
        nameExsist: {
        	
        	 requestUrl : "",
        	 successHandler : function(data, status, req,r){ r.callback(true);}, 
         	 errorHandler : function(req, status, error,r){ r.callback(true);}, 
         	 processingMessage  : "checking name exsistance...",
         	 requestPayload : {},
        	 requestContentType : "application/json; charset=utf-8",
        	 requestMethodType : "GET",
        	 requestDataType : "json",
        	 isAsync : true,
        	 isCache : false,
        	
        fn: function(r) {
			r.prompt(r.field, r.processingMessage, "black");
			setTimeout(function() {
      			$.ajax({
      				url : r.requestUrl,
      				type : r.requestMethodType,
      				contentType : r.requestContentType,
      				dataType : r.requestDataType,
      				async:   r.isAsync,
      				cache : r.isCache,
      				data : r.requestPayload,
      				success : function(data, status, req) {
      						r.successHandler(data, status, req,r);
      				},
      				error : function(req, status, error) {
      						r.errorHandler(req, status, error,r);
      				},
      			});
        }, 2000);
        }
          }
	   
  });

  

})(jQuery);
// end validation rules (validation.rules.js)






/*****************************************
**************** Field validation rules
******************************************/
 
    /* Regex validators
     * - at plugin load, 'regex' will be transformed into validator function 'fn' which uses 'message'
     */

    /*currency: {
      regex: /^\-?\$?\d{1,2}(,?\d{3})*(\.\d+)?$/,
      message: "Invalid monetary value"
    },
    
	emailLocalize: {
		fn:function(r){	  
			var re;
			try {
			  var regex = /^(([^<>()\[\]\\.,;:\s@\"]+(\.[^<>()\[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
			  re = new RegExp(regex);
			} catch(error) {
			  r.warn("Invalid regex: " + regex);
			  return true;
			}
        if(!r.val().match(re))
          return r.args[0] || r.message;
        return true;
		},
		message: "Invalid email address"
    },
    url: {
      regex: /^https?:\/\/[\-A-Za-z0-9+&@#\/%?=~_|!:,.;]*[\-A-Za-z0-9+&@#\/%=~_|]/,
      message: "Invalid URL"
    },
    street_number: {
      regex: /^\d+[A-Za-z]?(-\d+)?[A-Za-z]?$/,
      message: "Street Number only"
    },
    
    numberSpace: {
      regex: /^[\d\ ]+$/,
      message: "Use digits and spaces only"
    },
    postcode: {
      regex: /^\d{4}$/,
      message: "Invalid postcode"
    },
    date: {
      fn: function(r) {
        if($.verify.utils.parseDate(r.val()))
          return true;
        return r.message;
      },
      message: "Invalid date"
    },
        
    
    
    asyncTest: function(r) {

      r.prompt(r.field, "Please wait...");
      setTimeout(function() {
        r.callback();
      },2000);

    },
    
    
    phone: function(r) {
      r.val(r.val().replace(/\D/g,''));
      var v = r.val();
      if(!v.match(/^[\d\s]+$/))
        return "Use digits and spaces only";
      if(!v.match(/^0/))
        return "Number must start with 0";
      if(v.replace(/\s/g,"").length !== 10)
        return "Must be 10 digits long";
      return true;
    },
    
    size: function(r){
      var v = r.val(), exactOrLower = r.args[0], upper = r.args[1];
      if(exactOrLower !== undefined && upper === undefined) {
        var exact = parseInt(exactOrLower, 10);
        if(r.val().length !== exact)
          return  "Must be "+exact+" characters";
      } else if(exactOrLower !== undefined && upper !== undefined) {
        var lower = parseInt(exactOrLower, 10);
        upper = parseInt(upper, 10);
        if(v.length < lower || upper < v.length)
          return "Must be between "+lower+" and "+upper+" characters";
      } else {
        r.warn("size validator parameter error on field: " + r.field.attr('name'));
      }

      return true;
    },
    
    
    minAge: function(r){
      var age = parseInt(r.args[0],10);
      if(!age || isNaN(age)) {
        console.log("WARNING: Invalid Age Param: " + age);
        return true;
      }
      var currDate = new Date();
      var minDate = new Date();
      minDate.setFullYear(minDate.getFullYear() - age);
      var fieldDate = $.verify.utils.parseDate(r.val());

      if(fieldDate === "Invalid Date")
        return "Invalid Date";
      if(fieldDate > minDate)
        return "You must be at least " + age;
      return true;
    }
  */


/*****************************************
**************** Group validation rules
******************************************/
/*$.verify.addGroupRules({

  dateRange: function(r) {
    var start = r.field("start"),
        end = r.field("end");

    if(start.length === 0 || end.length === 0) {
      r.warn("Missing dateRange fields, skipping...");
      return true;
    }

    var startDate = $.verify.utils.parseDate(start.val());
    if(!startDate)
      return "Invalid Start Date";

    var endDate = $.verify.utils.parseDate(end.val());
    if(!endDate)
      return "Invalid End Date";

    if(startDate >= endDate)
      return "Start Date must come before End Date";

    return true;
  },

  requiredAll: {
    extend: 'required',
    fn: function(r) {

      var size = r.fields().length,
          message,
          passes = [], fails = [];

      r.fields().each(function(i, field) {
        message = r.requiredField(r, field);
        if(message === true)
          passes.push(field);
        else
          fails.push({ field: field, message:message });
      });

      if(passes.length > 0 && fails.length > 0) {
        $.each(fails, function(i, f) {
          r.prompt(f.field, f.message);
        });
        return false;
      }

      return true;
    }
  }

});*/