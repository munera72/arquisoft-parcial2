package com.grupo2.parcial2.repository;

import com.grupo2.parcial2.model.Subject;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface SubjectRepository extends JpaRepository <Subject, Long> {
}
