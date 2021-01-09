package com.springboot.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.springboot.model.Labtest;
import com.springboot.repository.LabtestRepository;

@Service
public class LabtestService {
	
@Autowired
LabtestRepository labrepo;


public List<Labtest> getAllLabtest(){
return  labrepo.findAll();
}
public Labtest saveLabtest(Labtest labtest) {
	return labrepo.save(labtest);
}

public Optional<Labtest> fetchLabtestById(Long lid)
{
	return labrepo.findById(lid);
} 
}