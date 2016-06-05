<!DOCTYPE html>
<!-- saved from url=(0068)file:///C:/Users/AKSH/Desktop/Example%20CSS/1/test%20validation.html -->
<html lang="en"><head><meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
  	<title> Smart Forms - Form validation </title>
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
    
    <!-- <script type="text/javascript">
    
    
    $(function() {
		
				/* @custom validation method (smartCaptcha) 
				------------------------------------------------------------------ */
					
				$.validator.methods.smartCaptcha = function(value, element, param) {
						return value == param;
				};
						
				$( "#smart-form" ).validate({
					
					
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
		
		});				
    
    </script> -->
    
    
       

</head>

<body class="woodbg">

	<div class="smart-wrap">
    	<div class="smart-forms smart-container wrap-2">
        
        	<div class="form-header header-primary">
            	<h4><i class="fa fa-pencil-square"></i>Form validation</h4>
            </div><!-- end .form-header section -->
            
            <form method="post" action="http://doptiq.com/" id="smart-form" novalidate="novalidate">
            	<div class="form-body">
                
                    <div class="spacer-b30">
                    	<div class="tagline"><span> Normal validation rules </span></div><!-- .tagline -->
                    </div>
                    
                    <div class="frm-row">
                        <div class="section colm colm6">
                            <label for="firstname" class="field prepend-icon">
                                <input type="text" name="firstname" id="firstname" class="gui-input" placeholder="First name...">
                                <label for="firstname" class="field-icon"><i class="fa fa-user"></i></label>  
                            </label>
                        </div><!-- end section -->
                        
                        <div class="section colm colm6">
                            <label for="lastname" class="field prepend-icon">
                                <input type="text" name="lastname" id="lastname" class="gui-input" placeholder="Last name...">
                                <label for="lastname" class="field-icon"><i class="fa fa-user"></i></label>  
                            </label>
                        </div><!-- end section -->
                    </div><!-- end .frm-row section -->                                    
                
                	<div class="section">
                    	<label for="useremail" class="field prepend-icon">
                        	<input type="email" name="useremail" id="useremail" class="gui-input" placeholder="Email address">
                            <label for="useremail" class="field-icon"><i class="fa fa-envelope"></i></label>  
                        </label>
                    </div><!-- end section -->
                    
                	
                    
                    
                    
                    
                                        
                 	             
                    
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



<div>

	
		<title>sdsfdfsdfssfsdfsdfsdfsdfsdfsdfsdfsdfsd</title>
		
		<style type="text/css">
			
			/* DAP Download BAR */
			div#DDB_DAPBar {width: 100%;height: 0px;border-top: 1px solid #d6d6d6;background-color: #d6d6d6;position: absolute;left: 0px;bottom: 0;z-index: 250000;text-align: left; color: #000000; visibility: hidden; font-family: 'Segoe UI'; direction: ltr; line-height: 15px;}
			
			div#DDB_DAPBar_control{position: absolute; right: 13px; top: 0px; margin-top: 14px;}
			div#DDB_DAPBar_close{float:left; position: relative;z-index: 250001;width: 10px; height: 10px; margin: 1px 0px 0px 19px;}
			div#DDB_DAPBar_close:hover{background-position: bottom !important;}
			div#DDB_DAPBar .DDB_dwlbtnwrap{height: 50px;width: 257px; font-size: 15px; position: relative; float: left; margin: 16px 0px 0px 50px;}
			div#DDB_DAPBar .DDB_dwlbtnwrap .dwlbtn{text-align: center; height: 50px;text-shadow: 0px -1px 0px #003716; font-weight: bold;background-color: #00a600;
				background: -moz-linear-gradient(#00d004, #005600); 
				background: -webkit-gradient(linear,left top,left bottom,color-stop(0, #00d004),color-stop(1, #005600));
				filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#00d004', endColorstr='#005600',GradientType=0 );border: 1px solid #106b18;
				background-image: -o-linear-gradient(rgb(0,208,4),rgb(0,86,0));
			}
			div#DDB_DAPBar .DDB_dwlbtnwrap .dwlbtn a{text-decoration: none; color: #ffffff !important;display: block; padding-top: 14px; height: 36px; font-size: 22px;}
			div#DDB_DAPBar .DDB_dwlbtnwrap .mask{overflow: hidden;}
			div#DDB_DAPBar .DDB_dwlbtnwrap .roundedCorners{border-radius: 6px;-moz-border-radius: 6px;-webkit-border-radius: 6px;}
			div#DDB_DAPBar .DDB_dwlbtnwrap .dwlbtn:hover {background-color: #00d004;text-shadow: 0px -1px 0px #003716;border: 1px solid #106b18;
				background: -moz-linear-gradient(#005600, #00d004);
				background: -webkit-gradient(linear,left top,left bottom,color-stop(0, #005600),color-stop(1, #00d004));
				filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#005600', endColorstr='#00d004',GradientType=0 );
				background-image: -o-linear-gradient(rgb(0,86,0),rgb(0,208,4));
			}
			div#DDB_DAPBar .DDB_dwlbtnwrap .gradient{filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#005600', endColorstr='#00d004',GradientType=0 ); /* IE6-9*/ }
			div#DDB_DAPBar .clearall{ clear: both; line-height: 0px; height: 0px; font-size: 0px;}
			div#DDB_DAPBar .ddbinst{font-size: 18px; padding-top: 10px; float: left; width: 640px;}
			div#DDB_DAPBar .ddbinst a{text-decoration: none; color :#000000;}
			div#DDB_DAPBar .ddb_dapinstall{float: left; padding-top: 10px;}
			div#DDB_DAPBar .ddbInstallWrap{line-height: 20px; margin: 0px auto; width: 950px;}
			div#DDB_DAPBar .ddbInstallWrap img{float: left; margin-right: 10px; border: 0px;width: 65px; height: 65px;}
			
			#DDB_DAPBarLogo {background: url(data:image/png;base64,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) no-repeat 0 0;float: left;width: 65px; height: 65px;}
		</style>
	
	
		<div id="DDB_DAPBar">
			<div id="DDB_DAPBar_list"></div>
			<div id="DDB_DAPBar_control"></div>
		</div>
		<!--<div id="DDB_DAPBar" style="visibility: visible; height: 82px;">
			<div id="DDB_DAPBar_list"><div class="ddbInstallWrap"><div class="ddbinst"><div class="ddb_dapinstall"><strong>DAP Extenstion:</strong><br>To accelerate your downloads, install Download Accelerator Plus (DAP)</div><div class="clearall"></div></div><div class="DDB_dwlbtnwrap" title="Download Accelerator Plus (DAP) Free - Download button"><div class="mask roundedCorners"><div class="roundedCorners dwlbtn"><a href="http://download.speedbit.com/mag/dap10_gws_setup.exe">DOWNLOAD DAP</a></div></div></div><div class="clearall"></div></div></div>
			<div id="DDB_DAPBar_control"><img src="http://www.speedbit.com/img/dapchrome/ddb-close.png" style="width: 65px; height: 65px;" alt="Close" /></div>
		</div>-->
	
</div>


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