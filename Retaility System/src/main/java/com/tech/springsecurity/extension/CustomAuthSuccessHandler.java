package com.tech.springsecurity.extension;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.converter.json.MappingJackson2HttpMessageConverter;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.web.authentication.SavedRequestAwareAuthenticationSuccessHandler;
import org.springframework.stereotype.Component;

import com.fasterxml.jackson.databind.ObjectMapper;


/**
 * to return the code 200 OK, the body of the HTTP response contain the JSON data of the current authenticated user
 * @author AKSH
 *
 */
@Component
public class CustomAuthSuccessHandler extends
		SavedRequestAwareAuthenticationSuccessHandler {


    private final ObjectMapper mapper;

    @Autowired
    CustomAuthSuccessHandler(MappingJackson2HttpMessageConverter messageConverter) {
        this.mapper = messageConverter.getObjectMapper();
    }

    @Override
    public void onAuthenticationSuccess(HttpServletRequest request, HttpServletResponse response,
            Authentication authentication) throws IOException, ServletException {
        response.setStatus(HttpServletResponse.SC_OK);

        /*NuvolaUserDetails userDetails = (NuvolaUserDetails) authentication.getPrincipal();
        User user = userDetails.getUser();
        userDetails.setUser(user);


        PrintWriter writer = response.getWriter();
        mapper.writeValue(writer, user);
        writer.flush();*/
    }
}
