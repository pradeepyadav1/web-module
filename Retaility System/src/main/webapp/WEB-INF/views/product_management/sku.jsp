<%@ page contentType="text/html;charset=UTF-8" language="java" session="false" %>
<%@include file="/common/taglibs.jsp" %>

<tiles:insertDefinition name="defaultTemplate">
	<tiles:putAttribute name="body">

<!DOCTYPE html>
<html lang="en"><head><meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
  	<title> Add/Edit SKU </title>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    
    <link rel="stylesheet" type="text/css" href="resources/css/smart-forms.css">
    <link rel="stylesheet" type="text/css" href="resources/css/font-awesome.min.css">
    
    
	<script type="text/javascript" src="${contextPath}/resources/js/libs/includejs.js"></script>
	<script type="text/javascript">
	loadSkuJS();
	</script>
    
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
            	<h4><i class="fa fa-pencil-square"></i> <fmt:message key="sku.title.createSku" /> </h4>
            </div><!-- end .form-header section -->
            
            <form method="post" action="" id="_skuForm" novalidate="novalidate">
            	<div class="form-body">
                
                	<input type="hidden" name="id" id="_skuId">
                
                	<!-- enter SKU name -->
					<div class="section">
                    	<label for="brandName" class="field prepend-icon">
                                <input type="text" name="name" id="_skuNameTxt" class="gui-input" placeholder="<fmt:message key="product.placeholder.enterProductName" />">
                                <label for="brandNameIcon" class="field-icon"><i class="fa fa-user"></i></label>  
                            </label>
                    </div><!-- end section -->
					
					
					<!-- select brand -->
					<div class="section">
                        <label class="field select">
                            <select  name="brand" id="_brandSelectBox">
                                <option value=""> <fmt:message key="label.selectBrand" /> </option>
                            </select>
                            <i class="arrow double"></i>                    
                        </label>  
                    </div>
					
					
					<!-- select product category -->
					<div class="section">
                        <label class="field select">
                            <select name="productCategory" id="_productCategorySelectBox">
                                <option value=""> <fmt:message key="label.selectProductCategory" /> </option>
                            </select>
                            <i class="arrow double"></i>                    
                        </label>  
                    </div>
                     
					 
					 <!-- select product -->
					<div class="section">
                        <label class="field select">
                            <select name="product" id="_productSelectBox">
                                <option value=""> <fmt:message key="label.selectProduct" /> </option>
                            </select>
                            <i class="arrow double"></i>                    
                        </label>  
                    </div>
					
					
					<!-- Active/InActive status -->
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
                	<button type="button" class="button btn-primary" id="_saveSkuBtn"> <fmt:message key="global.label.save" /> </button>
                    <button type="reset" class="button"> <fmt:message key="global.label.cancel" /> </button>
                </div><!-- end .form-footer section -->
            </form>
            
        </div><!-- end .smart-forms section -->
    </div><!-- end .smart-wrap section -->
    
    <div></div><!-- end section -->

	<input type="hidden" id="_errorMsg_NameRequired" value="<fmt:message key="product.validation.client.require.name" />" >
    <input type="hidden" id="_errorMsg_NameExist" value="<fmt:message key="product.validation.client.remote.name" />" >
    <input type="hidden" id="_errorMsg_BrandRequired" value="<fmt:message key="product.validation.client.require.brand" />" >
    <input type="hidden" id="_errorMsg_ProductCategoryRequired" value="<fmt:message key="product.validation.client.require.productCategory" />" >
    <input type="hidden" id="_errorMsg_ProductRequired" value="<fmt:message key="product.validation.client.require.product" />" >


</body></html>
</tiles:putAttribute>
</tiles:insertDefinition>