<%@include file="/common/taglibs.jsp" %>

<div class="menu">
Menu
	<ul>
	    <li>
	    	<spring:url value="/home" var="homeUrl" htmlEscape="true"/>
 			<a href="${homeUrl}">Home</a>
 		</li>
	    <li>
	    	<spring:url value="/about" var="aboutUrl" htmlEscape="true"/>
 			<a href="${aboutUrl}">About</a>
 		</li>
 		
 		<li>
 			 <a href="addbrand" >Add Brand</a>
 		</li>
 		
 		<li>
   			<spring:url value="/addproductcategory" var="addProductCategoryUrl" htmlEscape="true"/>
			<a href="${addProductCategoryUrl}">Add Product Category</a>
 		</li>
 		
 		<li>
	    	<spring:url value="/addproduct" var="addproductUrl" htmlEscape="true"/>
 			<a href="${addproductUrl}">Add Product</a>
 		</li>
 		
 		<li>
	    	<spring:url value="/addsku" var="addskuUrl" htmlEscape="true"/>
 			<a href="${addskuUrl}">Add SKU</a>
 		</li>
 		
 		<li>
 			<security:authorize access="hasRole('ROLE_USER')">
		    	<spring:url value="/about" var="aboutUrl" htmlEscape="true"/>
	 			<a href="${aboutUrl}">Add Product</a>
 			</security:authorize>
 		</li>
 		
 		<li>
 			<security:authorize access="hasRole('PERM_CREATE_BRAND')">
		    	<spring:url value="/about" var="aboutUrl" htmlEscape="true"/>
	 			<a href="${aboutUrl}">Update Product</a>
 			</security:authorize>
 		</li>
	</ul>
</div>