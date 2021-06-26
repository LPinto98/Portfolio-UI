import { OnInit } from '@angular/core';
import { AfterViewInit } from '@angular/core';
import { Component } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit{
  title = 'sabina';
  constructor(private spinner : NgxSpinnerService){}
  ngAfterViewInit(): void {
    this.spinner.hide();
  }

  ngOnInit(){
    this.spinner.show();
    // document.ready(function(){

    // })
    // setTimeout(()=>{
    //   this.spinner.hide();
    // }, 5000);
  }

  scroll(el_id: string){
    console.log("Scrolling to ",el_id);
    let el = document.getElementById(el_id);
    el?.scrollIntoView();
  }
}
