package com.springboot.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.springboot.model.Appointment;
import com.springboot.model.User;
import com.springboot.repository.AppointmentRepository;
import com.springboot.service.UserService;

@RestController
@RequestMapping("/api")
public class LoginController {

	@Autowired
	private UserService service;
	
	@Autowired
	private AppointmentRepository appointmentrepo;
	
	String signinuser="";
	
	@GetMapping("/registeruser")
	public List<User> getAllUsers(){
		return service.findAll();
	}
	
	@CrossOrigin(origins="http://localhost:4200")
	@PostMapping("/registeruser")
	public User registerUser(@RequestBody User user) throws Exception
	{
		String emailid=user.getEmail();
		if(emailid!=null && !"".equals(emailid))
		{
			User userobj=service.fetchUserByEmailId(emailid);
			if(userobj!=null)
				throw new Exception("User with"+ emailid+" is already Exists!!");
		}
		return service.saveUser(user);
	}
	
	@CrossOrigin(origins="http://localhost:4200")
	@PostMapping("/login")
	public User loginUser(@RequestBody User user) throws Exception
	{
		String emailid=user.getEmail();
		String pwd=user.getPassword();
		System.out.println(emailid+" "+pwd+" "+signinuser);
		User userobj=null;
		if(emailid!=null && pwd!=null)
		{
			userobj=service.fetchUserByEmailIdAndPassword(emailid, pwd);
			signinuser=userobj.getUsername();
		}
		if(userobj==null)
			throw new Exception("Invalid Crediantialss!!! ");
		return userobj;
	}
	
	@CrossOrigin(origins="http://localhost:4200")
	@GetMapping("/appointmenthistory")
	public List<Appointment> viewAppointments()
	{
		List<Appointment> getdata=appointmentrepo.findAll();
		List<Appointment> appointmenthistory=new ArrayList<>();
		for (Appointment appointment : getdata) {
			if(appointment.getPatientName().equalsIgnoreCase(signinuser))
				appointmenthistory.add(appointment);
		}
		return appointmenthistory;
	}
}
