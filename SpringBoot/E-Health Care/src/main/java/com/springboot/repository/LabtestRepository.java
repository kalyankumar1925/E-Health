package com.springboot.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.springboot.model.Labtest;
import com.springboot.model.Medicine;

@Repository

public interface LabtestRepository extends JpaRepository<Labtest, Long> {

	

}