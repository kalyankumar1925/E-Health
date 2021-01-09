package com.springboot.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.springboot.model.User;
import com.springboot.repository.UserRepository;

@Service
public class UserService {

	@Autowired
	private UserRepository userrepo;
	
	public User saveUser(User user)
	{
		return userrepo.save(user);
	}
	
	public User fetchUserByEmailId(String email)
	{
		return userrepo.findByEmail(email);
	}

	public List<User> findAll() {
		return userrepo.findAll();
	}
	
	public User fetchUserByEmailIdAndPassword(String email,String password)
	{
		return userrepo.findByEmailAndPassword(email,password);
	}
}
