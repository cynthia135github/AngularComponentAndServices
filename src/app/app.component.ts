import { Component, VERSION } from '@angular/core';
import { Router } from '@angular/router';
import { GlobalvarService } from './globalvar.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular ' + VERSION.major;

  constructor(private router : Router, public globalvar : GlobalvarService){
    this.namaglobal = this.globalvar.getNama();
  }

  textnama = "";
  namaglobal;

  OPENHALLOGIN(){
    this.globalvar.setNama(this.textnama);
    this.namaglobal = this.globalvar.getNama();
    this.router.navigate(["/home/"+this.textnama]);
  }
}

