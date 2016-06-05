<!DOCTYPE html>
<!-- saved from url=(0068)file:///C:/Users/AKSH/Desktop/Example%20CSS/1/test%20validation.html -->
<html lang="en"><head><meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
  	<title> Add/Edit SKU </title>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    
    <link rel="stylesheet" type="text/css" href="resources/css/smart-forms.css">
    <link rel="stylesheet" type="text/css" href="resources/css/font-awesome.min.css">
    
    
	<script type="text/javascript" src="resources/js/libs/jquery-1.9.1.min.js"></script>
    <script type="text/javascript" src="resources/js/libs/jquery.validate.js"></script>
    <script type="text/javascript" src="resources/js/libs/additional-methods.js"></script>
    
    <!--[if lte IE 9]>   
        <script type="text/javascript" src="js/jquery.placeholder.min.js"></script>
    <![endif]-->    
    
    <!--[if lte IE 8]>
        <link type="text/css" rel="stylesheet" href="css/smart-forms-ie8.css">
    <![endif]-->
    
    
    
       

</head>

<body class="woodbg">

	<div class="smart-wrap">
    	<div class="smart-forms smart-container wrap-2">
        
        	<div class="form-header header-primary">
            	<h4><i class="fa fa-pencil-square"></i> Add / Edit SKU </h4>
            </div><!-- end .form-header section -->
            
            <form method="post" action="" id="_brandForm" novalidate="novalidate">
            	<div class="form-body">
                
                    
                    
					<div class="section">
                    	<label for="brandName" class="field prepend-icon">
                                <input type="text" name="" id="" class="gui-input" placeholder="Enter sku name...">
                                <label for="brandNameIcon" class="field-icon"><i class="fa fa-user"></i></label>  
                            </label>
                    </div><!-- end section -->
					
					
					<div class="section">
                        <label class="field select">
                            <select id="language" name="language">
                                <option value="">Select brand...</option>
                                <option value="EN">English</option>
                                <option value="FR">French</option>
                                <option value="SP">Spanish</option>
                                <option value="CH">Chinese</option>
                                <option value="JP">Japanese</option>
                            </select>
                            <i class="arrow double"></i>                    
                        </label>  
                    </div>
					
					
					<div class="section">
                        <label class="field select">
                            <select id="language" name="language">
                                <option value="">Select product category...</option>
                                <option value="EN">English</option>
                                <option value="FR">French</option>
                                <option value="SP">Spanish</option>
                                <option value="CH">Chinese</option>
                                <option value="JP">Japanese</option>
                            </select>
                            <i class="arrow double"></i>                    
                        </label>  
                    </div>
                     
					 
					 <div class="section">
                        <label class="field select">
                            <select id="language" name="language">
                                <option value="">Select product...</option>
                                <option value="EN">English</option>
                                <option value="FR">French</option>
                                <option value="SP">Spanish</option>
                                <option value="CH">Chinese</option>
                                <option value="JP">Japanese</option>
                            </select>
                            <i class="arrow double"></i>                    
                        </label>  
                    </div>
					
					<div class="section colm colm6 pad-r40 bdr">
                            <div class="option-group field">
                                <label for="female" class="option">
                                    <input type="radio" name="gender" id="female" value="female">
                                    <span class="radio"></span> Active
                                </label>
                                
                                <label for="male" class="option ">
                                    <input type="radio" name="gender" id="male" value="male">
                                    <span class="radio"></span> In Active                  
                                </label>                            
                                
                                
                                
                            </div>
                                                
                        </div><!-- end .section section -->  
						
						
						
                    
					
                    
                    
                    
                                        
                 	             
                    
                </div><!-- end .form-body section -->
                <div class="form-footer">
                	<button type="submit" class="button btn-primary"> Validate Form </button>
                    <button type="reset" class="button"> Cancel </button>
                    <button type="button" class="button btn-primary" id="testFormSubmitBtn"> pradeep button to submit Form </button>
                </div><!-- end .form-footer section -->
            </form>
            
        </div><!-- end .smart-forms section -->
    </div><!-- end .smart-wrap section -->
    
    <div></div><!-- end section -->

