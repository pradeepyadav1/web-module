<%@ page contentType="text/html;charset=UTF-8" language="java" session="false" %>
<%@include file="/common/taglibs.jsp" %>

<!DOCTYPE html>
<!-- saved from url=(0068)file:///C:/Users/AKSH/Desktop/Example%20CSS/1/test%20validation.html -->
<html lang="en"><head><meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
  	<title> <fmt:message key="product.title.createProduct" />  </title>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    
    
    
     <link rel="stylesheet" type="text/css" href="${contextPath}/resources/css/smart-forms.css">
    <link rel="stylesheet" type="text/css" href="${contextPath}/resources/css/font-awesome.min.css">
    
    
	<%-- <script type="text/javascript" src="${contextPath}/resources/js/libs/jquery-1.9.1.min.js"></script>
	<script type="text/javascript" src="${contextPath}/resources/js/libs/jquery.sha256.min.js"></script>
    <script type="text/javascript" src="${contextPath}/resources/js/libs/jquery.validate.js"></script>
    <script type="text/javascript" src="${contextPath}/resources/js/libs/additional-methods.js"></script>
    <script type="text/javascript" src="${contextPath}/resources/js/utility/utilities.js"></script>
    <script type="text/javascript" src="${contextPath}/resources/js/utility/validation.default.settings.js"></script>
	<script type="text/javascript" src="${contextPath}/resources/js/utility/requestprocessor.js"></script>
	<script type="text/javascript" src="${contextPath}/resources/js/login/login.js"></script> --%>
	
	
	<script type="text/javascript" src="${contextPath}/resources/js/libs/includejs.js"></script>
	<script type="text/javascript">
	loadLoginJS();
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
            	<h4><i class="fa fa-pencil-square"></i> <fmt:message key="login.title.signin" /> </h4>
            </div><!-- end .form-header section -->
            
            <form method="post" action="" id="loginForm" novalidate="novalidate">
            	<div class="form-body">
                
                    
					<div class="section">
                    	<label for="username" class="field prepend-icon">
                                <input type="text" name="username" id="usernameTxt"  data-validate="required(username is required),alphanumeric(username must be alphabates and numbers only),min(5,username must contain 5 characters),max(10, username must contain only 10 characters)" class="gui-input" placeholder="<fmt:message key="login.placeholder.enterUsername" />">
                                <label for="usernameIcon" class="field-icon"><i class="fa fa-user"></i></label>  
                            </label>
                    </div><!-- end section -->
					
					
					<div class="section">
                        <label for="passwordHash" class="field prepend-icon">
                                <input type="password" name="passwordHash" id="passwordHashTxt"  data-validate="required(password is required),alphanumeric(password must be alphabates and numbers only),min(5,password must contain 5 characters),max(10, password must contain only 10 characters)"    class="gui-input" placeholder="<fmt:message key="login.placeholder.enterPassword" />">
                                <label for="passwordHashIcon" class="field-icon"><i class="fa fa-user"></i></label>  
                            </label> 
                    </div>
                    
                    
						
                </div><!-- end .form-body section -->
                <div class="form-footer">
                	<button type="button" class="button btn-primary" id="loginBtn"> <fmt:message key="login.label.signIn" /> </button>
                </div><!-- end .form-footer section -->
            </form>
            
        </div><!-- end .smart-forms section -->
    </div><!-- end .smart-wrap section -->
    
    <div></div><!-- end section -->
    
    
    <input type="hidden" id="errorMsg_usernameRequired" value="<fmt:message key="product.validation.client.require.name" />" >
    <input type="hidden" id="errorMsg_passwordRequired" value="<fmt:message key="product.validation.client.require.brand" />" >

</body>
</html>