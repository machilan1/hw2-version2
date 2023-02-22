import { Component,Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Tag } from '../navbar/navbar.component';


@Component({
  imports:[CommonModule],
  standalone:true,
  selector: 'app-navtag',
  templateUrl: './navtag.component.html',
  styleUrls: ['./navtag.component.scss'],
})


export class NavtagComponent implements OnInit{
@Input() tag!:Tag;
@Input() inFilter!:boolean;

atFilter:boolean=false;
ngOnInit(): void {
  this.atFilter =this.inFilter
}
}
