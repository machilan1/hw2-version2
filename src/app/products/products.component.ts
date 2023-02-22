import { Component } from '@angular/core';
import { CardComponent } from '../card/card.component';
import { CommonModule } from '@angular/common';
import { NavtagSideComponent} from '../navtag-side/navtag-side.component';
import { NavtagComponent } from '../navtag/navtag.component';

 interface Card{
    picture:string;
    pictureHover:string;
    title:string;
    price:number;
    discount:number;
    soldout:boolean;
    tag:string;
 }
@Component({
  imports:[CardComponent,CommonModule,NavtagSideComponent,NavtagComponent],
  standalone:true,
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {

  atFilter:boolean=true;

  cards:Card[]=[
    {picture:' /assets/img/home/product/1-1-1.webp',pictureHover:' /assets/img/home/product/1-1-2.webp',title:'依戀系列鮮花 - 情人節當日花束（不挑款）',price:1680,discount:0,soldout:false,tag:''},
    {picture:' /assets/img/home/product/1-2-1.webp',pictureHover:' /assets/img/home/product/1-2-2.webp',title:'依戀系列鮮花 - 玫瑰花束',price:2280,discount:0,soldout:false,tag:'站長推薦'},
    {picture:' /assets/img/home/product/1-3-1.webp',pictureHover:' /assets/img/home/product/1-3-2.webp',title:'依戀系列鮮花 - 經典花束',price:2680,discount:0,soldout:false,tag:''},
    {picture:' /assets/img/home/product/1-4-1.webp',pictureHover:' /assets/img/home/product/1-4-2.webp',title:'依戀系列鮮花 - 編織提籃',price:3680,discount:0,soldout:false,tag:'熱賣中'},
    {picture:' /assets/img/home/product/1-5-1.webp',pictureHover:' /assets/img/home/product/1-5-2.webp',title:'依戀系列鮮花 - 大花束',price:4280,discount:0,soldout:false,tag:''},
    {picture:' /assets/img/home/product/1-6-1.webp',pictureHover:' /assets/img/home/product/1-6-2.webp',title:'依戀系列鮮花 - 巨型99玫瑰花束',price:16000,discount:0,soldout:false,tag:''},
    {picture:' /assets/img/home/product/2-1-1.webp',pictureHover:' /assets/img/home/product/2-1-2.webp',title:'初戀系列永生花 - 愛戀粉單朵玫瑰花束',price:1500,discount:1480,soldout:false,tag:''},
    {picture:' /assets/img/home/product/2-2-1.webp',pictureHover:' /assets/img/home/product/2-2-2.webp',title:'初戀系列永生花 - 玫瑰花盒',price:2280,discount:2080,soldout:false,tag:'儘享永恆的美好'},
    {picture:' /assets/img/home/product/2-3-1.webp',pictureHover:' /assets/img/home/product/2-3-2.webp',title:'初戀系列永生花 - 戒台珠寶盒',price:2880,discount:2780,soldout:true,tag:''},
    {picture:' /assets/img/home/product/2-4-1.webp',pictureHover:' /assets/img/home/product/2-4-2.webp',title:'初戀系列永生花 - 玫瑰相框',price:2880,discount:2780,soldout:false,tag:''},
    {picture:' /assets/img/home/product/2-5-1.webp',pictureHover:' /assets/img/home/product/2-5-2.webp',title:'初戀系列永生花 - 鐘罩',price:3580,discount:3480,soldout:false,tag:''},
    {picture:' /assets/img/home/product/2-6-1.webp',pictureHover:' /assets/img/home/product/2-6-2.webp',title:'初戀系列永生花 - 大鐘罩',price:5800,discount:5520,soldout:false,tag:''},
    {picture:' /assets/img/home/product/3-1-1.webp',pictureHover:' /assets/img/home/product/3-1-2.webp',title:'中式花禮．蘭花系列 - 單株',price:1800,discount:0,soldout:false,tag:''},
    {picture:' /assets/img/home/product/3-2-1.webp',pictureHover:' /assets/img/home/product/3-2-2.webp',title:'中式花禮．蘭花系列 - 小組盆',price:2880,discount:0,soldout:false,tag:''},
    {picture:' /assets/img/home/product/3-3-1.webp',pictureHover:' /assets/img/home/product/3-3-2.webp',title:'中式花禮．蘭花系列 - 生態瓶',price:4580,discount:0,soldout:true,tag:''},
    {picture:' /assets/img/home/product/3-4-1.webp',pictureHover:' /assets/img/home/product/3-4-2.webp',title:'中式花禮．蘭花系列 - 大組盆',price:6280,discount:0,soldout:false,tag:''},
    {picture:' /assets/img/home/product/4-1-1.webp',pictureHover:' /assets/img/home/product/4-1-2.webp',title:'浪花當日限定花束 - 小',price:800,discount:0,soldout:false,tag:''},
    {picture:' /assets/img/home/product/4-2-1.webp',pictureHover:' /assets/img/home/product/4-2-2.webp',title:'浪花當日限定花束 - 中',price:1200,discount:0,soldout:false,tag:''},
    {picture:' /assets/img/home/product/4-3-1.webp',pictureHover:' /assets/img/home/product/4-3-2.webp',title:'浪花當日限定花束 - 大',price:2200,discount:0,soldout:true,tag:''},
    {picture:' /assets/img/home/product/5-1-1.webp',pictureHover:' /assets/img/home/product/5-1-2.webp',title:'訂閱服務｜生活週花 - 經典',price:1480,discount:0,soldout:false,tag:''},
    {picture:' /assets/img/home/product/5-2-1.webp',pictureHover:' /assets/img/home/product/5-2-2.webp',title:'訂閱服務｜生活週花 - 進階',price:2280,discount:0,soldout:false,tag:''},
    {picture:' /assets/img/home/product/5-3-1.webp',pictureHover:' /assets/img/home/product/5-3-2.webp',title:'訂閱服務｜生活週花 - 財運',price:1680,discount:0,soldout:true,tag:''},
    {picture:' /assets/img/home/product/5-4-1.webp',pictureHover:' /assets/img/home/product/5-4-2.webp',title:'訂閱服務｜生活週花 - 人緣',price:1480,discount:0,soldout:false,tag:''},
    {picture:' /assets/img/home/product/2-3-1.webp',pictureHover:' /assets/img/home/product/2-3-2.webp',title:'初戀系列永生花 - 戒台珠寶盒',price:2880,discount:2780,soldout:true,tag:''}
  ]
  filterTags=[
    {
      title:"商品排序",
      subtags:[{subtag:"上架時間 由新到舊",link:'/products'},{subtag:"上架時間 由舊到新",link:'/products'},{subtag:"價格 由高到低",link:'/products'},{subtag:"價格 由低到高",link:'/products'}]
    },
    {
      title:"每頁顯示",
      subtags:[{subtag:"每頁顯示24項商品",link:'/products'},{subtag:"每頁顯示48項商品",link:'/products'}]
    }
  ]
  tags=[
    {
      title:"訂閱制生活週花",
      subtags:[]
    },
    {
      title:"永生花現貨專區",
      subtags:[]
    },
    {
      title:"鮮花急件專區",
      subtags:[]
    },
    {
      title:"永生花禮",
      subtags:[{subtag:"精選永生花禮",link:"products"},{subtag:"初戀系列",link:"products"},{subtag:"婚禮",link:"products"}]
    },
    {
      title:"鮮花禮",
      subtags:[{subtag:"精選永生花禮",link:"products"},{subtag:"初戀系列",link:"products"},{subtag:"婚禮",link:"products"}]
    },
    {
      title:"求婚花束",
      subtags:[{subtag:"精選永生花禮",link:"products"},{subtag:"初戀系列",link:"products"},{subtag:"婚禮",link:"products"}]
    },
    {
      title:"高架花籃、鮮花盆花",
      subtags:[{subtag:"Line官方客服",link:"products"},{subtag:"Instagram",link:"products"},{subtag:"Facebook",link:"products"},{subtag:"實體店面",link:"products"},{subtag:"常見問題",link:"products"},{subtag:"訂購流程",link:"products"},{subtag:"售後服務",link:"products"},{subtag:"網站約定與隱私條款",link:"products"}]
    },
    {
      title:"捧花",
      subtags:[{subtag:"Line官方客服",link:"products"},{subtag:"Instagram",link:"products"},{subtag:"Facebook",link:"products"},{subtag:"實體店面",link:"products"},{subtag:"常見問題",link:"products"},{subtag:"訂購流程",link:"products"},{subtag:"售後服務",link:"products"},{subtag:"網站約定與隱私條款",link:"products"}]
    },
    {
      title:"酒禮",
      subtags:[{subtag:"Line官方客服",link:"products"},{subtag:"Instagram",link:"products"},{subtag:"Facebook",link:"products"},{subtag:"實體店面",link:"products"},{subtag:"常見問題",link:"products"},{subtag:"訂購流程",link:"products"},{subtag:"售後服務",link:"products"},{subtag:"網站約定與隱私條款",link:"products"}]
    },
    {
      title:"週邊商品",
      subtags:[{subtag:"Line官方客服",link:"products"},{subtag:"Instagram",link:"products"},{subtag:"Facebook",link:"products"},{subtag:"實體店面",link:"products"},{subtag:"常見問題",link:"products"},{subtag:"訂購流程",link:"products"},{subtag:"售後服務",link:"products"},{subtag:"網站約定與隱私條款",link:"products"}]
    }
  ]

}
