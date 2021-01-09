package com.springboot.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.springboot.model.Doctor;
import com.springboot.repository.DoctorRepository;

@Service
public class DoctorService {

	@Autowired
	private DoctorRepository doctorrepo;

	public List<Doctor> findAll() {
		return doctorrepo.findAll();
	}

	public Doctor fetchUserByEmailId(String emailid) {
		return doctorrepo.findByMail(emailid);
	}

	public Doctor saveUser(Doctor doctor) {
		return doctorrepo.save(doctor);
	}

	public Doctor fetchUserByEmailIdAndPassword(String emailid, String pwd) {
		return doctorrepo.findByMailAndPassword(emailid,pwd);
	}

	public Optional<Doctor> findById(Long id) {
		
		return doctorrepo.findById(id);
	}

	public void delete(Doctor doctor) {
		doctorrepo.delete(doctor);
	}
	
	
}