<script type="text/javascript">
    
    
    jQuery.validator.setDefaults({
    	  debug: true,
    	  success: "valid"
    	});
    	var form = $( "#smart-form" );
    	form.validate({
			
			
			submitHandler: function(form) {
				alert("called submit handler");
			   // $(form).ajaxSubmit();
			  },
			  
			  ignore: ".ignore"  /* default: ":hidden" */,
			  
			  invalidHandler: function(event, validator) {
				    // 'this' refers to the form
				    var errors = validator.numberOfInvalids();
				    if (errors) {
				      var message = errors == 1
				        ? 'You missed 1 field. It has been highlighted'
				        : 'You missed ' + errors + ' fields. They have been highlighted';
				      //$("div.error span").html(message);
				      //$("div.error").show();
				      alert(message);
				    } else {
				      //$("div.error").hide();
				    }
				  },
		
				/* @validation states + elements 
				------------------------------------------- */
				
				errorClass: "state-error",
				validClass: "state-success",
				errorElement: "em",
				
				/* @validation rules 
				------------------------------------------ */
					
				rules: {
						firstname: {
								required: true
						},
						lastname: {
								required: true
						},					
						useremail: {
								required: true,
								email: true
						},
						website: {
								required: true,
								url: true
						},								
						language: {
								required: true
						},								
						upload1:  {
								required: true,
								extension:"jpg|png|gif|jpeg|doc|docx|pdf|xls|rar|zip"
						},
						mobileos:  {
								required: true
						},
						comment:  {
								required: true,
								minlength: 30
						},
						mobile_phone: {
								require_from_group: [1, ".phone-group"]
						},
						home_phone: {
								require_from_group: [1, ".phone-group"]
						},											
						password:{
								required: true,
								minlength: 6,
								maxlength: 16						
						},
						repeatPassword:{
								required: true,
								minlength: 6,
								maxlength: 16,						
								equalTo: '#password'
						},
						gender:{
								required: true
						},
						languages:{
								required: true
						},			
						verification:{
								required:true,
								smartCaptcha:19	
						},
						applicant_age: {
								required: true,
								min: 16
						},
						licence_no: {
								required: function(element) {
										return $("#applicant_age").val() > 19;
								}
						},
						child_name: {
								required: "#parents:checked"
						}																							
					
				},
				
				/* @validation error messages 
				---------------------------------------------- */
					
				messages:{
						firstname: {
								required: 'Enter first name'
						},
						lastname: {
								required: 'Enter last name'
						},					
						useremail: {
								required: 'Enter email address',
								email: 'Enter a VALID email address'
						},
						website: {
								required: 'Enter your website URL',
								url: 'URL should start with - http://www'
						},														
						language: {
								required: 'Choose a language'
						},						
						upload1:  {
								required: 'Please browse a file',
								extension: 'File format not supported'
						},
						mobileos:  {
								required: 'Please select a mobile platform'
						},								
						comment:  {
								required: 'Oops you forgot to comment',
								minlength: 'Enter at least 30 characters or more'
						},
						mobile_phone: {
								require_from_group: 'Fill at least a mobile contact'
						},
						home_phone: {
								require_from_group: 'Fill at least a home contact'
						},																				
						password:{
								required: 'Please enter a password'
						},
						repeatPassword:{
								required: 'Please repeat the above password',
								equalTo: 'Password mismatch detected'
						},
						gender:{
								required: 'Please choose specie'
						},
						languages:{
								required: 'Select laguages spoken'
						},																		
						verification:{
								required: 'Please enter verification code',
								smartCaptcha: 'Oops - enter a correct verification code'
						},
						applicant_age: {
								required: 'Enter applicant age',
								min: 'Must be 16 years and above'
						},
						licence_no: {
								required: 'Enter licence number'
						},
						child_name: {
								required: 'Please enter your childs name'
						}																			
				 
				},

				/* @validation highlighting + error placement  
				---------------------------------------------------- */	
				
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
				}
						
		});
    	$( "#testFormSubmitBtn" ).click(function() {
    	  alert( "Valid: " + form.valid() );
    	});
    	
   </script>



</body></html>