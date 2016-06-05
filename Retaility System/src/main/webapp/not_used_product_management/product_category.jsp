<%@ page contentType="text/html;charset=UTF-8" language="java" session="false" %>
<%@include file="/common/taglibs.jsp" %>

<!DOCTYPE html>
<!-- saved from url=(0068)file:///C:/Users/AKSH/Desktop/Example%20CSS/1/test%20validation.html -->

<html lang="en"><head><meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
  	<title> <fmt:message key="productCategory.title.createProductCategory" /> </title>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    
    
    <link rel="stylesheet" type="text/css" href="${contextPath}/resources/css/smart-forms.css">
    <link rel="stylesheet" type="text/css" href="${contextPath}/resources/css/font-awesome.min.css">
    
    
	<script type="text/javascript" src="${contextPath}/resources/js/libs/jquery-1.9.1.min.js"></script>
    <script type="text/javascript" src="${contextPath}/resources/js/libs/jquery.validate.js"></script>
    <script type="text/javascript" src="${contextPath}/resources/js/libs/additional-methods.js"></script>
    <script type="text/javascript" src="${contextPath}/resources/js/libs/jquery.loadJSON.js"></script>
    <script type="text/javascript" src="${contextPath}/resources/js/utility/utilities.js"></script>
    <script type="text/javascript" src="${contextPath}/resources/js/utility/validation.default.settings.js"></script>
	<script type="text/javascript" src="${contextPath}/resources/js/utility/requestprocessor.js"></script>
	<script type="text/javascript" src="${contextPath}/resources/js/product_category/product_category.js"></script>
	
	
    
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
            	<h4><i class="fa fa-pencil-square"></i> <fmt:message key="productCategory.title.createProductCategory" /> </h4>
            </div><!-- end .form-header section -->
            
            <form method="post" action="" id="_productCategoryForm" novalidate="novalidate">
            	<div class="form-body">
                
                    <input type="hidden" name="id" id="_productCategoryId">
                    
					<div class="section">
                    	<label for="productCategoryName" class="field prepend-icon">
                                <input type="text" name="name" id="_productCategoryNameTxt" class="gui-input" placeholder="<fmt:message key="productCategory.placeholder.enterProductCategoryName" />">
                                <label for="productCategoryNameIcon" class="field-icon"><i class="fa fa-user"></i></label>  
                            </label>
                    </div><!-- end section -->
					
					
					<div class="section">
                        <label class="field select">
                            <select id="_brandSelectBox" name="brand">
                                <option value=""> <fmt:message key="label.selectBrand" /> </option>
                            </select>
                            <i class="arrow double"></i>                    
                        </label>  
                    </div>
					
                     
					
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
						
						
                    
                </div><!-- end .form-body section -->
                <div class="form-footer">
                	<button type="button" class="button btn-primary" id="_saveProductCategoryBtn"> <fmt:message key="global.label.save" /> </button>
                    <button type="reset" class="button"> <fmt:message key="global.label.cancel" /> </button>
                </div><!-- end .form-footer section -->
            </form>
            
        </div><!-- end .smart-forms section -->
    </div><!-- end .smart-wrap section -->
    
    <div></div><!-- end section -->

</body></html>