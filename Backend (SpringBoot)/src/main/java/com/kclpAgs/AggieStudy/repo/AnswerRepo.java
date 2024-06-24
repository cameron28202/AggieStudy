package com.kclpAgs.AggieStudy.repo;

import com.kclpAgs.AggieStudy.model.Answer;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource
public interface AnswerRepo extends JpaRepository<Answer, Long> {
}
