package com.grupo2.parcial2.repository;

import com.grupo2.parcial2.model.Subject;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface SubjectRepository extends JpaRepository <Subject, Long> {
    Optional<Subject> findByName(String subjectName);
}
