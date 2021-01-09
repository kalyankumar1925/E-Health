package com.springboot.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.springboot.exception.ResourceNotFoundException;
import com.springboot.model.Labtest;
import com.springboot.model.Medicine;
import com.springboot.repository.LabtestRepository;
import com.springboot.repository.MedicineRepository;
import com.springboot.service.LabtestService;
import com.springboot.service.MedicineService;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins="http://localhost:4200")

public class MedicineAndLabtestController {

	@Autowired
	private MedicineService medicineservice;
	
	@Autowired 
	private LabtestService labtestservice;
	
	@Autowired
	private MedicineRepository medicinerepo;
	
	@Autowired
	private LabtestRepository labtestrepo;
	
    
    @GetMapping("/medicines")
    public List<Medicine> getAllMedicines(){
   	 return medicineservice.getAllMedicines();
    }
    
    @GetMapping("/medicines/{mid}")
    public Optional<Medicine> getMedicineById(@RequestBody Long mid)
    {
   	 return medicineservice.fetchMedicineById(mid);
    }
    
    
    @GetMapping("/labtests")
    public List<Labtest> getAllLabtests(){
   	 return labtestservice.getAllLabtest();
    }
    
    @GetMapping("/labtests/{lid}")
    public Optional<Labtest> getLabtestById(@RequestBody Long lid)
    {
   	 return labtestservice.fetchLabtestById(lid);
    }
    
    
    @PostMapping("/addMedicine")
    public Medicine addMedicine(@RequestBody Medicine medicine) throws Exception
    {
      return medicineservice.saveMedicine(medicine);    
    }
    
    @PostMapping("/addLabtest")
    public Labtest addLabtest(@RequestBody Labtest labtest) throws Exception
    {
   	 return labtestservice.saveLabtest(labtest);
   	 
    }
    
    @DeleteMapping("/deleteMedicine/{mid}")
    public ResponseEntity<Map<String, Boolean>> deleteMedicine(@PathVariable Long mid) throws ResourceNotFoundException{
   	 Medicine medicine=medicinerepo.findById(mid)
   			 .orElseThrow(() -> new ResourceNotFoundException("medicine not exist with id:"+mid));
   	 
   	 medicinerepo.delete(medicine);
   	 Map<String, Boolean> response =new HashMap<>();
   	 response.put("deleted",Boolean.TRUE);
   	 return ResponseEntity.ok(response);
    }
    
    

    @DeleteMapping("/deleteLabtest/{lid}")
    public ResponseEntity<Map<String, Boolean>> deleteLabtest(@PathVariable Long lid) throws ResourceNotFoundException{
   	 Labtest labtest=labtestrepo.findById(lid)
   			 .orElseThrow(() -> new ResourceNotFoundException("labtest not exist with id:"+lid));
   	 
   	 labtestrepo.delete(labtest);
   	 Map<String, Boolean> response =new HashMap<>();
   	 response.put("deleted",Boolean.TRUE);
   	 return ResponseEntity.ok(response);
    }
    
    
    @PutMapping("/updateMedicine/{mid}")
    public ResponseEntity<Medicine> updateMedicine(@PathVariable Long mid, @RequestBody Medicine medicinedetail) throws ResourceNotFoundException
    {
   	 Medicine medicine=medicinerepo.findById(mid)
   			 .orElseThrow(() -> new ResourceNotFoundException("appointment not exist with id:"+mid));
   	 
   	 medicine.setMedname(medicinedetail.getMedname());
   	 medicine.setQuantity(medicinedetail.getQuantity());
   	 
   	 
   	 
   	 Medicine updatedmedicine =medicinerepo.save(medicine);
   	 return ResponseEntity.ok(updatedmedicine);
   	 
   	 
   	 
    }
    @CrossOrigin(origins="http://localhost:4200")

    @PutMapping("/updateLabtest/{lid}")
    public ResponseEntity<Labtest> updateLabtest(@PathVariable Long lid, @RequestBody Labtest labtestdetail) throws ResourceNotFoundException
    {
   	 Labtest labtest=labtestrepo.findById(lid)
   			 .orElseThrow(() -> new ResourceNotFoundException("appointment not exist with id:"+lid));
   	 
   	 labtest.setTestname(labtestdetail.getTestname());
   	 
   	 Labtest updatedlabtest =labtestrepo.save(labtest);
   	 return ResponseEntity.ok(updatedlabtest);
   	 
   	 
    }
	
}