import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import { CanComponentLeave } from '../guards/can-deactivate.guard';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit, CanComponentLeave {

  name: FormControl = new FormControl();
  lname: FormControl = new FormControl();
  email: FormControl = new FormControl();
  subject: FormControl = new FormControl();
  message: FormControl = new FormControl();

  canLeave(): boolean{
    if(this.name.dirty || this.lname.dirty || this.email.dirty || this.subject.dirty || this.message.dirty){
      return confirm("You have some unsaved changes. Are you sure you want to navigate away?");
    }
  return true;
  }

  ngOnInit(): void {
  }

}