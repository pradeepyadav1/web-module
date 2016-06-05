<%@ taglib uri="http://tiles.apache.org/tags-tiles" prefix="tiles"%>
<%@include file="/common/taglibs.jsp" %>
<html>
	<head>
	<title> <fmt:message key="product.title.login" />  </title>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
    <meta name="apple-mobile-web-app-capable" content="yes"> 
    
<link href="${contextPath}/resources/css/bootstrap.min.css" rel="stylesheet" type="text/css" />
<link href="${contextPath}/resources/css/bootstrap-responsive.min.css" rel="stylesheet" type="text/css" />
<link href="${contextPath}/resources/css/font-awesome.min.css" rel="stylesheet">
    <link href="http://fonts.googleapis.com/css?family=Open+Sans:400italic,600italic,400,600" rel="stylesheet">
<link href="${contextPath}/resources/css/style.css" rel="stylesheet" type="text/css">

<%-- <script type="text/javascript" src="${contextPath}/resources/js/libs/includejs.js"></script>
	<script type="text/javascript">
	loadJSFiles();
	</script> --%>
	
	<script type="text/javascript" src="${contextPath}/resources/js/libs/jquery-1.7.2.min.js"></script>
	<script type="text/javascript" src="${contextPath}/resources/js/libs/bootstrap.js"></script>
    
</head>
<body>
	<%-- <div class="container">
		<tiles:insertAttribute name="header" />
		<div class="content">
			<tiles:insertAttribute name="menu" />
			<tiles:insertAttribute name="body" />
		</div>
		
		<div class="footer">
        	<tiles:insertAttribute name="footer" />
    	</div>
	</div> --%>
	
    
<%@include file="header.jsp" %>    
    
<%@include file="menu.jsp" %>

	<div class="main">
		<div class="main-inner">
			<div class="container">
		        <div class="row">
					<tiles:insertAttribute name="body" />
				</div>
			</div>
		</div>
	</div>

</body>
</html>