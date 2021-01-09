package com.springboot.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.springboot.model.Prescription;

@Repository
public interface PrescribeRepository extends JpaRepository<Prescription, Long>{

}