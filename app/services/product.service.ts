import { Injectable } from "@angular/core";
import { Http, Headers } from "@angular/http";
import "rxjs/add/operator/toPromise";

import { SanPham } from "../models/san_pham";

import { NguoiDung } from "../models/nguoi_dung";
import { Body } from "@angular/http/src/body";

@Injectable()
export class ProductService {
  constructor(private http: Http) {}

  getListProduct(): Promise<SanPham[]> {
    return this.http
      .get("https://api-ban-sach.herokuapp.com/getSanPham")
      .toPromise()
      .then(data => data.json() as SanPham[]);
  }

  getListProductbyCondition(isnoiBat: boolean): Promise<SanPham[]> {
    if (isnoiBat) {
      return this.getListProduct().then(data => {
        return data.filter(x => x.noi_bat == 1);
      });
    }
    return this.getListProduct().then(data => {
      return data.filter(x => x.noi_bat != 1);
    });
  }


  getListNguoiDung(): Promise<NguoiDung[]> {
    const url = "https://api-ban-sach.herokuapp.com/postUserName";
    const header = new Headers({ "Content-Type": "application/json" });
    const body = JSON.stringify({ token: "1234567890" });
    return this.http
      .post(url, body, header )
      .toPromise()
      .then(data => data.json() as NguoiDung[]);
  }
}
