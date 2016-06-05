$.fn.serializeObject = function() {
    var o = {};
    //    var a = this.serializeArray();
    $(this).find('input[type="hidden"], input[type="text"], input[type="password"], input[type="checkbox"]:checked, input[type="radio"]:checked, select').each(function() {
        if ($(this).attr('type') == 'hidden') { //if checkbox is checked do not take the hidden field
            var $parent = $(this).parent();
            var $chb = $parent.find('input[type="checkbox"][name="' + this.name.replace(/\[/g, '\[').replace(/\]/g, '\]') + '"]');
            if ($chb != null) {
                if ($chb.prop('checked')) return;
            }
        }
        if (this.name === null || this.name === undefined || this.name === '')
            return;
        var elemValue = null;
        if ($(this).is('select'))
            elemValue = $(this).find('option:selected').val();
        else elemValue = this.value;
        if (o[this.name] !== undefined) {
            if (!o[this.name].push) {
                o[this.name] = [o[this.name]];
            }
            o[this.name].push(elemValue || '');
        } else {
            o[this.name] = elemValue || '';
        }
    });
    return o;
}



function convertFormToJson(formName){
	var form = $(document.formName);
	console.log(form);
	var jsonData = JSON.stringify(form.serializeObject());
	console.log(jsonData);
	return jsonData;
}


function fillFormWithJson(jsonData){
	//var jsonData = {"productName":"pradeep","fkProductCategoryId":"yadav","isActive":"is","createdDate":"a","createdBy":"good","updatedDate":"boy","updatedBy":"test this","productId":""}
	
	console.log(jsonData);
	$.each(jsonData, function(name, val){
	    var $el = $('[name="'+name+'"]'),
	        type = $el.attr('type');

	    switch(type){
	        case 'checkbox':
	            $el.attr('checked', 'checked');
	            break;
	        case 'radio':
	            $el.filter('[value="'+val+'"]').attr('checked', 'checked');
	            break;
	        default:
	            $el.val(val);
	    }
	});
}



/**
 * Resets the form data.  Causes all form elements to be reset to their original value.
 * Resets the form to its original state by invoking the form element's native DOM method.
 * 
 * example : $('#myFormId').resetForm();
 */
$.fn.resetForm = function() {
	return this.each(function() {
		// guard against an input with the name of 'reset'
		// note that IE reports the reset function as an 'object'
		if (typeof this.reset == 'function' || (typeof this.reset == 'object' && !this.reset.nodeType)) {
			this.reset();
		}
	});
};


/**
 * Clears the form data.  Takes the following actions on the form's input fields:
 *  - input text fields will have their 'value' property set to the empty string
 *  - select elements will have their 'selectedIndex' property set to -1
 *  - checkbox and radio inputs will have their 'checked' property set to false
 *  - inputs of type submit, button, reset, and hidden will *not* be effected
 *  - button elements will *not* be effected
 *  
 *  example : $('#myFormId').clearForm();
 */
$.fn.clearForm = function() {
	return this.each(function() {
		$('input,select,textarea', this).clearFields();
	});
};


/**
 * Clears the selected form elements.
 * 
 * example : $('#myFormId .specialFields').clearFields();
 */
$.fn.clearFields = $.fn.clearInputs = function() {
	return this.each(function() {
		var t = this.type, tag = this.tagName.toLowerCase();
		if (t == 'text' || t == 'password' || tag == 'textarea') {
			this.value = '';
		}
		else if (t == 'checkbox' || t == 'radio') {
			this.checked = false;
		}
		else if (tag == 'select') {
			this.selectedIndex = -1;
		}
	});
};



function triggerOnChangeEvent(elementId){
	$('#'+elementId).trigger('change');
}