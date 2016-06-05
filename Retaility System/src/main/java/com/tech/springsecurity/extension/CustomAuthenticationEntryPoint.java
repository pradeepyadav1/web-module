package com.tech.springsecurity.extension;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.security.core.AuthenticationException;
import org.springframework.security.web.AuthenticationEntryPoint;
import org.springframework.stereotype.Component;
/**
 * 
 * @author AKSH
 *
 *to always return the code 401 UNAUTHORIZED. This will override the default behavior of Spring Security which is forwarding the user to the login page if he don’t meet the security requirements, because on REST we don’t have any login page
 */
@Component
public class CustomAuthenticationEntryPoint implements AuthenticationEntryPoint {

	public void commence(HttpServletRequest request, HttpServletResponse response,
			AuthenticationException authException) throws IOException, ServletException {
		response.sendError(HttpServletResponse.SC_UNAUTHORIZED, authException.getMessage());
	}

}
