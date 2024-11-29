package com.grupo2.parcial2.repository;

import com.grupo2.parcial2.model.Student;
import com.grupo2.parcial2.model.StudentSubject;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface StudentSubjectRespository extends JpaRepository <StudentSubject, Long> {
    Optional<List<StudentSubject>> findByStudent(Student student);
}
