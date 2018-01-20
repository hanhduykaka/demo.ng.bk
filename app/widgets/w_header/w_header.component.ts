import { Component, OnInit } from "@angular/core";
import { ProductService } from "../../services/product.service";

@Component({
  selector: "w_header",
  templateUrl: "./w_header.component.html"
})
export class WheaderComponent implements OnInit {
  constructor(private product_service: ProductService) {
    this.product_service.getListNguoiDung().then(data => {
      console.log(data);
    });
  }
  ngOnInit() {}
}
