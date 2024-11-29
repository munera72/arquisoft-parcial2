package com.grupo2.parcial2.service;

import com.grupo2.parcial2.model.Student;
import com.grupo2.parcial2.model.StudentSubject;
import com.grupo2.parcial2.model.Subject;
import com.grupo2.parcial2.repository.StudentRepository;
import com.grupo2.parcial2.repository.StudentSubjectRespository;
import com.grupo2.parcial2.repository.SubjectRepository;
import org.springframework.stereotype.Service;

@Service
public class SubjectService {
    private final SubjectRepository subjectRepository;
    private final StudentSubjectRespository studentSubjectRespository;
    private final StudentRepository studentRepository;

    public SubjectService(SubjectRepository subjectRepository, StudentSubjectRespository studentSubjectRespository, StudentRepository studentRepository) {
        this.subjectRepository = subjectRepository;
        this.studentSubjectRespository = studentSubjectRespository;
        this.studentRepository = studentRepository;
    }

    public StudentSubject addGradeToSubject(double grade, String personalId, String nameSubject, String description){
        Student student = studentRepository.findByPersonalId(personalId).orElse(null);
        Subject subject = subjectRepository.findByName(nameSubject).orElse(null);
        StudentSubject studentSubject =  new StudentSubject(null, student,subject, grade, description);
        return studentSubjectRespository.save(studentSubject);
    }
}
