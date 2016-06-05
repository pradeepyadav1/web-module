
<%
String contextPath = request.getContextPath();
String url = contextPath+"/login";
response.sendRedirect(url);
%>