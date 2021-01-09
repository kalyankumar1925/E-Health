package com.springboot.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="labtest")
public class Labtest {
	@Id
    @GeneratedValue(strategy = GenerationType.AUTO)
	private long lid;
	private String testname;

	public Labtest() {
		super();
	}

	public Labtest( String testname) {
		this.testname = testname;
	}

	public long getLid() {
		return lid;
	}

	public void setLid(long lid) {
		this.lid = lid;
	}

	public String getTestname() {
		return testname;
	}

	public void setTestname(String testname) {
		this.testname = testname;
	}

}