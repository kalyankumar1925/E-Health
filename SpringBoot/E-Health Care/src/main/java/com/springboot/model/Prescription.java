package com.springboot.model;

import javax.persistence.Basic;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import org.hibernate.annotations.GeneratorType;

@Entity
@Table(name = "prescription")
public class Prescription {

	@Id
	private Long pid;
	private String labtest;
	private String medicine;
	
	public Prescription() {
		super();
	}
	public Prescription(Long pid, String labtest, String medicine) {
		super();
		this.pid = pid;
		this.labtest = labtest;
		this.medicine = medicine;
	}
	public Long getPid() {
		return pid;
	}
	public void setPid(Long pid) {
		this.pid = pid;
	}
	public String getLabtest() {
		return labtest;
	}
	public void setLabtest(String labtest) {
		this.labtest = labtest;
	}
	public String getMedicine() {
		return medicine;
	}
	public void setMedicine(String medicine) {
		this.medicine = medicine;
	}
	@Override
	public String toString() {
		return "Prescription [pid=" + pid + ", labtest=" + labtest + ", medicine=" + medicine + "]";
	}
	
	
	
}
