<!DOCTYPE html>

<!-- New changes start -->

<%@ page contentType="text/html;charset=UTF-8" language="java" session="false" %>
<%@include file="/common/taglibs.jsp" %>

<tiles:insertDefinition name="defaultTemplate">
	<tiles:putAttribute name="body">

<html lang="en">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
  	<title> <fmt:message key="brand.title.createBrand" /> </title>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    
	<script type="text/javascript" src="${contextPath}/resources/js/libs/includejs.js"></script>
	<!-- <script type="text/javascript">
		loadBrandJS();
	</script> -->
    
   

</head>

<body>

    
    
	      	
	      	<div class="span12">      		
	      		
	      		<div class="widget ">
	      			
	      			<div class="widget-header">
	      				<i class="icon-user"></i>
	      				<h3> <fmt:message key="brand.title.createBrand" />  <span id="page-title"></span> </h3>
	  				</div> <!-- /widget-header -->
					
					<div class="widget-content">
						<br>
						
							
							
							
								
								<form method="post" action="#" id="_brandForm" class="form-horizontal">
								
								
									<input type="hidden" name="id" id="_brandId"> 
									
								
									<fieldset>
										
										<div class="control-group">											
											<label class="control-label" for="brandname">Brand Name</label>
											<div class="controls">
												<input type="text" class="span6" name="name" id="_brandNameTxt"  placeholder="<fmt:message key="brand.placeholder.enterBrandName" />"  data-validate="required(<fmt:message key="product.validation.client.require.name" />)">
											</div> <!-- /controls -->				
										</div> <!-- /control-group -->
										
										
										
										<div class="control-group">											
											<label class="control-label">Active Status</label>
                                            
                                            <div class="controls">
                                            <label class="radio inline">
                                              <input type="radio" name="active" value="true" checked="checked"> <fmt:message key="global.label.active" />
                                            </label>
                                            
                                            <label class="radio inline">
                                              <input type="radio" name="active" value="false"> <fmt:message key="global.label.inactive" />
                                            </label>
                                          </div>	<!-- /controls -->			
										</div> <!-- /control-group -->
										
										
										
                                        <div class="control-group">											
											<label class="control-label">Own brand</label>
                                            <div class="controls">
                                            <label class="checkbox inline">
                                              <input type="checkbox" name="ownBrand" value="false"> <fmt:message key="brand.label.ownBrand" />
                                            </label>
                                          </div>		<!-- /controls -->		
										</div> <!-- /control-group -->
                                        
                                        
										 <br>
										
											
										<div class="form-actions">
											<button type="button" class="btn btn-primary" id="_saveBrandBtn" > <fmt:message key="global.label.save" /> </button> 
											<button class="btn"> <fmt:message key="global.label.cancel" /> </button>
										</div> <!-- /form-actions -->
									</fieldset>
								</form>
								
						
					</div> <!-- /widget-content -->
						
				</div> <!-- /widget -->
	      		
		    </div> <!-- /span8 -->
	      	

</body></html>
</tiles:putAttribute>
</tiles:insertDefinition>