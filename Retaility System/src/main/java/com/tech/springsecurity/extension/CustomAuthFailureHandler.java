package com.tech.springsecurity.extension;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.security.core.AuthenticationException;
import org.springframework.security.web.authentication.SimpleUrlAuthenticationFailureHandler;
import org.springframework.stereotype.Component;

/**
 * to return the code 401 UNAUTHORIZED
 * @author AKSH
 *
 */
@Component
public class CustomAuthFailureHandler extends
		SimpleUrlAuthenticationFailureHandler {

	 @Override
	    public void onAuthenticationFailure(HttpServletRequest request, HttpServletResponse response,
	            AuthenticationException exception) throws IOException, ServletException {
	        response.setStatus(HttpServletResponse.SC_UNAUTHORIZED);

	        PrintWriter writer = response.getWriter();
	        writer.write(exception.getMessage());
	        writer.flush();
	    }
}
