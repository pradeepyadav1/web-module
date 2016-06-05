<%@ page contentType="text/html;charset=UTF-8" language="java" session="false" %>
<%@include file="/common/taglibs.jsp" %>

<!DOCTYPE html>
<!-- saved from url=(0068)file:///C:/Users/AKSH/Desktop/Example%20CSS/1/test%20validation.html -->
<html lang="en"><head><meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
  	<title> <fmt:message key="product.title.login" />  </title>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
    <meta name="apple-mobile-web-app-capable" content="yes"> 
    
    
    
<link href="${contextPath}/resources/css/bootstrap.min.css" rel="stylesheet" type="text/css" />
<link href="${contextPath}/resources/css/bootstrap-responsive.min.css" rel="stylesheet" type="text/css" />
<link href="${contextPath}/resources/css/font-awesome.min.css" rel="stylesheet">
    <link href="http://fonts.googleapis.com/css?family=Open+Sans:400italic,600italic,400,600" rel="stylesheet">
<link href="${contextPath}/resources/css/style.css" rel="stylesheet" type="text/css">
<link href="${contextPath}/resources/css/pages/signin.css" rel="stylesheet" type="text/css">
    
    
	
	
	
	<script type="text/javascript" src="${contextPath}/resources/js/libs/includejs.js"></script>
	<script type="text/javascript">
	loadLoginJS();
	</script>
	
    
   
       

</head>

<body>

        
        <div class="navbar navbar-fixed-top">
	
	<div class="navbar-inner">
		
		<div class="container">
			
			<a class="btn btn-navbar" data-toggle="collapse" data-target=".nav-collapse">
				<span class="icon-bar"></span>
				<span class="icon-bar"></span>
				<span class="icon-bar"></span>
			</a>
			
			<a class="brand" href="#">
				Login				
			</a>		
			
			
	
		</div> <!-- /container -->
		
	</div> <!-- /navbar-inner -->
	
</div> <!-- /navbar -->



<div class="account-container">
	
	<div class="content clearfix">
		
		<form action="#" method="post" id="loginForm">
		
			<h1>Member Login</h1>		
			
			<div class="login-fields">
				
				<p>Please provide your details</p>
				
				<div class="field">
					<label for="username">Username</label>
					<input type="text" name="username" id="usernameTxt"  data-validate="required(username is required),alphanumeric(username must be alphabates and numbers only),min(5,username must contain 5 characters),max(10, username must contain only 10 characters)" placeholder="Username" class="login username-field" />
				</div> <!-- /field -->
				
				<div class="field">
					<label for="password">Password:</label>
					<input type="password" name="passwordHash" id="passwordHashTxt"  data-validate="required(password is required),alphanumeric(password must be alphabates and numbers only),min(5,password must contain 5 characters),max(10, password must contain only 10 characters)"  placeholder="Password" class="login password-field"/>
				</div> <!-- /password -->
				
			</div> <!-- /login-fields -->
			
			<div class="login-actions">
				
				<!-- <span class="login-checkbox">
					<input id="Field" name="Field" type="checkbox" class="field login-checkbox" value="First Choice" tabindex="4" />
					<label class="choice" for="Field">Keep me signed in</label>
				</span> -->
									
				<button class="button btn btn-success btn-large"  type="button" id="loginBtn">Sign In</button>
				
			</div> <!-- .actions -->
			
			
			
		</form>
		
	</div> <!-- /content -->
	
</div> <!-- /account-container -->



<div class="login-extra">
	<a href="#">Forgot Password</a>
</div> <!-- /login-extra -->


        

</body>
</html>