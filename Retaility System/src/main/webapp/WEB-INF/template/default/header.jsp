
<!-- <header>
	<div class="head-sec">
	   
	  	 <div class="logo_area">
	  	 <div class="logo_icon" onclick="loadHomeScreenArea();"></div>
	  	 </div>
	    <nav>	    
		    <div class="nav">		       
		           <div><a href="javascript:void(0)" class="signout_nav" id="sign_out_tag" onclick="loadIndexPage();">
		           <fmt:message key="main_pay.signoutLabel"/></a></div>
		           <div><a href="#locator" id="locator_tag" class="history_nav" onclick="loadLocatorMap();">
		           <fmt:message key="main_pay.locatorLabel"/></a></div>
		            <div><a href="#addMoney" id="add_money_tag" class="history_nav" onclick="loadAddMoneyPage();">
		           <fmt:message key="main_pay.addMoneyLabel"/></a></div>
		           <div><a href="#profile" id="profile_tag" class="history_nav" onclick="loadEditProfilePage();">
		           <fmt:message key="main_pay.profileLabel"/></a></div>
		           <div><a href="#history" id="pay_hist_tag" class="history_nav" onclick="loadPaymentHistoryTable(false);" >
		           <fmt:message key="main_pay.payhistLabel"/></a></div>
		           <div><a href="#searchBiller" id="add_bill_tag" class="add_nav" onclick="loadFindBill(true);" >
		           <fmt:message key="main_pay.addBillLabel"/></a></div>
		           <div><a href="#home" id ="home_page_tag" class="home_nav" onclick="loadHomeScreenArea();" >
		           <fmt:message key="main_pay.actionXLabel"/></a></div>		            		       
		    </div>
	    </nav>
	
	</div>
</header> -->



	
<div class="navbar navbar-fixed-top">
	
	<div class="navbar-inner">
		
		<div class="container">
			
			<a class="btn btn-navbar" data-toggle="collapse" data-target=".nav-collapse">
				<span class="icon-bar"></span>
				<span class="icon-bar"></span>
				<span class="icon-bar"></span>
			</a>
			
			<a class="brand" href="index.html">
				Welcome to product management	
				<span id="page-title">${pageTitle}</span>			
			</a>		
			
			<div class="nav-collapse">
				<ul class="nav pull-right">
					<li class="dropdown">						
						<a href="#" class="dropdown-toggle" data-toggle="dropdown">
							<i class="icon-cog"></i>
							Account
							<b class="caret"></b>
						</a>
						
						<ul class="dropdown-menu">
							<li><a href="javascript:;">Settings</a></li>
							<li><a href="javascript:;">Help</a></li>
						</ul>						
					</li>
			
					<li class="dropdown">						
						<a href="#" class="dropdown-toggle" data-toggle="dropdown">
							<i class="icon-user"></i> 
							EGrappler.com
							<b class="caret"></b>
						</a>
						
						<ul class="dropdown-menu">
							<li><a href="javascript:;">Profile</a></li>
							<li> <a href="${pageContext.request.contextPath}/logout">Logout</a> </li>
						</ul>						
					</li>
				</ul>
			
				<form class="navbar-search pull-right">
					<input type="text" class="search-query" placeholder="Search">
				</form>
				
			</div><!--/.nav-collapse -->	
	
		</div> <!-- /container -->
		
	</div> <!-- /navbar-inner -->
	
</div> <!-- /navbar -->
    