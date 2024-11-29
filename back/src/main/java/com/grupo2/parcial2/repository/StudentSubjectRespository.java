package com.grupo2.parcial2.repository;

import com.grupo2.parcial2.model.Student;
import com.grupo2.parcial2.model.StudentSubject;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;
@Repository
public interface StudentSubjectRespository extends JpaRepository <StudentSubject, Long> {
    Optional<List<StudentSubject>> findByStudent(Student student);
}
