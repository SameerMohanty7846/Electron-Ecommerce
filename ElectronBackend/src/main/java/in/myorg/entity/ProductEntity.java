package in.myorg.entity;

import java.time.LocalDateTime;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="product_data")
public class ProductEntity {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer id;
	private String category;
	private String title;
	private String imgSrc;
	private String amazonLink;
	private String description;
	private Integer price;
	
	private LocalDateTime ldt;

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getCategory() {
		return category;
	}

	public void setCategory(String category) {
		this.category = category;
	}

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public String getImgSrc() {
		return imgSrc;
	}

	public void setImgSrc(String imgSrc) {
		this.imgSrc = imgSrc;
	}

	public String getAmazonLink() {
		return amazonLink;
	}

	public void setAmazonLink(String amazonLink) {
		this.amazonLink = amazonLink;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public Integer getPrice() {
		return price;
	}

	public void setPrice(Integer price) {
		this.price = price;
	}

	public LocalDateTime getLdt() {
		return ldt;
	}

	public void setLdt(LocalDateTime ldt) {
		this.ldt = ldt;
	}

	@Override
	public String toString() {
		return "ProductEntity [id=" + id + ", category=" + category + ", title=" + title + ", imgSrc=" + imgSrc
				+ ", amazonLink=" + amazonLink + ", description=" + description + ", price=" + price + ", ldt=" + ldt
				+ "]";
	}

	public ProductEntity(Integer id, String category, String title, String imgSrc, String amazonLink,
			String description, Integer price, LocalDateTime ldt) {
		super();
		this.id = id;
		this.category = category;
		this.title = title;
		this.imgSrc = imgSrc;
		this.amazonLink = amazonLink;
		this.description = description;
		this.price = price;
		this.ldt = ldt;
	}

	public ProductEntity() {
		super();
		// TODO Auto-generated constructor stub
	}
	
	
	
	
	
	
	
	
}
