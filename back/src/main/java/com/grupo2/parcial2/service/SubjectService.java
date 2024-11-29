package com.grupo2.parcial2.service;

import com.grupo2.parcial2.repository.SubjectRepository;
import org.springframework.stereotype.Service;

@Service
public class SubjectService {
    private final SubjectRepository subjectRepository;

    public SubjectService(SubjectRepository subjectRepository) {
        this.subjectRepository = subjectRepository;
    }
}
