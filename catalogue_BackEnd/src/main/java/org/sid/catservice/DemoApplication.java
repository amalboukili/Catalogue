package org.sid.catservice;

import org.sid.catservice.dao.ProduitRepository;
import org.sid.catservice.entities.Produit;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class DemoApplication implements CommandLineRunner {
	@Autowired
	private ProduitRepository produitRepository;
	public static void main(String[] args) {
		SpringApplication.run(DemoApplication.class, args);
	}

	@Override
	public void run(String... args) throws Exception {
		produitRepository.save(new Produit(null, "Ordinateur hp 45", 6700.00, 3)); 
		produitRepository.save(new Produit(null, "Imprimante Canon", 1700, 3)); 
		produitRepository.save(new Produit(null, "Smart Phone HUAWEI Y7", 1800, 13)); 

		produitRepository.findAll().forEach(p->{
			System.out.println(p.toString());
		});
	}


}
