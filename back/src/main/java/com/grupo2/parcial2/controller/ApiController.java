package com.grupo2.parcial2.controller;

import com.grupo2.parcial2.model.StudentSubject;
import com.grupo2.parcial2.service.StudentService;
import com.grupo2.parcial2.service.SubjectService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/v1/student")
@CrossOrigin("*")
public class ApiController {

    public ApiController(){

    }
    private StudentService studentService;
    private SubjectService subjectService;

    public ApiController(StudentService studentService, SubjectService subjectService) {
        this.studentService = studentService;
        this.subjectService = subjectService;
    }

    public ApiController(StudentService service) {
        this.studentService = service;
    }

    @GetMapping ("/get/grades/{personal_id}")
    public ResponseEntity<?> getStudentGrades(
            @PathVariable String personal_id
    ){
        List<StudentSubject> grades = this.studentService.findGradesByPersonalId(personal_id);
        return new ResponseEntity<>(grades, HttpStatus.OK);
    }

    @PostMapping("/post/grades")
    public ResponseEntity<?> addStudentGrade(
            @RequestParam double grade,
            @RequestParam String personalId,
            @RequestParam String subjectName,
            @RequestParam String description
    ) {

        StudentSubject grades = subjectService.addGradeToSubject(grade, personalId, subjectName, description);

        return new ResponseEntity<>(grades, HttpStatus.OK);


    }

}
