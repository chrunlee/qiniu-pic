<%@ page language="java" contentType="text/html; charset=UTF-8" import="com.boyuyun.datareport.byyuploader.ActionEnter" pageEncoding="UTF-8"%>
<%@ page trimDirectiveWhitespaces="true" %>
<%
	System.out.println("INFO : enter controller jsp");
    request.setCharacterEncoding( "utf-8" );
	response.setHeader("Content-Type" , "text/html");
	String rootPath = application.getRealPath( "/" );
	out.write(new ActionEnter(request, rootPath ).exec());
	
%>