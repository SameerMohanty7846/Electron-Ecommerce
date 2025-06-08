package in.myorg.dto;

public class ProductDto {
	
	private String category;
	private String title;
	private String imgSrc;
	private String amazonLink;
	private String description;
	private Integer price;
	
	
	
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
	@Override
	public String toString() {
		return "ProductDto [category=" + category + ", title=" + title + ", imgSrc=" + imgSrc + ", amazonLink="
				+ amazonLink + ", description=" + description + ", price=" + price + "]";
	}
	public ProductDto(String category, String title, String imgSrc, String amazonLink, String description,
			Integer price) {
	
		this.category = category;
		this.title = title;
		this.imgSrc = imgSrc;
		this.amazonLink = amazonLink;
		this.description = description;
		this.price = price;
	}
	
	
	
	
	
	
//	id: 1,
//    category: "mobiles",
//    title: "Apple iPhone 14",
//    imgSrc: "https://m.media-amazon.com/images/I/713SsA7gftL._AC_UY218_.jpg",
//    amazonLink: "https://amzn.to/3PuckZp",
//    description: "Apple iPhone 14 (128 GB) - Blue",
//    price: "89999",

}
