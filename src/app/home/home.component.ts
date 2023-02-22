import { Component ,OnInit, AfterViewInit} from '@angular/core';
import { CardComponent } from '../card/card.component';
import { CommonModule } from '@angular/common';
import {ScrollingModule} from '@angular/cdk/scrolling';

   export interface Card{
    picture:string;
    pictureHover:string;
    title:string;
    price:number;
    discount:number;
    soldout:boolean;
    tag:string;
  }

  export interface Sections{
    slide:boolean;
    slideImg:Array<{url:string}>;
    img:string;
    texts:string;
    showtitle:string;
    cards:Card[];
  }


@Component({
  imports:[CardComponent,CommonModule,ScrollingModule],
  standalone:true,
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit{

  isAtHome:boolean=true;
  onTop =true;


  ngOnInit(): void {

      }


  sections:Sections[]=[
    {
      slide:true,
      slideImg:[{url:' /assets/img/home/banner1-1.webp'},{url:' /assets/img/home/banner1-2.webp'}],
      img:' /assets/img/home/banner1-2.webp',
      texts:`我喜歡你親手替我挑的花朵.我喜歡你經過那裡.便會想起我. .我喜歡和你徘徊在巷口.將你為我挑選的那束玫瑰.放入單車中..我喜歡和你共度的那個午後.將我們的情感.用花訴說`,
    showtitle:"依戀系列鮮花",
    cards:[
      {picture:' /assets/img/home/product/1-1-1.webp',pictureHover:' /assets/img/home/product/1-1-2.webp',title:'依戀系列鮮花 - 情人節當日花束（不挑款）',price:1680,discount:0,soldout:false,tag:''},
      {picture:' /assets/img/home/product/1-2-1.webp',pictureHover:' /assets/img/home/product/1-2-2.webp',title:'依戀系列鮮花 - 玫瑰花束',price:2280,discount:0,soldout:false,tag:'我們的No.1'},
      {picture:' /assets/img/home/product/1-3-1.webp',pictureHover:' /assets/img/home/product/1-3-2.webp',title:'依戀系列鮮花 - 經典花束',price:2680,discount:0,soldout:false,tag:''},
      {picture:' /assets/img/home/product/1-4-1.webp',pictureHover:' /assets/img/home/product/1-4-2.webp',title:'依戀系列鮮花 - 編織提籃',price:3680,discount:0,soldout:false,tag:'倒數十組'},
      {picture:' /assets/img/home/product/1-5-1.webp',pictureHover:' /assets/img/home/product/1-5-2.webp',title:'依戀系列鮮花 - 大花束',price:4280,discount:0,soldout:false,tag:''},
      {picture:' /assets/img/home/product/1-6-1.webp',pictureHover:' /assets/img/home/product/1-6-2.webp',title:'依戀系列鮮花 - 巨型99玫瑰花束',price:16000,discount:0,soldout:false,tag:''}
    ]
    
    },
    {
      slide:false,
      slideImg:[],
      img:' /assets/img/home/banner2-1.webp',
      texts:`我不曾妄想了解愛. 直到遇見你...你像耀眼的光.穿透了所有偽裝與隱藏.讓我展露最真誠的情感...你是午後的微風.溫柔地吹起.我深藏心底的悸動`,
    showtitle:"初戀系列永生花",
    cards:[
      {picture:' /assets/img/home/product/2-1-1.webp',pictureHover:' /assets/img/home/product/2-1-2.webp',title:'初戀系列永生花 - 愛戀粉單朵玫瑰花束',price:1500,discount:1480,soldout:false,tag:''},
      {picture:' /assets/img/home/product/2-2-1.webp',pictureHover:' /assets/img/home/product/2-2-2.webp',title:'初戀系列永生花 - 玫瑰花盒',price:2280,discount:2080,soldout:false,tag:''},
      {picture:' /assets/img/home/product/2-3-1.webp',pictureHover:' /assets/img/home/product/2-3-2.webp',title:'初戀系列永生花 - 戒台珠寶盒',price:2880,discount:2780,soldout:true,tag:''},
      {picture:' /assets/img/home/product/2-4-1.webp',pictureHover:' /assets/img/home/product/2-4-2.webp',title:'初戀系列永生花 - 玫瑰相框',price:2880,discount:2780,soldout:false,tag:'放入您最珍愛的相片'},
      {picture:' /assets/img/home/product/2-5-1.webp',pictureHover:' /assets/img/home/product/2-5-2.webp',title:'初戀系列永生花 - 鐘罩',price:3580,discount:3480,soldout:false,tag:''},
      {picture:' /assets/img/home/product/2-6-1.webp',pictureHover:' /assets/img/home/product/2-6-2.webp',title:'初戀系列永生花 - 大鐘罩',price:5800,discount:5520,soldout:false,tag:''}
    ]
    
    },
    {
      slide:false,
      slideImg:[],
      img:' /assets/img/home/banner3-1.webp',
      texts:`我以君子之身.向世人展現高貴姿態.你問我何以高貴？.我就是那孤傲的清流.那潔淨無濁的象徵.僅有我.始終散發著典雅的芳香.與集一身的內斂氣質`,
    showtitle:"中式花禮．蘭花系列",
    cards:[
      {picture:' /assets/img/home/product/3-1-1.webp',pictureHover:' /assets/img/home/product/3-1-2.webp',title:'中式花禮．蘭花系列 - 單株',price:1800,discount:0,soldout:false,tag:''},
      {picture:' /assets/img/home/product/3-2-1.webp',pictureHover:' /assets/img/home/product/3-2-2.webp',title:'中式花禮．蘭花系列 - 小組盆',price:2880,discount:0,soldout:false,tag:''},
      {picture:' /assets/img/home/product/3-3-1.webp',pictureHover:' /assets/img/home/product/3-3-2.webp',title:'中式花禮．蘭花系列 - 生態瓶',price:4580,discount:0,soldout:true,tag:''},
      {picture:' /assets/img/home/product/3-4-1.webp',pictureHover:' /assets/img/home/product/3-4-2.webp',title:'中式花禮．蘭花系列 - 大組盆',price:6280,discount:0,soldout:false,tag:''}
    ]
    
    },
    {
      slide:false,
      slideImg:[],
      img:' /assets/img/home/banner4-1.webp',
      texts:`我想邀請你用花和我一起寫下日記.隨著心情、隨著節氣.我想與你用這天最美的花留下回憶.伴著日常、與花同行`,
    showtitle:"當日限定",
    cards:[
      {picture:' /assets/img/home/product/4-1-1.webp',pictureHover:' /assets/img/home/product/4-1-2.webp',title:'浪花當日限定花束 - 小',price:800,discount:0,soldout:false,tag:''},
      {picture:' /assets/img/home/product/4-2-1.webp',pictureHover:' /assets/img/home/product/4-2-2.webp',title:'浪花當日限定花束 - 中',price:1200,discount:0,soldout:false,tag:''},
      {picture:' /assets/img/home/product/4-3-1.webp',pictureHover:' /assets/img/home/product/4-3-2.webp',title:'浪花當日限定花束 - 大',price:2200,discount:0,soldout:true,tag:''},
    ]
    
    },
    {
      slide:false,
      slideImg:[],
      img:' /assets/img/home/banner5-1.webp',
      texts:``,
    showtitle:"訂閱制生活週花",
    cards:[
      {picture:' /assets/img/home/product/5-1-1.webp',pictureHover:' /assets/img/home/product/5-1-2.webp',title:'訂閱服務｜生活週花 - 經典',price:1480,discount:0,soldout:false,tag:''},
      {picture:' /assets/img/home/product/5-2-1.webp',pictureHover:' /assets/img/home/product/5-2-2.webp',title:'訂閱服務｜生活週花 - 進階',price:2280,discount:0,soldout:false,tag:''},
      {picture:' /assets/img/home/product/5-3-1.webp',pictureHover:' /assets/img/home/product/5-3-2.webp',title:'訂閱服務｜生活週花 - 財運',price:1680,discount:0,soldout:true,tag:''},
      {picture:' /assets/img/home/product/5-4-1.webp',pictureHover:' /assets/img/home/product/5-4-2.webp',title:'訂閱服務｜生活週花 - 人緣',price:1480,discount:0,soldout:false,tag:''}
    ]
    
    }
  ]




}
