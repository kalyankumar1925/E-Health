package com.springboot.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.springboot.model.Medicine;
import com.springboot.repository.MedicineRepository;

@Service
public class MedicineService {
	@Autowired
	MedicineRepository medrepo;
	
	
	public Medicine saveMedicine(Medicine medicine) {
		return medrepo.save(medicine);
	}
	
	public Optional<Medicine> fetchMedicineById(Long id)
	{
		return medrepo.findById(id);
	}
	public List<Medicine> getAllMedicines() {
		// TODO Auto-generated method stub
		return  medrepo.findAll();
	} 
	
	

}