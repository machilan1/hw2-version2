import { Component , Input, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  imports:[CommonModule],
  standalone:true,
  selector: 'app-navtag-side',
  templateUrl: './navtag-side.component.html',
  styleUrls: ['./navtag-side.component.scss']
})


export class NavtagSideComponent implements OnInit{
  @Input() tag:any

  isOpen:boolean=false
  subHeight:string=''
  setHeight(){
    this.subHeight =`${this.tag.subtags.length*43}px`
  }
  ngOnInit(): void {
  }
  
}

