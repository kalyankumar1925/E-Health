package com.springboot.repository;


	import org.springframework.data.jpa.repository.JpaRepository;
	import org.springframework.stereotype.Repository;

	import com.springboot.model.Medicine;

	@Repository

	public interface MedicineRepository extends JpaRepository<Medicine, Long> {

	}

