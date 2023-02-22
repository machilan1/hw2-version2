import { Router, Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { ContactComponent } from "./contact/contact.component";
import { ProductsComponent } from "./products/products.component";
import { OopsComponent } from "./oops/oops.component";
export const routes:Routes=[
    {path:'', redirectTo:'home',pathMatch:'full'},
    {path:'home',component:HomeComponent},
    {path:'contact',component:ContactComponent},
    {path:'products',component:ProductsComponent},
    {path:'**',component:OopsComponent}

]