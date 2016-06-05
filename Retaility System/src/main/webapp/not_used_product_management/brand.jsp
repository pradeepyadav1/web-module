<!DOCTYPE html>
<!-- saved from url=(0068)file:///C:/Users/AKSH/Desktop/Example%20CSS/1/test%20validation.html -->


<%@include file="/common/taglibs.jsp" %>

<html lang="en"><head><meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
  	<title> <fmt:message key="brand.title.createBrand" /> </title>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    
	 <link rel="stylesheet" type="text/css" href="${contextPath}/resources/css/smart-forms.css">
    <link rel="stylesheet" type="text/css" href="${contextPath}/resources/css/font-awesome.min.css">
    
    
	<script type="text/javascript" src="${contextPath}/resources/js/libs/jquery-1.9.1.min.js"></script>
    <script type="text/javascript" src="${contextPath}/resources/js/libs/jquery.validate.js"></script>
    <script type="text/javascript" src="${contextPath}/resources/js/libs/additional-methods.js"></script>
    <script type="text/javascript" src="${contextPath}/resources/js/utility/validation.default.settings.js"></script>
    <script type="text/javascript" src="${contextPath}/resources/js/libs/jquery.loadJSON.js"></script>
	<script type="text/javascript" src="${contextPath}/resources/js/utility/requestprocessor.js"></script>
	<script type="text/javascript" src="${contextPath}/resources/js/brand/brand.js"></script>
    
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
            	<h4><i class="fa fa-pencil-square"></i> <fmt:message key="brand.title.createBrand" /> </h4>
            </div><!-- end .form-header section -->
            
            <form method="post" action="" id="_brandForm" novalidate="novalidate">
            	<div class="form-body">
                
                <input type="hidden" name="id" id="_brandId">    
                    
					<div class="section">
                    	<label for="brandName" class="field prepend-icon">
                                <input type="text" name="name" id="_brandNameTxt"  class="gui-input" placeholder="<fmt:message key="brand.placeholder.enterBrandName" />">
                                <label for="brandNameIcon" class="field-icon"><i class="fa fa-user"></i></label>  
                            </label>
                    </div><!-- end section -->
					
					
                     
					
					<div class="section colm colm6 pad-r40 bdr">
                            <div class="option-group field">
                                <label for="active" class="option">
                                    <input type="radio" name="active" value="true" checked="checked">
                                    <span class="radio"></span> <fmt:message key="global.label.active" />
                                </label>
                                
                                <label for="inactive" class="option ">
                                    <input type="radio" name="active" value="false">
                                    <span class="radio"></span> <fmt:message key="global.label.inactive" />               
                                </label>                            
                            </div>
                        </div>
                        <!-- end .section section -->  
						
						
						
						<div class="section colm colm6 pad-l40">
                            <div class="option-group field">
                            
                                <label class="option block">
                                    <input type="checkbox" name="ownBrand" value="false">
                                    <span class="checkbox"></span> <fmt:message key="brand.label.ownBrand" />           
                                </label>                                                                                        
                                
                            </div>                        
                        </div><!-- end section -->
                    
                 	             
                    
                </div><!-- end .form-body section -->
                <div class="form-footer">
                	<button type="button" class="button btn-primary" id="_saveBrandBtn"> <fmt:message key="global.label.save" />  </button>
                    <button type="reset" class="button"> <fmt:message key="global.label.cancel" /> </button>
                </div><!-- end .form-footer section -->
            </form>
            
        </div><!-- end .smart-forms section -->
    </div><!-- end .smart-wrap section -->
    
    <div></div><!-- end section -->


</body></html>