<%@ page contentType="text/html;charset=UTF-8" language="java" session="false" %>
<%@include file="/common/taglibs.jsp" %>
<tiles:insertDefinition name="defaultTemplate">
	<tiles:putAttribute name="body">
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<title> <fmt:message key="brand.title.mange brands" /> </title>


<link href="${contextPath}/resources/css/bootstrap.min.css" rel="stylesheet" type="text/css" />
<link href="${contextPath}/resources/css/bootstrap-responsive.min.css" rel="stylesheet" type="text/css" />
<link href="${contextPath}/resources/css/font-awesome.min.css" rel="stylesheet">
<link href="${contextPath}/resources/css/style.css" rel="stylesheet" type="text/css">


<script type="text/javascript" src="${contextPath}/resources/js/libs/includejs.js"></script>
	<script type="text/javascript">
	loadBrandJS();
	</script>


</head>
<body>


<div class="span12">

<div class="widget widget-table action-table">
            <div class="widget-header"> <i class="icon-th-list"></i>
              <h3>A Table Example</h3>
            </div>
            <!-- /widget-header -->
            <div class="widget-content">
              <table class="table table-striped table-bordered">
                <thead>
                  <tr>
                    <th> Free Resource </th>
                    <th> Download</th>
                    <th class="td-actions"> </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td> Fresh Web Development Resources </td>
                    <td> http://www.egrappler.com/ </td>
                    <td class="td-actions"><a href="javascript:;" class="btn btn-small btn-success"><i class="btn-icon-only icon-ok"> </i></a><a href="javascript:;" class="btn btn-danger btn-small"><i class="btn-icon-only icon-remove"> </i></a></td>
                  </tr>
                  <tr>
                    <td> Fresh Web Development Resources </td>
                    <td> http://www.egrappler.com/ </td>
                    <td class="td-actions"><a href="javascript:;" class="btn btn-small btn-success"><i class="btn-icon-only icon-ok"> </i></a><a href="javascript:;" class="btn btn-danger btn-small"><i class="btn-icon-only icon-remove"> </i></a></td>
                  </tr>
                  <tr>
                    <td> Fresh Web Development Resources </td>
                    <td> http://www.egrappler.com/ </td>
                    <td class="td-actions"><a href="javascript:;" class="btn btn-small btn-success"><i class="btn-icon-only icon-ok"> </i></a><a href="javascript:;" class="btn btn-danger btn-small"><i class="btn-icon-only icon-remove"> </i></a></td>
                  </tr>
                  <tr>
                    <td> Fresh Web Development Resources </td>
                    <td> http://www.egrappler.com/ </td>
                    <td class="td-actions"><a href="javascript:;" class="btn btn-small btn-success"><i class="btn-icon-only icon-ok"> </i></a><a href="javascript:;" class="btn btn-danger btn-small"><i class="btn-icon-only icon-remove"> </i></a></td>
                  </tr>
                  <tr>
                    <td> Fresh Web Development Resources </td>
                    <td> http://www.egrappler.com/ </td>
                    <td class="td-actions"><a href="javascript:;" class="btn btn-small btn-success"><i class="btn-icon-only icon-ok"> </i></a><a href="javascript:;" class="btn btn-danger btn-small"><i class="btn-icon-only icon-remove"> </i></a></td>
                  </tr>
                
                </tbody>
              </table>
            </div>
            <!-- /widget-content --> 
          </div>

</div>
</body>
</html>

</tiles:putAttribute>
</tiles:insertDefinition>