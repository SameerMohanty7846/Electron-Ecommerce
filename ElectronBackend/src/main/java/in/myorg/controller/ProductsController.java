package in.myorg.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import in.myorg.dto.ProductDto;
import in.myorg.entity.ProductEntity;
import in.myorg.service.ProductService;

@RestController
@RequestMapping("/electron")
@CrossOrigin(origins = "*")
public class ProductsController {
	@Autowired
	private ProductService service;

	@GetMapping("/products")
	public ResponseEntity<?> getAllProducts() {
		return ResponseEntity.status(HttpStatus.OK).body(service.getAll());
	}

	@PostMapping("/products")
	public ResponseEntity<?> insertProduct(@RequestBody ProductDto dto) {
		ProductEntity e = service.insert(dto);
		System.out.println(dto);
		if (e != null) {
			return ResponseEntity.status(HttpStatus.CREATED).body(e);

		} else {
			return ResponseEntity.status(HttpStatus.BAD_GATEWAY).body(e);

		}
	}

	// insert product
	// get all products
	//get product by id

}
