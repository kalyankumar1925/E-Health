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
import com.springboot.model.Prescription;
import com.springboot.repository.AppointmentRepository;
import com.springboot.repository.PrescribeRepository;
import com.springboot.service.PrescribeService;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api/")
public class AppointmentController {
	
	@Autowired
	private AppointmentRepository appointmentRepository ;
	
	@Autowired
	private PrescribeService service;
	
	@GetMapping("/appointments")
	public List<Appointment> getAllAppointments(){
		return appointmentRepository.findAll();
	}
	
	@PostMapping("/appointments")
	public Appointment createAppointment(@RequestBody Appointment appointment)
	{
		return appointmentRepository.save(appointment);
	}
	
	@GetMapping("/appointments/{id}")
	public ResponseEntity<Appointment> getAppointmentById(@PathVariable Long id) throws ResourceNotFoundException
	{
		Appointment appointment=appointmentRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Appointment not exist with id:" +id));
		return ResponseEntity.ok(appointment);
	}
	
	@PutMapping("/appointments/{id}")
	public ResponseEntity<Appointment> updateAppointment(@PathVariable Long id, @RequestBody Appointment appointmentDetails) throws ResourceNotFoundException
	{
		Appointment appointment=appointmentRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("appointment not exist with id:"+id));
		
		appointment.setPatientName(appointmentDetails.getPatientName());
		appointment.setDoctorName(appointmentDetails.getDoctorName());
		appointment.setDate(appointmentDetails.getDate());
		appointment.setAge(appointmentDetails.getAge());
		appointment.setGender(appointmentDetails.getGender());
		appointment.setDescription(appointmentDetails.getDescription());
		appointment.setContact(appointmentDetails.getContact());
		
		Appointment updatedAppointment =appointmentRepository.save(appointment);
		return ResponseEntity.ok(updatedAppointment);
		
	}
	
	@DeleteMapping("/appointments/{id}")
	public ResponseEntity<Map<String, Boolean>> deleteAppointment(@PathVariable Long id) throws ResourceNotFoundException{
		Appointment appointment=appointmentRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("appointment not exist with id:"+id));
		
		appointmentRepository.delete(appointment);
		Map<String, Boolean> response =new HashMap<>();
		response.put("deleted",Boolean.TRUE);
		return ResponseEntity.ok(response);
		
	}
	
	@GetMapping("/prescribe")
	public List<Prescription> getPrescription()
	{
		return service.getPrescription();
	}
	
	@GetMapping("/prescribe/{id}")
	public ResponseEntity<Prescription> getPrescriptionId(@PathVariable Long id) throws ResourceNotFoundException
	{
		Prescription prescribe =service.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Doctor Prescription not exist with id:" +id));
		return ResponseEntity.ok(prescribe);
	}
	
	@PostMapping("/prescribe")
	public Prescription savePrescription(@RequestBody Prescription prescription)
	{
		return service.save(prescription);
	}

}
