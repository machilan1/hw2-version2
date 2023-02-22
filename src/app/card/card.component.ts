import { Component, Input,OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Card } from '../home/home.component';

@Component({
  standalone:true,
  imports:[CommonModule],
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit{
  
  @Input() card!:Card;
  @Input() atHome!:boolean;
  type:string= this.atHome? 'home':'product'
  
  ngOnInit(): void {
  }
}
