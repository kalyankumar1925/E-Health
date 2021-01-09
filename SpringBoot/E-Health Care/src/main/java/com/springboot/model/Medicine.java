package com.springboot.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="medicine")
public class Medicine {
	@Id
    @GeneratedValue(strategy = GenerationType.AUTO)
	private Long mid;
	
	private String medname;
	private int quantity;
	public Long getMid() {
		return mid;
	}
	public void setMid(Long mid) {
		this.mid = mid;
	}
	public String getMedname() {
		return medname;
	}
	public void setMedname(String medname) {
		this.medname = medname;
	}
	public int getQuantity() {
		return quantity;
	}
	public void setQuantity(int quantity) {
		this.quantity = quantity;
	}
	public Medicine(Long mid, String medname, int quantity) {
		super();
		this.mid = mid;
		this.medname = medname;
		this.quantity = quantity;
	}
	public Medicine() {
		super();
	}
	
}