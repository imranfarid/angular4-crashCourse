import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  name:string = 'Tony Stark';
  age:number;
  email:string;
  address:Address;
  hobbies:string[];
  hello:any;

  constructor() { 
    console.log('constructor ran');
  }

  ngOnInit() {
    console.log('ngOnInit ran');

    this.name = 'Peter Parker'
    this.age = 30;
    this.email = 'parker@gmail.com';
    this.address = {
      street: '50 st avenue',
      city: 'Boston',
      state: 'CA'
    }
    this.hobbies = ['swing', 'climb', 'design'];
  }

}

interface Address{
    street:string,
    city:string,
    state:string
  }