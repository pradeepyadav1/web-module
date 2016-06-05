package com.tech.controller;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.security.authentication.AnonymousAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.web.authentication.logout.SecurityContextLogoutHandler;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

@Controller
public class LoginController {

	@RequestMapping("/login")
	public String showLoginScreen(){
		return "/login/login";
	}
	
	@RequestMapping("/logout")
	public String logout(HttpServletRequest request, HttpServletResponse response) {
	    Authentication auth = SecurityContextHolder.getContext().getAuthentication();
	      if (auth != null){    
	         new SecurityContextLogoutHandler().logout(request, response, auth);
	      }
	    SecurityContextHolder.getContext().setAuthentication(null);
	    System.out.println("called logout");
	    return "redirect:/login";
	}
	
	
	
	
	
	@RequestMapping(value = "/about", method = RequestMethod.GET)
	public String about() {
		return "about";
	}
	
	@RequestMapping(value = {"/", "/home"}, method = RequestMethod.GET)
	public String home() {
		return "redirect:/brands";
	}
	
	@RequestMapping(value = "/brands", method = RequestMethod.GET)
	public String displayBrands() {
		return "product_management/brands_list";
	}
	
	
	//@PreAuthorize("hasRole('PERM_CREATE_BRAND')")
	@RequestMapping(value = "/addbrand", method = RequestMethod.GET)
	public String addBrand() {
		
		
		/*Authentication auth = SecurityContextHolder.getContext().getAuthentication();
		System.out.println("IIIII Auth "+auth);
		if (!(auth instanceof AnonymousAuthenticationToken)) {
			UserDetails userDetails = (UserDetails)auth.getPrincipal();
			System.out.println( "*************** \n "+userDetails);
		        // userDetails = auth.getPrincipal()
		}*/
		
		return "product_management/brand";
	}
	
	@RequestMapping(value = "/addproductcategory", method = RequestMethod.GET)
	public String addProductCategory() {
		return "product_management/product_category";
	}
	
	
	
	@RequestMapping(value = "/addproduct", method = RequestMethod.GET)
	public String addProduct() {
		return "product_management/product";
	}
	
	@RequestMapping(value = "/addsku", method = RequestMethod.GET)
	public String addSku() {
		return "product_management/sku";
	}
	
}
