package com.springboot.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.springboot.model.Doctor;

@Repository
public interface DoctorRepository extends JpaRepository<Doctor, Long> {

	Doctor findByMail(String emailid);

	Doctor findByMailAndPassword(String emailid, String pwd);

}
