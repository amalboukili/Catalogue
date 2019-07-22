package org.sid.catservice.dao;

import java.util.List;

import org.sid.catservice.entities.Produit;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.data.rest.core.annotation.RestResource;

@RepositoryRestResource
public interface ProduitRepository extends JpaRepository<Produit,Long>{
    @RestResource(path = "/byDesignation")
    public List<Produit> findByDesignationContains(@Param("mc") String des);
}