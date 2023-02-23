import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { Router, RouterModule } from '@angular/router';
import { WidgetCartComponent } from './widget-cart/widget-cart.component';
@Component({
  imports:[HeaderComponent,RouterModule,WidgetCartComponent],
  standalone:true,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  
  onTop =true;

  ngOnInit(): void {
    
    window.addEventListener("scroll",()=>{
      if(document.documentElement.scrollTop>20){
     this.onTop=false;

    }else{
      this.onTop =true;
      }
    })
  }
  title = 'waveFlower'
}
