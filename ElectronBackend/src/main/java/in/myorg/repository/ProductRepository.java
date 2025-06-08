package in.myorg.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import in.myorg.entity.ProductEntity;

public interface ProductRepository extends JpaRepository<ProductEntity, Integer> {

}
