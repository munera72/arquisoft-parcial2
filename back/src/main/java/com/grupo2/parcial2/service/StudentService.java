package com.grupo2.parcial2.service;

import com.grupo2.parcial2.model.Student;
import com.grupo2.parcial2.model.StudentSubject;
import com.grupo2.parcial2.repository.StudentRepository;
import com.grupo2.parcial2.repository.StudentSubjectRespository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class StudentService {
    private final StudentRepository studentRepository;
    private final StudentSubjectRespository studentSubjectRespository;

    public StudentService(StudentRepository studentRepository, StudentSubjectRespository studentSubjectRespository) {
        this.studentRepository = studentRepository;
        this.studentSubjectRespository = studentSubjectRespository;
    }

    public List<StudentSubject> findGradesByPersonalId(String personalId){
        Student student = studentRepository.findByPersonalId(personalId).orElse(null);
        List<StudentSubject> StudentSubjects = studentSubjectRespository.findByStudent(student).orElse(null);
        return StudentSubjects;
    }

}
