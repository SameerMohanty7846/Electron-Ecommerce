package in.myorg;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class ElectronBackendApplication {

	public static void main(String[] args) {
		SpringApplication.run(ElectronBackendApplication.class, args);
		System.out.println("STARTED.....");
	}

}
