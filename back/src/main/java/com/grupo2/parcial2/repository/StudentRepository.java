package com.grupo2.parcial2.repository;

import com.grupo2.parcial2.model.Student;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface StudentRepository extends JpaRepository <Student, Long> {
     Optional<Student> findByPersonalId(String personalId);
}
