package com.grupo2.parcial2.model;

import jakarta.persistence.Column;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.io.Serializable;
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class StudentSubjectKey implements Serializable {

    @Column(name = "student_id")
    private Long studentId;

    @Column(name = "Subject_id")
    private Long SubjectId;

}
