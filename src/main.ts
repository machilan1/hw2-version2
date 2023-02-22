import { bootstrapApplication } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { routes } from './app/routes';
import{importProvidersFrom} from '@angular/core';
import { AppComponent } from './app/app.component';

bootstrapApplication(AppComponent,{
  providers:[
    importProvidersFrom(RouterModule.forRoot(routes))
  ]

})
  .catch(err => console.error(err));
