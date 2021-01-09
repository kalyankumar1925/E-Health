package com.springboot.controller;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

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
import com.springboot.model.Appointment;
import com.springboot.model.Doctor;
import com.springboot.repository.AppointmentRepository;
import com.springboot.service.DoctorService;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins="http://localhost:4200")
public class DoctorController {

	@Autowired
	private DoctorService doctorservice;
	
	String signindoctor="";
	
	@Autowired
	private AppointmentRepository appointmentrepo;
	
	@GetMapping("/registerdoctor")
	public List<Doctor> getAllUsers(){
		return doctorservice.findAll();
	}
	
	@PostMapping("/registerdoctor")
	public Doctor registerDoctor(@RequestBody Doctor doctor) throws Exception
	{
		String emailid=doctor.getMail();
		if(emailid!=null && !"".equals(emailid))
		{
			Doctor userobj=doctorservice.fetchUserByEmailId(emailid);
			if(userobj!=null)
				throw new Exception("User with"+ emailid+" is already Exists!!");
		}
		return doctorservice.saveUser(doctor);
	}
	
	@CrossOrigin(origins="http://localhost:4200")
	@PostMapping("/doctorlogin")
	public Doctor loginDoctor(@RequestBody Doctor doctor) throws Exception
	{
		String emailid=doctor.getMail();
		String pwd=doctor.getPassword();
		Doctor userobj=null;
		if(emailid!=null && pwd!=null)
		{
			userobj=doctorservice.fetchUserByEmailIdAndPassword(emailid, pwd);
			signindoctor=userobj.getFname()+" "+userobj.getLname();
		}
		System.out.println(emailid+" "+pwd+" "+signindoctor);
		if(userobj==null)
			throw new Exception("Invalid Crediantialss!!! ");
		return userobj;
	}
	
	@GetMapping("/viewdoctorappointments")
	public List<Appointment> viewAppointments(){
		List<Appointment> viewmyappointments=new ArrayList<>();
		List<Appointment> app=appointmentrepo.findAll();
		for (Appointment appointment : app) {
			if(appointment.getDoctorName().equalsIgnoreCase(signindoctor))
				viewmyappointments.add(appointment);
		}
		return viewmyappointments;
	}
	
	@GetMapping("/getdoctors")
	public List<String> getDoctors(){
		List<String> getdoctors=new ArrayList<>();
		List<Doctor> doctors=doctorservice.findAll();
		
		for (Doctor doctor : doctors) {
			getdoctors.add(doctor.getFname()+" "+doctor.getLname());
		}
		
		return getdoctors;
	}
	
	@GetMapping("/doctors")
    public List<Doctor> getAlldoctors() {
        return doctorservice.findAll();
    }

    @GetMapping("/doctors/{id}")
    public ResponseEntity<Doctor> getDoctorById(@PathVariable Long id)
        throws ResourceNotFoundException {
        Doctor doctor = doctorservice.findById(id)
          .orElseThrow(() -> new ResourceNotFoundException("Doctor not found for this id :: " + id));
        return ResponseEntity.ok(doctor);
    }
    
    @PostMapping("/doctors")
    public Doctor createDoctor(@RequestBody Doctor doctor) {
        return doctorservice.saveUser(doctor);
    }

    @PutMapping("/doctors/{id}")
    public ResponseEntity<Doctor> updateDoctor(@PathVariable Long id,
          @RequestBody Doctor doctorDetails) throws ResourceNotFoundException {
        Doctor doctor = doctorservice.findById(id)
        .orElseThrow(() -> new ResourceNotFoundException("Doctor not found for this id :: " + id));

        doctor.setFname(doctorDetails.getFname());
        doctor.setLname(doctorDetails.getLname());
        doctor.setMail(doctorDetails.getMail());
        doctor.setExperience(doctorDetails.getExperience());
        doctor.setSpecialist(doctorDetails.getSpecialist());
        Doctor updatedDoctor = doctorservice.saveUser(doctor);
        return ResponseEntity.ok(updatedDoctor);
    }

    @DeleteMapping("/doctors/{id}")
    public Map<String, Boolean> deleteDoctor(@PathVariable(value = "id") Long doctorId)
         throws ResourceNotFoundException {
        Doctor doctor = doctorservice.findById(doctorId)
       .orElseThrow(() -> new ResourceNotFoundException("Employee not found for this id :: " + doctorId));

        doctorservice.delete(doctor);
        Map<String, Boolean> response = new HashMap<>();
        response.put("deleted", Boolean.TRUE);
        return response;
    }
}
