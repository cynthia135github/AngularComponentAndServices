import { Injectable } from '@angular/core';

@Injectable()
export class GlobalvarService {

  private Datanama : String = "usercoba";
  constructor() { }

  public getNama(){
    return this.Datanama
  }

  public setNama(nama : String){
    this.Datanama = nama;
  }

}