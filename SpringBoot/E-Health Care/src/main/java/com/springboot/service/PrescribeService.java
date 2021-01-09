package com.springboot.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.springboot.model.Appointment;
import com.springboot.model.Prescription;
import com.springboot.repository.PrescribeRepository;

@Service
public class PrescribeService {
 
	@Autowired
	private PrescribeRepository prescriberepo;
	
	public List<Prescription> getPrescription()
	{
		return prescriberepo.findAll();
	}

	public Prescription save(Prescription prescription) {
		return prescriberepo.save(prescription);
	}

	public Optional<Prescription> findById(Long id) {
		return prescriberepo.findById(id);
	}
}
