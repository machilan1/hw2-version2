import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl} from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { Validators } from '@angular/forms';

@Component({
  imports:[ReactiveFormsModule],
  standalone:true,
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit{

  contactForm!:FormGroup;
  
  ngOnInit(){
    this.contactForm = new FormGroup({
      username:new FormControl("Tom",Validators.required),
      email:new FormControl("google@yahoo.com",Validators.email),
      phonenum:new FormControl("0988888767"),
      topic:new FormControl("Love your stuffs!",Validators.required),
      message:new FormControl("You are the best!",Validators.required),
      check:new FormControl(null,Validators.required),
    

    });
  }
  sendForm(){
    console.log(this.contactForm)
    console.log(this.contactForm.status)

  }
}
