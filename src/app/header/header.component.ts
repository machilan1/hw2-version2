import { Component, Input, OnInit } from "@angular/core";
import { CommonModule } from '@angular/common';
import { NavbarComponent } from "../navbar/navbar.component";
import { ChatComponent } from "../chat/chat.component";
@Component({
  imports:[CommonModule,NavbarComponent,ChatComponent],
  standalone:true,
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit{
  @Input()isOnTop!:boolean;

  cartIsOpen:boolean=false;
  sendOpenSignal(){
    return this.cartIsOpen
  }

  ngOnInit(): void {
  
  }

}
