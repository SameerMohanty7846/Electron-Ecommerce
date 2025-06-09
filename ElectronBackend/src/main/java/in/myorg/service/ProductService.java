package in.myorg.service;

import java.time.LocalDateTime;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import in.myorg.dto.ProductDto;
import in.myorg.entity.ProductEntity;
import in.myorg.repository.ProductRepository;

@Service
public class ProductService {
	@Autowired
	private ProductRepository repo;
	
	public ProductEntity insert(ProductDto dto) {
		ProductEntity entity=new ProductEntity();
		entity.setAmazonLink(dto.getAmazonLink());
		entity.setCategory(dto.getCategory());
		entity.setDescription(dto.getDescription());
		entity.setImgSrc(dto.getImgSrc());
		entity.setLdt(LocalDateTime.now());
		entity.setPrice(dto.getPrice());
		entity.setTitle(dto.getTitle());
		
		return repo.save(entity);
		
	}
	public List<ProductEntity> getAll(){
		return repo.findAll();
	}
	public ProductEntity getProductById(Integer id) {
		   return  repo.findById(id).get();
	}

}
