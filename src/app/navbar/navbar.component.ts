import { Component} from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavtagComponent } from '../navtag/navtag.component';


export interface Subtag{
  subtag:string;
  link:string;
}
export interface Tag {
  title: string;
  subtags: Subtag[];
}

@Component({
  imports:[CommonModule,NavtagComponent],
  standalone:true,
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  
})

export class NavbarComponent {
  
  tags:Tag[]=[
    {
      title:"花禮",
      subtags:[{subtag:"聯絡我們",link:'/contact'},{subtag:"精選鮮花",link:'/products'},{subtag:'精選永生花',link:'products'},{subtag:'求婚花束',link:'products'},{subtag:'捧花',link:'products'},{subtag:'高架花籃',link:'products'},{subtag:'酒禮',link:'products'},{subtag:'當日限定花束',link:'products'},{subtag:'所有商品',link:'products'},{subtag:'花禮維護與照顧',link:'products'}]
    },
    {
      title:"周花",
      subtags:[{subtag:"生活週花網誌",link:"/products"},{subtag:"訂閱生活週花",link:"products"}]
    },
    {
      title:"周邊",
      subtags:[]
    },
    {
      title:"婚禮",
      subtags:[{subtag:"求婚企劃",link:"products"},{subtag:"永生相片桌",link:"products"},{subtag:"婚禮",link:"products"}]
    },
    {
      title:"作品",
      subtags:[]
    },
    {
      title:"課程",
      subtags:[]
    },
    {
      title:"關於浪花",
      subtags:[{subtag:"Line官方客服",link:"products"},{subtag:"Instagram",link:"products"},{subtag:"Facebook",link:"products"},{subtag:"實體店面",link:"products"},{subtag:"常見問題",link:"products"},{subtag:"訂購流程",link:"products"},{subtag:"售後服務",link:"products"},{subtag:"網站約定與隱私條款",link:"products"}]
    }
  ]


}
